import assert from "node:assert/strict";
import test from "node:test";
import { createClient } from "@supabase/supabase-js";
import {
  appAuthStorageKey,
  signInWithGoogle,
} from "./googleAuth";

const supabaseUrl = "https://jxmtbvzdhayfxjgetyzq.supabase.co";
const storageKey = appAuthStorageKey(supabaseUrl);

function installBrowser() {
  const items = new Map<string, string>();
  const storage = {
    getItem(key: string) {
      return items.has(key) ? items.get(key)! : null;
    },
    setItem(key: string, value: string) {
      items.set(key, String(value));
    },
    removeItem(key: string) {
      items.delete(key);
    },
  };
  const windowValue = {
    localStorage: storage,
  };

  // Leave `document` unset so supabase-js treats this as a non-browser and
  // does not open a BroadcastChannel, which would keep the test process alive.
  Object.assign(globalThis, {
    window: windowValue,
    localStorage: storage,
  });

  return { storage };
}

test("Google sign-in asks for an account and stores the PKCE verifier for the app client", async () => {
  const previousUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const previousKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const previousFetch = globalThis.fetch;
  process.env.NEXT_PUBLIC_SUPABASE_URL = supabaseUrl;
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "test-anon-key";

  const browser = installBrowser();

  try {
    const { data: oauthData, error } = await signInWithGoogle(
      "http://localhost:3000/auth/callback"
    );

    assert.equal(error, null);
    assert.ok(oauthData.url);

    const authorize = new URL(oauthData.url);
    assert.equal(authorize.searchParams.get("provider"), "google");
    assert.equal(
      authorize.searchParams.get("prompt"),
      "select_account"
    );
    assert.equal(
      authorize.searchParams.get("redirect_to"),
      "http://localhost:3000/auth/callback"
    );
    assert.ok(authorize.searchParams.get("code_challenge"));

    const storedVerifier = JSON.parse(
      browser.storage.getItem(`${storageKey}-code-verifier`) ?? "null"
    );
    assert.equal(typeof storedVerifier, "string");
    assert.ok(storedVerifier.length > 0);

    let sentVerifier = "";
    globalThis.fetch = async (input, init) => {
      const href = String(input);
      assert.match(href, /\/token\?grant_type=pkce/);
      const body = JSON.parse(String(init?.body));
      sentVerifier = body.code_verifier;
      return new Response(
        JSON.stringify({
          access_token: "access-token",
          refresh_token: "refresh-token",
          expires_in: 3600,
          token_type: "bearer",
          user: {
            id: "user-1",
            email: "ada@example.com",
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };

    const appClient = createClient(
      supabaseUrl,
      "test-anon-key",
      {
        auth: {
          flowType: "implicit",
          storageKey,
          storage: browser.storage,
          persistSession: true,
          autoRefreshToken: false,
          detectSessionInUrl: false,
          skipAutoInitialize: true,
        },
      }
    );

    const { data, error: exchangeError } =
      await appClient.auth.exchangeCodeForSession("auth-code");

    assert.equal(exchangeError, null);
    assert.equal(data.session?.user.email, "ada@example.com");
    assert.equal(sentVerifier, storedVerifier);

    const saved = JSON.parse(
      browser.storage.getItem(storageKey) ?? "null"
    );
    assert.equal(saved.access_token, "access-token");
    assert.equal(saved.user.email, "ada@example.com");
  } finally {
    process.env.NEXT_PUBLIC_SUPABASE_URL = previousUrl;
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = previousKey;
    globalThis.fetch = previousFetch;
  }
});
