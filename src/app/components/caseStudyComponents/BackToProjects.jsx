import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToProjects() {
  return (
    <div className="bg-[#0B0F14] px-6 pt-8 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition-colors hover:text-[#22D3EE]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to projects
        </Link>
      </div>
    </div>
  );
}
