const PARTS = [
  {
    title: "My Journey",
    text: "I started with a Diploma in Computer Technology, then did a UI/UX design internship at Creative IT Institute where I learned how users think. That led me to a B.Sc. in Computer Science & Engineering and full-stack development. Today I am studying at Creative IT Institute and Programming Hero, building and deploying complete web apps with Next.js, React, Node.js and MongoDB.",
  },
  {
    title: "What I Want to Build",
    text: "My goal is to grow into a software engineer who builds reliable, well-structured products. I enjoy the full picture: clean interfaces, secure authentication, APIs and databases. My design background helps me turn ideas into interfaces people actually enjoy using.",
  },
  {
    title: "Outside of Code",
    text: "I like learning new technologies, reading stories, travelling, and exploring good UI design. I enjoy practising English and have won school-level speech, quiz and recitation competitions.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">About Me</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PARTS.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}