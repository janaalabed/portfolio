import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Reveal from "../../../components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-card/40 py-12 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="font-heading text-h3 font-semibold text-foreground">
          About me
        </h2>

        <Reveal>
          <div className="mt-6 max-w-[70ch] space-y-5 text-body text-muted-foreground">
            <p>
              I&apos;m a full-stack developer who&apos;s comfortable owning a
              project end to end, from designing the database schema to shipping
              the interface that sits on top of it.
            </p>
            <p>
              At Integrated Digital Systems, I built an IT Help Desk and
              Ticketing System from scratch: a ten-table schema, 30+ API
              endpoints in ASP.NET Core, and role-based access across four user
              types, designed, built, and debugged solo, layer by layer. At
              TechTalks, I led a 5-person team through Jobify, a job-matching
              platform, from kickoff to production in 8 weeks, running Scrum
              ceremonies and owning the CI/CD pipeline along the way.
            </p>
            <p>
              My stack is React, Next.js, ASP.NET Core, PostgreSQL, Tailwind
              CSS, and Supabase, but the habit that matters more than any single
              tool is tracing a problem through every layer it touches, not just
              the one where it happens to surface. I hold a Computer Science
              degree from the Lebanese University and 700+ hours of hands-on
              internship experience turning that habit into shipped work.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="/resume/Jana AL Abed CV.pdf"
            download="Jana Al Abed CV"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-10 w-auto border-border text-foreground hover:bg-accent hover:text-primary ",
            )}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
