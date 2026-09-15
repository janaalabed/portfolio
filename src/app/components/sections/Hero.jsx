import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-32 md:pt-40"
    >
      <div className="flex items-center gap-3 opacity-0 animate-fade-up sm:gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border sm:h-16 sm:w-16">
          <Image
            fill
            priority
            alt="Jana Al Abed"
            src="/images/personal.png"
            className="object-cover scale-125"
          />
        </div>
        <span className="font-mono text-body text-muted-foreground">
          Jana Al Abed
        </span>
      </div>

      <h1 className="font-heading text-3xl font-semibold text-foreground opacity-0 animate-fade-up [animation-delay:150ms] sm:text-4xl md:text-hero">
        Full-stack developer
      </h1>

      <p className="max-w-lg text-body text-muted-foreground opacity-0 animate-fade-up [animation-delay:300ms]">
        Building production-grade web apps from database schema to deployed UI using
        React, ASP.NET Core, PostgreSQL.
      </p>

      <a
        href="#projects"
        className={cn(
          buttonVariants({ size: "lg" }),
          "bg-primary text-primary-foreground hover:bg-primary/90 opacity-0 animate-fade-up [animation-delay:450ms] w-auto",
        )}
      >
        My projects
      </a>
    </section>
  );
}