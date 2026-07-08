export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
    <span className="text-blue-400">Match</span>{""}
    <span className="text-white">My</span>{""}
    <span className="text-violet-400">Study</span>
  </h1>

          <p className="text-sm">
            Navigate Your Global Education Journey
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">
            Privacy
          </a>

          <a href="#" className="hover:text-white">
            Contact
          </a>

          <a href="#" className="hover:text-white">
            About
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-sm">
        © 2026 StudyAbroad. All rights reserved.
      </div>
    </footer>
  );
}