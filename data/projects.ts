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
    image: "/images/projects/bazar-dor.png",
    summary: "A Bangladeshi grocery price-tracking website with user authentication.",
    stack: ["Next.js", "TypeScript", "BetterAuth", "MongoDB Atlas"],
    description:
      "Bazar Dor helps people check and compare daily grocery prices across categories. It has a home page, category pages, and a secure login system built with BetterAuth and MongoDB Atlas.",
    live: "https://b14-a7-bazar-dor-six.vercel.app/",
    github: "PASTE_BAZAR_DOR_CLIENT_REPO_LINK",
    challenges:
      "Setting up BetterAuth with MongoDB Atlas and the Next.js App Router, and keeping protected pages working correctly after deployment.",
    future: "Add price history charts, price-drop alerts, and a favorites list for each user.",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    image: "/images/projects/fitlog.png",
    summary: "A workout library app to browse and track exercises.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "FitLog is a workout library where users can browse exercises and plan their training in a clean, responsive interface.",
    live: "https://b14-assignment-06.vercel.app/",
    github: "PASTE_FITLOG_CLIENT_REPO_LINK",
    challenges:
      "Structuring reusable components and keeping the layout responsive across screen sizes.",
    future: "Add workout history, progress tracking, and a personal routine builder.",
  },
  {
    slug: "movie-explorer",
    name: "Movie Explorer",
    image: "/images/projects/movie-explorer.png",
    summary: "A movie discovery app with search and detail views.",
    stack: ["React", "Tailwind CSS", "REST API"],
    description:
      "Movie Explorer lets users discover movies, search by title, and open a details view with key information.",
    live: "https://movie-explorer-psi-dusky.vercel.app/",
    github: "PASTE_MOVIE_EXPLORER_CLIENT_REPO_LINK",
    challenges:
      "Fetching data from an API, handling loading and error states, and keeping search fast.",
    future: "Add watchlists, genre filters, and user reviews.",
  },
];