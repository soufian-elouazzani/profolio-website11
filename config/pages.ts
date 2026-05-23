import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Soufian Elouazzani's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Soufian Elouazzani's key skills that define his DevOps identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Soufian Elouazzani's projects in building and orchestrating scalable software systems.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Soufian Elouazzani.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Soufian Elouazzani's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Soufian Elouazzani's resume.",
    metadata: {
      title: "Resume",
      description: "Soufian Elouazzani's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on cloud architecture, CI/CD pipelines, and DevOps best practices.",
    metadata: {
      title: "Blogs",
      description:
        "Soufian Elouazzani's blog — thoughts on DevOps, cloud architecture, and automation.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Soufian Elouazzani's professional journey and experience timeline.",
    },
  },
};
