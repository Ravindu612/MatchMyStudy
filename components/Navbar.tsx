"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { loginPathFor } from "@/lib/signupRole";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const loginHref = loginPathFor(pathname);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userMenuOpen, setUserMenuOpen] =
  useState(false);

  useEffect(() => {
  async function checkLogin() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    setLoggedIn(!!session);
  }

  checkLogin();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setLoggedIn(!!session);
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}, []);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserEmail(user?.email ?? null);
      setLoadingUser(false);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserEmail(
          session?.user?.email ?? null
        );
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const userInitial =
  userEmail?.charAt(0).toUpperCase() ?? "";

  function handleConsultantsClick(
    event: MouseEvent<HTMLAnchorElement>
  ) {
  setOpen(false);
  // Real link for crawlers; logged-out visitors still go via login.
  event.preventDefault();

  if (loggedIn) {
    router.push("/consultants");
  } else {
    router.push(
      "/login?redirect=/consultants"
    );
  }
}

  async function handleLogout() {
  await supabase.auth.signOut();

  setUserEmail(null);
  setUserMenuOpen(false);
  setOpen(false);
}

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
<Link
  href="/"
  className="flex items-center"
>
  <span className="flex items-center text-3xl font-extrabold tracking-tight">
    <span className="text-blue-400">
      Match
    </span>

    <Image
  src="/images/logo/my-logo.png"
  alt="My"
  width={40}
  height={40}
  className="mx-1 h-10 w-10 rounded-lg object-contain"
/>

    <span className="text-violet-400">
      Study
    </span>
  </span>
</Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* Find Courses */}
          <Link
            href="/#search"
            className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg text-sm font-semibold text-white"
          >
            Find
          </Link>

          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-slate-300 font-medium ml-6">

  <li>
    <Link href="/">Home</Link>
  </li>

  <li>
    <Link href="/#search">Search</Link>
  </li>

  <li>
    <Link href="/countries">
      Countries
    </Link>
  </li>

  <li>
  <Link
    href="/consultants"
    onClick={handleConsultantsClick}
    className="hover:text-blue-400 transition"
  >
    Consultants
  </Link>
</li>

  <li>
    <Link href="/blog">Blog</Link>
  </li>

  {!loadingUser && (
  <li className="relative">
    {userEmail ? (
      <div className="relative">
        <button
          type="button"
          onClick={() =>
            setUserMenuOpen(!userMenuOpen)
          }
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white shadow-md transition hover:bg-blue-600"
          aria-label="User menu"
        >
          {userInitial}
        </button>

        {userMenuOpen && (
          <div className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <p className="truncate text-sm font-medium text-slate-700">
              {userEmail}
            </p>

            <Link
              href="/settings/profile"
              onClick={() => setUserMenuOpen(false)}
              className="mt-4 block w-full rounded-xl border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Profile settings
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-2 w-full rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    ) : (
      <Link
        href={loginHref}
        className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg text-sm font-semibold text-white"
      >
        Login
      </Link>
    )}
  </li>
)}

</ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-slate-900 border-t border-slate-800 flex flex-col gap-4">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-white text-lg font-medium hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            href="/#search"
            onClick={() => setOpen(false)}
            className="text-white text-lg font-medium hover:text-blue-400 transition"
          >
            Search
          </Link>

          <Link
            href="/countries"
            onClick={() => setOpen(false)}
            className="text-white text-lg font-medium hover:text-blue-400 transition"
          >
            Countries
          </Link>

          <Link
  href="/consultants"
  onClick={handleConsultantsClick}
  className="text-left text-white text-lg font-medium hover:text-blue-400 transition"
>
  Consultants
</Link>

          {/* Mobile Login / Logout */}
          {userEmail ? (
  <>
  <Link
    href="/settings/profile"
    onClick={() => setOpen(false)}
    className="text-white text-lg font-medium hover:text-blue-400 transition"
  >
    Profile
  </Link>
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
        {userInitial}
      </div>

      <span className="max-w-[220px] truncate text-sm text-slate-300">
        {userEmail}
      </span>
    </div>

    <button
      type="button"
      onClick={handleLogout}
      className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600"
    >
      Logout
    </button>
  </div>
  </>
) : (
  <Link
    href={loginHref}
    onClick={() => setOpen(false)}
    className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg text-sm font-semibold text-white"
  >
    Login
  </Link>
)}

          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-white text-lg font-medium hover:text-blue-400 transition"
          >
            Blog
          </Link>

        </div>
      )}
    </nav>
  );
}