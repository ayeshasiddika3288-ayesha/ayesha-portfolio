"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = ["home", "about", "skills", "education", "experience", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/#home" className="text-lg font-bold text-white">
            Ayesha<span className="text-amber-400">.</span>
          </Link>
          <ul className="hidden gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n}>
                <Link href={`/#${n}`} className="text-sm capitalize text-slate-400 transition hover:text-amber-300">
                  {n}
                </Link>
              </li>
            ))}
          </ul>
          <button className="p-2 text-slate-200 md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 border-l border-slate-800 bg-slate-900 p-6 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="mb-6 ml-auto block p-2 text-slate-200" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X size={24} />
        </button>
        <ul className="space-y-1">
          {NAV.map((n) => (
            <li key={n}>
              <Link
                href={`/#${n}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-lg capitalize text-slate-200 hover:bg-slate-800 hover:text-amber-300"
              >
                {n}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}