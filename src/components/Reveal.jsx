"use client";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export default function Reveal({ children, delay = 0, className }) {
  const [ref, inView] = useInView();

  return (
    // unobserve after first reveal — animation should only play once per element
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
