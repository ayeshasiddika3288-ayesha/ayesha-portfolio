import { Plane, BookOpen, BookMarked, Palette, Languages, Target, Briefcase, GraduationCap, Rocket } from "lucide-react";

const STATS = [
  ["3", "Live projects"],
  ["2", "Running courses"],
  ["1", "UI/UX internship"],
];

const FOCUS = [
  ["Frontend (React, Next.js)", 90],
  ["Backend & Auth", 65],
  ["UI/UX Design", 70],
] as const;

const INTERESTS = [
  { label: "Travelling", Icon: Plane },
  { label: "Story Reading", Icon: BookOpen },
  { label: "Reciting Quran", Icon: BookMarked },
  { label: "UI Design", Icon: Palette },
  { label: "English Practice", Icon: Languages },
];

const PATH = [
  { when: "2019", title: "Diploma in Computer Technology", Icon: GraduationCap },
  { when: "2023", title: "UI/UX Design Internship", Icon: Briefcase },
  { when: "Now", title: "Full Stack Training + B.Sc. CSE", Icon: Rocket },
  { when: "Next", title: "Junior Developer / Internship", Icon: Target },
  { when: "Goal", title: "Software Engineer", Icon: Target, goal: true },
];

const card = "flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">About Me</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* My Journey */}
          <article className={card}>
            <h3 className="mb-3 text-xl font-semibold text-white">My Journey</h3>
            <p className="leading-relaxed">
              I started with a Diploma in Computer Technology, then did a UI/UX design internship at Creative IT
              Institute where I learned how users think. That led me to a B.Sc. in Computer Science &amp; Engineering and
              full-stack development. Today I am studying at Creative IT Institute and Programming Hero, building and
              deploying complete web apps with Next.js, React, Node.js and MongoDB.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {STATS.map(([n, l]) => (
                <div key={l} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
                  <p className="text-2xl font-bold text-amber-300">{n}</p>
                  <p className="mt-1 text-xs text-slate-400">{l}</p>
                </div>
              ))}
            </div>
          </article>

          {/* What I Want to Build */}
          <article className={card}>
            <h3 className="mb-3 text-xl font-semibold text-white">What I Want to Build</h3>
            <p className="leading-relaxed">
              My goal is to grow into a software engineer who builds reliable, well-structured products. I enjoy the full
              picture: clean interfaces, secure authentication, APIs and databases. My design background helps me turn
              ideas into interfaces people actually enjoy using.
            </p>
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-slate-400">Current focus</p>
              <ul className="space-y-3">
                {FOCUS.map(([name, pct]) => (
                  <li key={name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{name}</span>
                      <span className="text-slate-500">{pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-rose-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Outside of Code */}
          <article className={card}>
            <h3 className="mb-3 text-xl font-semibold text-white">Outside of Code</h3>
            <p className="leading-relaxed">
              I like learning new technologies, reading stories, travelling, and exploring good UI design. I enjoy
              practising English and have won school-level speech, quiz and recitation competitions.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {INTERESTS.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-200 transition hover:border-amber-400/50"
                >
                  <Icon size={16} className="shrink-0 text-amber-300" />
                  {label}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* My Path timeline */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="mb-8 text-xl font-semibold text-white">My Path</h3>
          <ol className="relative grid gap-6 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-[11px] hidden h-0.5 bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 md:block" />
            {PATH.map(({ when, title, goal }) => (
              <li key={title} className="relative flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <span
                  className={`z-10 h-6 w-6 shrink-0 rounded-full border-4 border-slate-900 ${
                    goal ? "bg-emerald-400 ring-2 ring-emerald-400/40" : "bg-amber-400"
                  }`}
                />
                <div>
                  <p className={`text-sm font-bold ${goal ? "text-emerald-300" : "text-amber-300"}`}>{when}</p>
                  <p className="mt-1 text-sm text-slate-300">{title}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}