import experiences from "../../data/experience";
import Reveal from "../../../components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="font-heading text-h3 font-semibold text-foreground">
          Experience
        </h2>

        <div className="mt-12 space-y-12 border-l border-border pl-6 sm:pl-8">
          {experiences.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="relative">
                <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary sm:-left-[calc(2rem+5px)]" />
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

                {item.stack?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-secondary/15 px-3 py-1 text-label text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
