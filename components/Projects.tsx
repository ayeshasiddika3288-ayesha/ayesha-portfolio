import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:border-amber-400/50"
            >
              <Image src={p.image} alt={p.name} width={1200} height={675} className="h-44 w-full bg-slate-800 object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-6 rounded-lg bg-slate-800 px-4 py-2.5 text-center font-medium text-white transition hover:bg-amber-400 hover:text-slate-950"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}