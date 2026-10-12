"use client";

import { supabase } from "@/lib/supabase";
import { safeImageUrl } from "@/lib/social/avatarPath";
import { subscribeToBrowserSession } from "@/lib/social/browserSession";
import { displayInitials } from "@/lib/social/formatPostTime";
import { profileHrefFor } from "@/lib/social/profileHref";
import { isUserId } from "@/lib/social/postValidation";
import type { ResolvedTag } from "@/lib/social/postTags";
import { accountTypeLabel } from "@/lib/social/accountType";
import {
  BookOpen,
  Building2,
  Globe,
  GraduationCap,
  MessageCircle,
  Newspaper,
  Search,
  Shield,
  Sparkles,
  UserRound,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import MessagesPlaceholder from "@/components/social/MessagesPlaceholder";

export type ViewerState = {
  status: "loading" | "anonymous" | "ready";
  id: string | null;
  handle: string | null;
  displayName: string | null;
  avatarUrl: string | null;
  accountType: string | null;
  role: string | null;
};

const EMPTY_VIEWER: ViewerState = {
  status: "loading",
  id: null,
  handle: null,
  displayName: null,
  avatarUrl: null,
  accountType: null,
  role: null,
};

const ViewerContext = createContext<ViewerState>(EMPTY_VIEWER);

export function useViewer(): ViewerState {
  return useContext(ViewerContext);
}

const SITE_NAV = [
  { href: "/countries", label: "Explore Countries", icon: Globe, auth: false },
  { href: "/#search", label: "Universities", icon: Building2, auth: false },
  { href: "/#search", label: "Programs", icon: GraduationCap, auth: false },
  { href: "/consultants", label: "Consultants", icon: Users, auth: true },
  { href: "/study-matcher", label: "Study Matcher", icon: Sparkles, auth: false },
  { href: "/blog", label: "Blog", icon: BookOpen, auth: false },
] as const;

export default function SocialShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/feed";
  const router = useRouter();
  const [viewer, setViewer] = useState<ViewerState>(EMPTY_VIEWER);
  const [chatsOpen, setChatsOpen] = useState(false);
  const feedActive = pathname === "/feed" || pathname.startsWith("/post/");
  const networkActive = pathname === "/network" || pathname.startsWith("/network/");
  // Server HTML has no localStorage session, so this stays on the login URL
  // until the browser session loads and the state below updates.
  const profileHref = profileHrefFor({
    signedIn: viewer.status === "ready" && viewer.id !== null,
    handle: viewer.handle,
    pathname,
  });

  useEffect(() => {
    let cancelled = false;
    let generation = 0;

    const stop = subscribeToBrowserSession((session) => {
      const generationId = ++generation;
      const userId = session?.user?.id && isUserId(session.user.id) ? session.user.id : null;

      if (!userId) {
        setViewer({
          status: "anonymous",
          id: null,
          handle: null,
          displayName: null,
          avatarUrl: null,
          accountType: null,
          role: null,
        });
        return;
      }

      setViewer((current) => ({
        status: "ready",
        id: userId,
        handle: current.id === userId ? current.handle : null,
        displayName: current.id === userId ? current.displayName : null,
        avatarUrl: current.id === userId ? current.avatarUrl : null,
        accountType: current.id === userId ? current.accountType : null,
        role: current.id === userId ? current.role : null,
      }));

      void loadOwnProfile(userId).then((profile) => {
        if (cancelled || generationId !== generation) {
          return;
        }

        setViewer({
          status: "ready",
          id: userId,
          handle: profile.handle,
          displayName: profile.displayName,
          avatarUrl: profile.avatarUrl,
          accountType: profile.accountType,
          role: profile.role,
        });
      });
    });

    return () => {
      cancelled = true;
      stop();
    };
  }, []);

  function onConsultantsClick(event: MouseEvent<HTMLAnchorElement>) {
    if (viewer.status === "anonymous") {
      event.preventDefault();
      router.push("/login?redirect=/consultants");
    }
  }

  return (
    <ViewerContext.Provider value={viewer}>
      <div className="min-h-screen bg-[#eef2f7] text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950 text-white">
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-3 sm:px-4">
            <Link href="/" className="flex shrink-0 items-center text-xl font-extrabold tracking-tight sm:text-2xl">
              <span className="text-blue-400">Match</span>
              <Image
                src="/images/logo/my-logo.png"
                alt=""
                width={32}
                height={32}
                className="mx-1 h-8 w-8 rounded-md object-contain"
              />
              <span className="text-violet-400">Study</span>
            </Link>

            <div className="hidden min-w-0 flex-1 md:block md:max-w-md">
              <SocialSearch />
            </div>

            <nav className="ml-auto hidden items-center gap-6 text-sm font-semibold md:flex">
              <Link
                href="/feed"
                className={
                  feedActive
                    ? "text-white underline decoration-blue-400 decoration-2 underline-offset-[14px]"
                    : "text-slate-300 hover:text-white"
                }
                aria-current={feedActive ? "page" : undefined}
              >
                Feed
              </Link>
              <Link
                href="/network"
                className={
                  networkActive
                    ? "text-white underline decoration-blue-400 decoration-2 underline-offset-[14px]"
                    : "text-slate-300 hover:text-white"
                }
                aria-current={networkActive ? "page" : undefined}
              >
                Network
              </Link>
              <Link href={profileHref} className="text-slate-300 hover:text-white">
                My Profile
              </Link>
              {viewer.role === "admin" ? (
                <Link href="/admin/moderation" className="text-slate-300 hover:text-white">
                  Moderation
                </Link>
              ) : null}
            </nav>
          </div>
        </header>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-3 py-4 lg:grid-cols-[240px_minmax(0,1fr)_300px] lg:px-4">
          <aside className="hidden lg:block">
            <nav className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <Link
                href={profileHref}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <ProfileMark viewer={viewer} />
                My Profile
              </Link>
              {SITE_NAV.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={item.auth ? onConsultantsClick : undefined}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <Icon className="h-5 w-5 text-slate-500" aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
              <div className="my-2 border-t border-slate-100" />
              <Link
                href="/feed"
                aria-current={feedActive ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${
                  feedActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Newspaper className="h-5 w-5" aria-hidden="true" />
                Feed
              </Link>
              <Link
                href="/network"
                aria-current={networkActive ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${
                  networkActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Users className={`h-5 w-5 ${networkActive ? "" : "text-slate-500"}`} aria-hidden="true" />
                Network
              </Link>
              {viewer.role === "admin" ? (
                <Link
                  href="/admin/moderation"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Shield className="h-5 w-5 text-slate-500" aria-hidden="true" />
                  Moderation
                </Link>
              ) : null}
            </nav>
          </aside>

          <main className="min-w-0 pb-24 lg:pb-6">{children}</main>

          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <MessagesPlaceholder />
            </div>
          </aside>
        </div>

        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white lg:hidden">
          <ul className="grid grid-cols-5">
            <li>
              <Link
                href="/feed"
                className={`flex flex-col items-center gap-1 py-2 text-[11px] font-semibold ${
                  feedActive ? "text-blue-600" : "text-slate-500"
                }`}
              >
                <Newspaper className="h-5 w-5" aria-hidden="true" />
                Feed
              </Link>
            </li>
            <li>
              <Link
                href="/network"
                className={`flex flex-col items-center gap-1 py-2 text-[11px] font-semibold ${
                  networkActive ? "text-blue-600" : "text-slate-500"
                }`}
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                Network
              </Link>
            </li>
            <li>
              <Link
                href="/countries"
                className="flex flex-col items-center gap-1 py-2 text-[11px] font-semibold text-slate-500"
              >
                <Globe className="h-5 w-5" aria-hidden="true" />
                Explore
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setChatsOpen(true)}
                className="flex w-full flex-col items-center gap-1 py-2 text-[11px] font-semibold text-slate-500"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chats
              </button>
            </li>
            <li>
              <Link
                href={profileHref}
                className="flex flex-col items-center gap-1 py-2 text-[11px] font-semibold text-slate-500"
              >
                <UserRound className="h-5 w-5" aria-hidden="true" />
                Profile
              </Link>
            </li>
          </ul>
        </nav>

        {chatsOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-slate-900/40"
              aria-label="Close messages"
              onClick={() => setChatsOpen(false)}
            />
            <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-[#eef2f7] p-4 pb-8">
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setChatsOpen(false)}
                  className="rounded-full p-2 text-slate-500"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <MessagesPlaceholder />
            </div>
          </div>
        ) : null}

      </div>
    </ViewerContext.Provider>
  );
}

async function loadOwnProfile(userId: string): Promise<{
  handle: string | null;
  displayName: string | null;
  avatarUrl: string | null;
  accountType: string | null;
  role: string | null;
}> {
  const own = await supabase
    .from("profiles")
    .select("handle, display_name, avatar_url, account_type, role")
    .eq("id", userId)
    .maybeSingle();
  const row = !own.error && own.data ? own.data : null;
  const fallback = row
    ? null
    : await supabase
        .from("public_profiles")
        .select("handle, display_name, avatar_url, account_type")
        .eq("id", userId)
        .maybeSingle();
  const data = row ?? fallback?.data ?? null;

  return {
    handle: typeof data?.handle === "string" ? data.handle : null,
    displayName: typeof data?.display_name === "string" ? data.display_name : null,
    avatarUrl: safeImageUrl(typeof data?.avatar_url === "string" ? data.avatar_url : null),
    accountType: typeof data?.account_type === "string" ? data.account_type : null,
    role: row && typeof row.role === "string" ? row.role : null,
  };
}

function ProfileMark({ viewer }: { viewer: ViewerState }) {
  if (viewer.avatarUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={viewer.avatarUrl} alt="" className="h-8 w-8 rounded-full object-cover" />
    );
  }

  const label = viewer.displayName || viewer.accountType || "You";

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
      {viewer.status === "ready" ? displayInitials(label) : <UserRound className="h-4 w-4" aria-hidden="true" />}
    </span>
  );
}

function SocialSearch() {
  const listId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState<ResolvedTag[]>([]);
  const [people, setPeople] = useState<
    { handle: string; displayName: string; accountType: string }[]
  >([]);

  useEffect(() => {
    const q = query.trim();

    if (q.length < 2) {
      return;
    }

    const timer = window.setTimeout(async () => {
      const safe = q.replace(/[%_,.()"'\\]/g, "").trim();
      const [tagResponse, peopleResponse] = await Promise.all([
        fetch(`/api/social/tags?q=${encodeURIComponent(q)}`).then((response) =>
          response.ok ? response.json() : { tags: [] }
        ),
        safe.length < 2
          ? Promise.resolve({ data: [] })
          : supabase
              .from("public_profiles")
              .select("handle, display_name, account_type")
              .or(
                `display_name.ilike."%${safe}%",handle.ilike."%${safe}%"`
              )
              .limit(4),
      ]);

      setTags(Array.isArray(tagResponse.tags) ? tagResponse.tags.slice(0, 6) : []);
      const rows = Array.isArray(peopleResponse.data) ? peopleResponse.data : [];
      setPeople(
        rows
          .filter(
            (row): row is { handle: string; display_name: string; account_type: string } =>
              typeof row?.handle === "string" && typeof row.display_name === "string"
          )
          .map((row) => ({
            handle: row.handle,
            displayName: row.display_name,
            accountType:
              typeof row.account_type === "string" ? row.account_type : "other",
          }))
      );
      setOpen(true);
    }, 200);

    return () => window.clearTimeout(timer);
  }, [query]);

  const show = open && query.trim().length >= 2;

  return (
    <div className="relative">
      <label className="sr-only" htmlFor={listId}>
        Search people, universities, programs
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        id={listId}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => {
          if (query.trim().length >= 2) {
            setOpen(true);
          }
        }}
        onBlur={() => {
          window.setTimeout(() => setOpen(false), 150);
        }}
        placeholder="Search people, universities, programs..."
        className="w-full rounded-full border border-slate-700 bg-slate-900 py-2 pl-9 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-blue-400"
      />
      {show ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-xl">
          {people.length === 0 && tags.length === 0 ? (
            <p className="px-4 py-3 text-sm text-slate-500">No matches.</p>
          ) : null}
          {people.length > 0 ? (
            <ul>
              {people.map((person) => (
                <li key={person.handle}>
                  <Link
                    href={`/u/${encodeURIComponent(person.handle)}`}
                    className="block px-4 py-2 hover:bg-slate-50"
                    onClick={() => setQuery("")}
                  >
                    <span className="block text-sm font-medium">{person.displayName}</span>
                    <span className="block text-xs text-slate-500">
                      @{person.handle} · {accountTypeLabel(person.accountType)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          {tags.length > 0 ? (
            <ul className="border-t border-slate-100">
              {tags.map((tag) =>
                tag.href ? (
                  <li key={`${tag.target_type}:${tag.target_slug}`}>
                    <Link
                      href={tag.href}
                      className="block px-4 py-2 hover:bg-slate-50"
                      onClick={() => setQuery("")}
                    >
                      <span className="block text-sm font-medium">{tag.name}</span>
                      <span className="block text-xs text-slate-500">
                        {tag.detail ?? tag.target_type}
                      </span>
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
