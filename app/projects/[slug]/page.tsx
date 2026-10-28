import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, AlertTriangle, Rocket } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="px-5 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projects" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-300">
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <Image src={p.image} alt={p.name} width={1200} height={675} priority className="w-full rounded-2xl border border-slate-800 bg-slate-800 object-cover" />
        <h1 className="mt-8 text-3xl font-bold text-white sm:text-4xl">{p.name}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              {s}
            </span>
          ))}
        </div>
        <p className="mt-6 leading-relaxed">{p.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 font-semibold text-slate-950 hover:bg-amber-300">
            <ExternalLink size={18} /> Live Project
          </a>
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 font-semibold text-slate-100 hover:border-amber-400 hover:text-amber-300">
            <FaGithub size={18} /> Client Repository
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="mb-2 flex items-center gap-2 font-semibold text-white">
              <AlertTriangle size={18} className="text-rose-400" /> Challenges Faced
            </h2>
            <p className="text-sm leading-relaxed">{p.challenges}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="mb-2 flex items-center gap-2 font-semibold text-white">
              <Rocket size={18} className="text-emerald-400" /> Future Plans
            </h2>
            <p className="text-sm leading-relaxed">{p.future}</p>
          </div>
        </div>
      </div>
    </main>
  );
}