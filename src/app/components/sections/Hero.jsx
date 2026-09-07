import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-6 pb-24 pt-32 text-center md:pt-40"
    >
      <div className="flex items-center gap-4 opacity-0 animate-fade-up">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
          <Image
            fill
            alt="Jana Al Abed"
            src="/images/personalPhoto.jpeg"
            className="object-cover scale-125"
          />
        </div>
        <span className="font-mono text-body text-muted-foreground">
          Jana Al Abed
        </span>
      </div>

      <h1 className="font-heading text-hero font-semibold text-foreground opacity-0 animate-fade-up [animation-delay:150ms]">
        Full-stack developer
      </h1>

      <p className="max-w-lg text-body text-muted-foreground opacity-0 animate-fade-up [animation-delay:300ms]">
        Building production-grade web apps from database schema to deployed UI —
        React, ASP.NET Core, PostgreSQL.
      </p>

      <a
        href="#projects"
        className={cn(
          buttonVariants({ size: "lg" }),
          "bg-primary text-primary-foreground hover:bg-primary/90 opacity-0 animate-fade-up [animation-delay:450ms]",
        )}
      >
        My projects
      </a>
    </section>
  );
}
