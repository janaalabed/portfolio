import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-heading text-h2 font-semibold text-foreground">
          Skills
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((item, index) => (
            <div key={index}>
              <h3 className="font-heading text-h3 font-medium text-foreground">
                {item.category}
              </h3>
              <ul className="mt-4 space-y-2 border-l border-border pl-4">
                {item.skills.map((skill, i) => (
                  <li key={i} className="text-body text-muted-foreground">
                    {skill}
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
