import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "../../../components/Reveal";
import projects from "../../data/projects";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="font-heading text-h3 font-semibold text-foreground">
          Projects
        </h2>

        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-40 w-full sm:h-44">
                  <Image
                    src={item.imageURL}
                    alt={`Screenshot of ${item.name} interface`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-heading text-h3 font-medium text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-body text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((stackItem, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-secondary/15 px-3 py-1 text-label text-secondary"
                      >
                        {stackItem}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.liveDemo && (
                      <a
                        href={item.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-label font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:text-foreground"
                      >
                        <ExternalLink
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={item.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-label font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:text-foreground"
                    >
                      <GithubIcon className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-primary" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
