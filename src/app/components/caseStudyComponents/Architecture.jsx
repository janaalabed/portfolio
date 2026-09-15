const LAYERS = [
  {
    label: "React Frontend",
    detail: "React.js + Vite, styled with Tailwind CSS",
  },
  {
    label: "ASP.NET Core Web API",
    detail: "Controllers → Services → Repositories",
    sublayers: ["Controllers", "Services", "Repositories"],
  },
  {
    label: "Entity Framework Core",
    detail: "ORM layer and schema migrations",
  },
  {
    label: "PostgreSQL",
    detail: "Relational storage for users, tickets, and history",
  },
];

const CONNECTORS = ["HTTP / REST API", "EF Core queries", "SQL"];

/**
 * Layered architecture diagram: frontend -> API -> ORM -> database,
 * with the API's internal Controller/Service/Repository split shown
 * as sublayers. Pure markup, no image assets.
 */
export default function Architecture() {
  return (
    <section id="architecture" className="bg-[#0B0F14] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-[#22D3EE]">Architecture</p>
        <h2
          className="mt-3 text-2xl text-white md:text-3xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          A layered request path
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Each layer has one job. A request from the browser passes through the
          API's controllers, services, and repositories in order, before EF Core
          turns it into SQL against PostgreSQL.
        </p>

        <div className="mt-12 flex flex-col items-stretch">
          {LAYERS.map((layer, i) => (
            <div key={layer.label} className="flex flex-col items-center">
              <div className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <p className="font-mono text-sm text-white">{layer.label}</p>
                <p className="mt-1 text-sm text-slate-400">{layer.detail}</p>

                {layer.sublayers && (
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    {layer.sublayers.map((sub) => (
                      <div
                        key={sub}
                        className="flex-1 rounded-md border border-[#8B5CF6]/30 bg-[#8B5CF6]/[0.06] px-3 py-2 text-center font-mono text-xs text-[#c4b5fd]"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {i < LAYERS.length - 1 && (
                <div className="flex flex-col items-center py-3">
                  <div className="h-6 w-px bg-white/20" />
                  <span className="my-1 font-mono text-[11px] text-slate-500">
                    {CONNECTORS[i]}
                  </span>
                  <div className="h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
