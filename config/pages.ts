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
    description:
      "Open-source repositories, certifications, competitions, and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Soufian Elouazzani's repositories, certifications, achievements, and community involvement.",
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
      "Deep dives into distributed systems, formal methods, DevSecOps, and hands-on engineering projects.",
    metadata: {
      title: "Blogs",
      description:
        "Soufian Elouazzani's project write-ups — mesh networks, DevSecOps, P2P systems, and more.",
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
