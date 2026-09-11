const RESPONSIBILITIES = [
  {
    area: "Design",
    detail:
      "Designed the ERD (ten tables) from scratch, then built the visual design system — slate/cyan palette, dark sidebar, Inter typography — and mocked up every page before writing frontend code.",
  },
  {
    area: "Backend",
    detail:
      "Built the ASP.NET Core Web API end to end: 30+ REST endpoints across controllers, services, and repositories, with DTO projections to keep the database schema out of the API contract.",
  },
  {
    area: "Auth & access",
    detail:
      "Implemented JWT authentication with access and refresh tokens, plus role-based authorization for four roles (Employee, IT Support Agent, Manager, Administrator), enforced on both routes and endpoints.",
  },
  {
    area: "Data",
    detail:
      "Modeled ticket relationships in EF Core and resolved multi-entity ambiguity with [InverseProperty] and [ForeignKey], then managed schema evolution through EF Core migrations.",
  },
  {
    area: "Debugging",
    detail:
      "Tracked down issues across the full stack — missing await calls, silently-broken event handlers, EF Core's anonymous-type projection quirks, and BCrypt hashing setup inside migrations.",
  },
];
export default function Role() {
  return (
    <section className="bg-[#0B0F14] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-[#22D3EE]">My role</p>
        <h2
          className="mt-3 text-2xl text-white md:text-3xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Built solo, start to finish
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          This was an individual internship deliverable — one person carrying
          the frontend, backend, database, authentication, and business logic
          through to a working system.
        </p>

        <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {RESPONSIBILITIES.map(({ area, detail }) => (
            <div
              key={area}
              className="grid gap-2 py-6 md:grid-cols-[9rem_1fr] md:gap-6"
            >
              <dt className="text-sm text-[#8B5CF6]">{area}</dt>
              <dd className="leading-relaxed text-slate-300">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
