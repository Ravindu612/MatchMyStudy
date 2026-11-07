import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AppState, Linking } from "react-native";
import type { Session } from "@supabase/supabase-js";

import { authRedirectUrl, completeAuthUrl } from "@/lib/oauth";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import type { SignupRole } from "@/lib/validation";

type AuthContextValue = {
  ready: boolean;
  configured: boolean;
  session: Session | null;
  signInWithEmail: (
    email: string,
    password: string
  ) => Promise<{ error?: string }>;
  registerWithEmail: (input: {
    email: string;
    password: string;
    role: SignupRole;
  }) => Promise<{ error?: string; needsConfirmation?: boolean }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(!isSupabaseConfigured());
  const [session, setSession] = useState<Session | null>(null);
  const configured = isSupabaseConfigured();

  useEffect(() => {
    if (!configured) {
      return;
    }

    const supabase = getSupabase();
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) {
        return;
      }
      setSession(data.session);
      setReady(true);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, next) => {
        setSession(next);
        setReady(true);
      }
    );

    const appState = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    const links = Linking.addEventListener("url", ({ url }) => {
      void completeAuthUrl(url);
    });

    Linking.getInitialURL().then((url) => {
      if (url) {
        void completeAuthUrl(url);
      }
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
      appState.remove();
      links.remove();
    };
  }, [configured]);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    const { error } = await getSupabase().auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    return error ? { error: error.message } : {};
  }, []);

  const registerWithEmail = useCallback(
    async (input: { email: string; password: string; role: SignupRole }) => {
      const { data, error } = await getSupabase().auth.signUp({
        email: input.email.trim(),
        password: input.password,
        options: {
          data: { role: input.role },
          emailRedirectTo: authRedirectUrl(),
        },
      });

      if (error) {
        return { error: error.message };
      }

      if (!data.session) {
        return { needsConfirmation: true };
      }

      return {};
    },
    []
  );

  const signOut = useCallback(async () => {
    await getSupabase().auth.signOut();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      ready,
      configured,
      session,
      signInWithEmail,
      registerWithEmail,
      signOut,
    }),
    [ready, configured, session, signInWithEmail, registerWithEmail, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }
  return value;
}
