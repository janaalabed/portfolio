import experiences from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h1 className="font-heading text-h3 font-semibold text-foreground">
          Experience
        </h1>

        <div className="mt-12 space-y-12 border-l border-border pl-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="font-mono text-label text-muted-foreground">
                {item.startDate} — {item.endDate}
              </p>
              <h3 className="mt-1 font-heading text-h3 font-medium text-foreground">
                {item.companyName}
              </h3>
              <ul className="mt-3 space-y-2">
                {item.bullets.map((bulletItem, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="text-body text-muted-foreground"
                  >
                    {bulletItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
