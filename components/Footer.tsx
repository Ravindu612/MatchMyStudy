import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
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

          <p className="text-sm">
            Navigate Your Global Education Journey
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>

          <Link
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>

          <Link
            href="/about"
            className="hover:text-white transition-colors"
          >
            About
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-sm">
        © 2026 MatchMyStudy. All rights reserved.
      </div>
    </footer>
  );
}