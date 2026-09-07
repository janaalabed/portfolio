import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-12 px-6 pb-24 pt-32 md:flex-row md:pt-40"
    >
      <div className="flex-1 text-center md:text-left">
        <p className="mb-4 font-mono text-label text-primary">
          {"> full-stack developer"}
        </p>
        <h1 className="font-heading text-hero font-semibold text-foreground">
          Jana Al Abed
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-body text-muted-foreground md:mx-0">
          Full-stack developer building production-grade web apps from database
          schema to deployed UI — React, ASP.NET Core, PostgreSQL.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            My projects
          </a>
        </div>
      </div>

      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-border md:h-56 md:w-56">
        <Image
          fill
          alt="Jana Al Abed"
          src="/images/personalPhoto.jpg"
          className="object-cover"
        />
      </div>
    </section>
  );
}
