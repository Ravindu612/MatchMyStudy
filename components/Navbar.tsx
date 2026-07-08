"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
  <span className="text-3xl"></span>

  <h1 className="text-3xl font-extrabold tracking-tight">
    <span className="text-blue-400">Match</span>{""}
    <span className="text-white">My</span>{""}
    <span className="text-violet-400">Study</span>
  </h1>
</Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* ✅ Find Courses ALWAYS visible (mobile + desktop) */}
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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#search">Search</Link></li>
          <li><Link href="/countries">Countries</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>

      {/* ✅ Mobile Menu (FULL LIST FIXED) */}
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