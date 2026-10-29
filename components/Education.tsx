import { GraduationCap } from "lucide-react";

const EDU = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Northern University Bangladesh",
    status: "In Progress",
    note: "8th semester running (out of 9). CGPA 3.35 up to the 7th semester. Coursework covers data structures, databases, and software engineering.",
  },
  {
    degree: "Diploma in Engineering (Computer Technology)",
    school: "Noakhali Ideal Polytechnic Institute (NIPI), BTEB",
    status: "2019 - 2023",
    note: "CGPA 3.60 out of 4.00, with an A+ in the 8th semester industrial training. Built the foundation in programming, networking, and computer systems.",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">Education</h2>
        <ol className="relative space-y-8 border-l border-slate-700 pl-8">
          {EDU.map((e) => (
            <li key={e.degree} className="relative">
              <span className="absolute -left-[46px] top-1 rounded-full bg-slate-950 p-1.5 text-amber-300 ring-2 ring-slate-700">
                <GraduationCap size={18} />
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white">{e.degree}</h3>
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                  {e.status}
                </span>
              </div>
              <p className="mt-1 text-amber-300">{e.school}</p>
              <p className="mt-2 max-w-2xl">{e.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}