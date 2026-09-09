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
              I&apos;m a full-stack developer who works comfortably across the
              entire stack — from designing a PostgreSQL schema to shipping the
              React interface that sits on top of it.
            </p>
            <p>
              At Integrated Digital Systems, I built a full-stack IT HelpDesk
              and Ticketing Management System from scratch: a ten-table ERD, 30+
              API endpoints in ASP.NET Core with Entity Framework Core, and
              JWT-based authentication with role-based access control across
              four user roles. I designed the visual system and role-scoped
              dashboards myself, then debugged the stack end to end — from EF
              Core relationship ambiguity to BCrypt hashing issues in
              migrations. I&apos;ve also led product delivery, not just written
              code.
            </p>
            <p>
              At TechTalks, I led a 5-person team building Jobify, a
              job-matching platform for students and companies, from kickoff to
              production in 8 weeks — running Scrum ceremonies, managing 40+
              Jira tickets, and owning the CI/CD pipeline and GitHub workflow.
              Separately, I built OneHand, a community platform for sharing
              unused belongings, to explore product ideas with real social
              impact.
            </p>
            <p>
              My stack: React, Next.js, ASP.NET Core, PostgreSQL, Tailwind CSS,
              and Supabase — with a habit of understanding a system deeply
              enough to trace a bug through every layer it touches, not just the
              one where it surfaces.
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
