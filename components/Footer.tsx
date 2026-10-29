import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaBehance, FaWhatsapp } from "react-icons/fa";
import { LINKS } from "@/data/links";
import Logo from "./Logo";

const NAV = ["home", "about", "skills", "education", "experience", "projects", "contact"];

const SOCIALS = [
  { Icon: FaGithub, href: LINKS.github, label: "GitHub" },
  { Icon: FaLinkedinIn, href: LINKS.linkedin, label: "LinkedIn" },
  { Icon: FaFacebookF, href: LINKS.facebook, label: "Facebook" },
  { Icon: FaBehance, href: LINKS.behance, label: "Behance" },
  { Icon: FaWhatsapp, href: LINKS.whatsapp, label: "WhatsApp" },
  { Icon: Mail, href: `mailto:${LINKS.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="flex items-center gap-3">
            <Logo size={40} />
            <span className="text-lg font-bold text-white">Ayesha Siddika</span>
          </a>
          <ul className="flex flex-wrap justify-center gap-5">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`/#${n}`} className="text-sm capitalize text-slate-400 hover:text-amber-300">
                  {n}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-slate-700 p-2.5 text-slate-300 transition hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row">
          <p className="text-sm">&copy; 2026 Ayesha Siddika. Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-400 hover:text-amber-300"
          >
            <ArrowUp size={16} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}