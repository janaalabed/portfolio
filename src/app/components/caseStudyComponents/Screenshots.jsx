"use client";
import { useState } from "react";
import { ImageOff, X } from "lucide-react";

const SHOTS = [
  { file: "login.png", label: "Login" },
  { file: "employee-dashboard.png", label: "Employee dashboard" },
  { file: "create-ticket.png", label: "Create ticket" },
  { file: "ticket-details.png", label: "Ticket details" },
  { file: "it-support-dashboard.png", label: "IT support dashboard" },
  { file: "admin-dashboard.png", label: "Admin dashboard" },
];
export default function Screenshots() {
  const [active, setActive] = useState(null);
  const [missing, setMissing] = useState({});

  return (
    <section className="bg-[#0B0F14] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-sm text-[#22D3EE]">Screenshots</p>
        <h2
          className="mt-3 text-2xl text-white md:text-3xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          A look at each role's view
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {SHOTS.map((shot) => (
            <button
              key={shot.file}
              type="button"
              onClick={() => !missing[shot.file] && setActive(shot)}
              className="group text-left"
            >
              <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
                {missing[shot.file] ? (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-600">
                    <ImageOff className="h-6 w-6" />
                    <span className="font-mono text-[11px]">
                      /screenshots/{shot.file}
                    </span>
                  </div>
                ) : (
                  <img
                    src={`/screenshots/${shot.file}`}
                    alt={shot.label}
                    className="h-full w-full object-cover transition group-hover:opacity-80"
                    onError={() =>
                      setMissing((m) => ({ ...m, [shot.file]: true }))
                    }
                  />
                )}
              </div>
              <p className="mt-2 text-sm text-slate-400">{shot.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-slate-400 hover:text-white"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={`/screenshots/${active.file}`}
            alt={active.label}
            className="max-h-[85vh] max-w-full rounded-lg border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
