import { Briefcase } from "lucide-react";

const EXP = [
    {
    role: "Full Stack Development Diploma (12 months)",
    org: "Creative IT Institute (CIT)",
    period: "Jul 2026 - Present",
    note: "Structured one-year diploma covering full-stack web development with hands-on projects, live classes and job placement support.",
  },
  {
    role: "Full Stack Web Development Training",
    org: "Programming Hero",
    period: "Ongoing",
    note: "Training in React, Next.js, TypeScript, Node.js, Express and MongoDB. Built and deployed projects with authentication and database integration, including Bazar Dor, FitLog and Movie Explorer.",
  },
  {
    role: "UI/UX Design Intern (Industrial Attachment)",
    org: "Creative IT Institute, Uttara",
    period: "Aug 2023 - Nov 2023 (3 months)",
    note: "Worked on user research, wireframing and prototyping in Figma and Adobe XD. This background helps me build clean, user-friendly interfaces.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">Experience & Training</h2>
        <ol className="relative space-y-8 border-l border-slate-700 pl-8">
          {EXP.map((e) => (
            <li key={e.role} className="relative">
              <span className="absolute -left-[46px] top-1 rounded-full bg-slate-950 p-1.5 text-amber-300 ring-2 ring-slate-700">
                <Briefcase size={18} />
              </span>
              <h3 className="text-xl font-semibold text-white">{e.role}</h3>
              <p className="mt-1 text-amber-300">{e.org}</p>
              <p className="text-sm text-slate-500">{e.period}</p>
              <p className="mt-2 max-w-2xl">{e.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}