"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
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

  function handleConsultantsClick() {
  setOpen(false);

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
  <h1 className="flex items-center text-3xl font-extrabold tracking-tight">
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
  </h1>
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
  <button
    type="button"
    onClick={handleConsultantsClick}
    className="hover:text-blue-400 transition"
  >
    Consultants
  </button>
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

            <button
              type="button"
              onClick={handleLogout}
              className="mt-4 w-full rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    ) : (
      <Link
        href="/login"
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

          <button
  type="button"
  onClick={handleConsultantsClick}
  className="text-left text-white text-lg font-medium hover:text-blue-400 transition"
>
  Consultants
</button>

          {/* Mobile Login / Logout */}
          {userEmail ? (
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
) : (
  <Link
    href="/login"
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