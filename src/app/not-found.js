import Link from "next/link";

// Sections on the homepage, not separate routes.
const SECTIONS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0B0F14] text-center px-6">
      <p className="font-mono text-sm text-cyan-400 tracking-widest mb-4">
        404
      </p>

      <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
        This page doesn't exist
      </h1>

      <p className="text-slate-400 max-w-md mb-8">
        The link might be broken. Everything on this site lives on one page —
        jump straight to a section below.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg bg-cyan-400 text-[#0B0F14] font-medium hover:bg-cyan-300 transition-colors"
        >
          Home
        </Link>
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="px-5 py-2.5 rounded-lg border border-violet-500/50 text-violet-300 font-medium hover:bg-violet-500/10 transition-colors"
          >
            {section.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
