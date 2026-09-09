const items = [
  {
    tech: "React",
    focus: "Leveling up",
    detail:
      "Digging into Server Components, rendering performance, and modern data-fetching patterns.",
  },
  {
    tech: ".NET",
    focus: "Leveling up",
    detail: "Sharpening EF Core query performance and minimal API design.",
  },
];

export default function CurrentlyLearning() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="font-heading text-h3 font-semibold text-foreground">
          Currently leveling up
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-2">
                <span className="font-heading text-h3 font-medium text-foreground">
                  {item.tech}
                </span>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-label text-primary">
                  {item.focus}
                </span>
              </div>
              <p className="mt-2 text-body text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
