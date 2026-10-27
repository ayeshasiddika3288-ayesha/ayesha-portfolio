import { Code2, Server, Wrench } from "lucide-react";

const GROUPS = [
  {
    title: "Frontend",
    Icon: Code2,
    items: [
      ["HTML5", 95],
      ["CSS3", 90],
      ["JavaScript", 85],
      ["TypeScript", 75],
      ["React.js", 85],
      ["Next.js", 80],
      ["Tailwind CSS", 90],
    ],
  },
  {
    title: "Backend & Database",
    Icon: Server,
    items: [
      ["Node.js", 70],
      ["Express.js", 70],
      ["MongoDB", 70],
      ["REST APIs", 72],
      ["JWT", 60],
    ],
  },
  {
    title: "Tools",
    Icon: Wrench,
    items: [
      ["Git", 80],
      ["GitHub", 85],
      ["VS Code", 90],
      ["Vercel", 80],
    ],
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">Skills</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {GROUPS.map(({ title, Icon, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-amber-400/50"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg bg-amber-400/10 p-2 text-amber-300">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <ul className="space-y-4">
                {items.map(([name, level]) => (
                  <li key={name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{name}</span>
                      <span className="text-slate-500">{level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-rose-500"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}