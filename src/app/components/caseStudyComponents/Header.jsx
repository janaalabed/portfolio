import { ArrowUpRight } from "lucide-react";

const STACK = [
  "React",
  "Vite",
  "Tailwind CSS",
  "ASP.NET Core 8",
  "EF Core",
  "PostgreSQL",
  "JWT",
];
export default function Header() {
  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-[#0B0F14] px-6 py-20 md:px-12">
      {/* quiet accent glow, kept to one corner so it doesn't compete with the type */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="font-mono text-sm text-[#8B5CF6]">
          Internship project — IDS
        </p>

        <h1
          className="mt-4 text-4xl leading-tight text-white md:text-5xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          IT Help Desk &amp; Ticketing Management System
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          A full-stack, enterprise-style help desk built for internal IT support
          teams. Employees log issues, agents work through a queue, managers
          watch the load across the team, and admins keep the system itself in
          order — all inside one role-aware application.
        </p>

        {/* Problem */}
        <div className="mt-10 border-l-2 border-[#22D3EE] pl-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            The problem
          </p>
          <p className="mt-2 leading-relaxed text-slate-300">
            Internal IT requests had no shared home — no consistent way to
            submit an issue, see where it stood, hand it off, or escalate it
            when it stalled. Agents lacked a queue, managers lacked visibility
            into workload, and nothing about a ticket's history was kept once it
            closed. The system needed to model a request's entire lifecycle —
            from submission through escalation to resolution — for four
            different roles at once.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {STACK.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#architecture"
          className="mt-10 inline-flex items-center gap-1.5 text-sm text-[#22D3EE] hover:text-[#67e8f9]"
        >
          See how it's built
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
