import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ayesha Siddika | Full Stack Developer",
  description:
    "Portfolio of Ayesha Siddika, a CSE student and full stack developer building web apps with Next.js, TypeScript, Node.js and MongoDB.",
  keywords: ["Ayesha Siddika", "Full Stack Developer", "Next.js", "React", "Bangladesh"],
  openGraph: {
    title: "Ayesha Siddika | Full Stack Developer",
    description: "Next.js and MERN stack projects by Ayesha Siddika.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}