export type Project = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  challenges: string;
  future: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "fitlog",
    name: "FitLog — Workout Library",
    image: "/images/fitlog.png",
    summary:
      "A responsive workout library for exploring exercises and planning daily workouts.",
    description:
      "FitLog is a workout library built with Next.js and Tailwind CSS. Users can explore exercises, view workout details, create a daily workout plan, and save favorite exercises.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://b14-assignment-06.vercel.app/",
    github: "https://github.com/ayeshasiddika3288-ayesha/B14-Assignment-06",
    challenges:
      "Building a responsive layout, organizing workout information, and managing the daily workout plan.",
    future:
      "Add user authentication, save workout plans permanently, and introduce workout progress tracking.",
  },
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    image: "/images/bazar-dor.png",
    summary:
      "A Bangladeshi product price-tracking website showing daily market prices.",
    description:
      "Bazar Dor is a Next.js web application that displays product prices and helps users compare current prices with previous prices.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API"],
    live: "#",
    github: "#",
    challenges:
      "Fetching API data, displaying product information, and handling loading and error states.",
    future:
      "Add price history charts, product search, category filters, and user authentication.",
  },
  {
    slug: "movie-explorer",
    name: "Movie Explorer",
    image: "/images/movie-explorer.png",
    summary:
      "A movie discovery interface for exploring movie information.",
    description:
      "Movie Explorer is a web project designed to present movie information in an organized and user-friendly interface.",
    stack: ["React", "JavaScript", "CSS", "API"],
    live: "#",
    github: "#",
    challenges:
      "Organizing movie cards, building a responsive interface, and presenting movie information clearly.",
    future:
      "Add movie search, genre filters, detailed movie pages, and favorites.",
  },
];