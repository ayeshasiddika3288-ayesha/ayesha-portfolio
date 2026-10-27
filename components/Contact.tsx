"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { LINKS } from "@/data/links";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.name.trim().length < 2) err.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) err.message = "Message should be at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent("Portfolio message from " + form.name)}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const input = (k: string) =>
    `w-full rounded-lg border bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:ring-2 ${
      errors[k] ? "border-rose-500 focus:ring-rose-500/40" : "border-slate-700 focus:border-amber-400 focus:ring-amber-400/30"
    }`;

  const items = [
    { Icon: Mail, text: LINKS.email, href: `mailto:${LINKS.email}` },
    { Icon: Phone, text: LINKS.phone, href: `tel:${LINKS.phoneIntl}` },
    { Icon: MessageCircle, text: "Chat on WhatsApp", href: LINKS.whatsapp },
  ];

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">Contact</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="max-w-md">Looking for a junior developer or intern? Send me a message and I will reply as soon as I can.</p>
            {items.map(({ Icon, text, href }) => (
              <a
                key={text}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-amber-400/50"
              >
                <span className="rounded-lg bg-amber-400/10 p-2 text-amber-300">
                  <Icon size={20} />
                </span>
                <span className="text-slate-200">{text}</span>
              </a>
            ))}
          </div>

          <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            {(["name", "email"] as const).map((k) => (
              <div key={k}>
                <label htmlFor={k} className="mb-1 block text-sm capitalize text-slate-400">{k}</label>
                <input id={k} type={k === "email" ? "email" : "text"} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className={input(k)} />
                {errors[k] && <p className="mt-1 text-sm text-rose-400">{errors[k]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-slate-400">Message</label>
              <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input("message")} />
              {errors.message && <p className="mt-1 text-sm text-rose-400">{errors.message}</p>}
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300">
              <Send size={18} /> Send Message
            </button>
            {sent && <p className="text-sm text-emerald-400">Your email app should open with the message ready to send.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}