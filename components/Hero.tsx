"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { LINKS } from "@/data/links";

export default function Hero() {
  const [msg, setMsg] = useState("");

  // Resume file thakle download hobe, na thakle message dekhabe
  const handleResume = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/resume.pdf", { method: "HEAD" });
      const type = res.headers.get("content-type") || "";
      if (!res.ok || type.includes("text/html")) throw new Error();
      const a = document.createElement("a");
      a.href = "/resume.pdf";
      a.download = "Ayesha_Siddika_Resume.pdf";
      a.click();
    } catch {
      setMsg("Resume will be available soon. Please email me in the meantime.");
      setTimeout(() => setMsg(""), 4000);
    }
  };

    const socials = [
    { Icon: FaGithub, href: LINKS.github, label: "GitHub" },
    { Icon: FaLinkedinIn, href: LINKS.linkedin, label: "LinkedIn" },
    { Icon: FaFacebookF, href: LINKS.facebook, label: "Facebook" },
  ];

  return (
    <section id="home" className="flex min-h-screen scroll-mt-20 items-center px-5 pb-16 pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-slate-400">Hello, I&apos;m</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Ayesha Siddika</h1>
          <p className="mt-4 text-xl font-medium text-amber-300">Aspiring Full Stack Developer | CSE Student</p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
            I build responsive web apps with React, Next.js and TypeScript, and I&apos;m learning to connect them to
            secure backends.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download="Ayesha_Siddika_Resume.pdf"
              onClick={handleResume}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-amber-400 hover:text-amber-300"
            >
              Contact Me
            </a>
          </div>
          {msg && <p className="mt-4 text-sm text-amber-300">{msg}</p>}

          <div className="mt-8 flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-slate-700 p-3 text-slate-300 transition hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 p-1.5">
            <Image
              src="/images/avatar.png"
              alt="Ayesha Siddika"
              width={288}
              height={288}
              priority
              className="h-56 w-56 rounded-full bg-slate-900 object-cover sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}