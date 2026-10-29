export type Project = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  stack: string[];
  description: string;
  live: string;
  github: string;
  challenges: string;
  future: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    image: "/images/bazar-dor.png",
    summary: "A Bangladeshi grocery price-tracking website with secure user authentication.",
    stack: ["Next.js", "TypeScript", "BetterAuth", "MongoDB Atlas", "Tailwind CSS"],
    description:
      "Bazar Dor is a Next.js web application for tracking Bangladeshi grocery prices across categories, with secure user authentication built with BetterAuth and MongoDB Atlas.",
    live: "https://b14-a7-bazar-dor-six.vercel.app/",
    github: "https://github.com/ayeshasiddika3288-ayesha/B14-A7-Bazar-Dor",
    challenges:
      "Setting up BetterAuth with MongoDB Atlas, fetching and displaying price data, and handling loading and error states.",
    future:
      "Add price history charts, price-drop alerts, product search and a favorites list for each user.",
  },
  {
    slug: "fitlog",
    name: "FitLog — Workout Library",
    image: "/images/fitlog.png",
    summary: "A responsive workout library for exploring exercises and planning daily workouts.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "FitLog is a responsive workout library where users can explore exercises and plan their daily workouts in a clean interface.",
    live: "https://b14-assignment-06.vercel.app/",
    github: "https://github.com/ayeshasiddika3288-ayesha/B14-Assignment-06",
    challenges:
      "Structuring reusable components and keeping the layout responsive across screen sizes.",
    future: "Add workout history, progress tracking and a personal routine builder.",
  },
  {
    slug: "movie-explorer",
    name: "Movie Explorer",
    image: "/images/movie-explorer.png",
    summary: "A movie discovery interface for exploring movie information.",
    stack: ["React", "JavaScript", "CSS"],
    description:
      "Movie Explorer is a movie discovery app where users can browse movies and view key information in a clean, responsive interface.",
    live: "https://movie-explorer-psi-dusky.vercel.app/",
    github: "https://github.com/ayeshasiddika3288-ayesha/movie-explorer",
    challenges:
      "Fetching data from an API, handling loading and error states, and keeping the interface responsive.",
    future: "Add search, genre filters, a watchlist and user reviews.",
  },
];