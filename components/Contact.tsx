"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { LINKS } from "@/data/links";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const err: FormErrors = {};

    if (form.name.trim().length < 2) {
      err.name = "Please enter your name (at least 2 characters).";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      err.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      err.message = "Message should be at least 10 characters.";
    }

    setErrors(err);
    setSent(false);

    if (Object.keys(err).length > 0) {
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name.trim()}`
    );

    const body = encodeURIComponent(
      `${form.message.trim()}\n\nFrom: ${form.name.trim()}\nEmail: ${form.email.trim()}`
    );

    const mailtoLink = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSent(true);
    setForm(INITIAL_FORM);
    setErrors({});
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-lg border bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:ring-2 ${
      errors[field]
        ? "border-rose-500 focus:ring-rose-500/40"
        : "border-slate-700 focus:border-amber-400 focus:ring-amber-400/30"
    }`;

  const items = [
    {
      Icon: Mail,
      text: LINKS.email,
      href: `mailto:${LINKS.email}`,
    },
    {
      Icon: Phone,
      text: LINKS.phone,
      href: `tel:${LINKS.phoneIntl}`,
    },
    {
      Icon: MessageCircle,
      text: "Chat on WhatsApp",
      href: LINKS.whatsapp,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
          Contact
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-4">
            <p className="max-w-md text-slate-300">
              Looking for a junior developer or intern? Send me a
              message and I will reply as soon as I can.
            </p>

            {items.map(({ Icon, text, href }) => (
              <a
                key={text}
                href={href}
                target={
                  href.startsWith("https://") ? "_blank" : undefined
                }
                rel={
                  href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-amber-400/50"
              >
                <span className="rounded-lg bg-amber-400/10 p-2 text-amber-300">
                  <Icon size={20} />
                </span>

                <span className="break-all text-slate-200">
                  {text}
                </span>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={submit}
            noValidate
            className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            {/* Name and Email */}
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="mb-1 block text-sm capitalize text-slate-400"
                >
                  {field}
                </label>

                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  autoComplete={
                    field === "name" ? "name" : "email"
                  }
                  value={form[field]}
                  onChange={(e) => {
                    setForm((previous) => ({
                      ...previous,
                      [field]: e.target.value,
                    }));

                    setErrors((previous) => ({
                      ...previous,
                      [field]: undefined,
                    }));

                    setSent(false);
                  }}
                  aria-invalid={Boolean(errors[field])}
                  aria-describedby={
                    errors[field] ? `${field}-error` : undefined
                  }
                  className={inputClass(field)}
                />

                {errors[field] && (
                  <p
                    id={`${field}-error`}
                    className="mt-1 text-sm text-rose-400"
                  >
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm text-slate-400"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => {
                  setForm((previous) => ({
                    ...previous,
                    message: e.target.value,
                  }));

                  setErrors((previous) => ({
                    ...previous,
                    message: undefined,
                  }));

                  setSent(false);
                }}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                className={inputClass("message")}
              />

              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-rose-400"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              <Send size={18} />
              Send Message
            </button>

            {sent && (
              <p
                role="status"
                className="text-sm text-emerald-400"
              >
                Your email app should open with the message ready
                to send. Please send the email from your email app.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}