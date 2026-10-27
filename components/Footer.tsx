import { ArrowUp } from "lucide-react";

const NAV = ["home", "about", "skills", "education", "experience", "projects", "contact"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ayesha Siddika. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center gap-5">
          {NAV.map((n) => (
            <li key={n}>
              <a href={`/#${n}`} className="text-sm capitalize text-slate-400 hover:text-amber-300">{n}</a>
            </li>
          ))}
        </ul>
        <a href="#home" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-400 hover:text-amber-300">
          <ArrowUp size={16} /> Back to Top
        </a>
      </div>
    </footer>
  );
}