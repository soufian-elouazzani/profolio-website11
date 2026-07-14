import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Soufian Elouazzani — software engineer and digital solutions consultant.",
    },
  },
  services: {
    title: "Engineering Services",
    description:
      "Websites, e-commerce, business software, AI solutions, automation, cloud, and DevOps services for growing businesses.",
    metadata: {
      title: "Engineering Services",
      description:
        "Soufian Elouazzani's engineering services — business websites, e-commerce, booking systems, AI assistants, automation, cloud, and DevOps.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technologies and tools I use to build reliable websites and systems.",
    metadata: {
      title: "Skills",
      description:
        "Soufian Elouazzani's technical skills — web development, DevOps, and full-stack engineering.",
    },
  },
  projects: {
    title: "Engineering Projects",
    description:
      "Deeper technical work — distributed systems, DevOps pipelines, and full-stack platforms. For recruiters and engineers who want the full story.",
    metadata: {
      title: "Engineering Projects",
      description:
        "Soufian Elouazzani's engineering projects — Kubernetes, FastAPI, formal methods, and distributed systems.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Tell me about your business and what you need — a website, online shop, or digital solution. I will get back to you with a clear plan and quote.",
    metadata: {
      title: "Contact",
      description: "Contact Soufian Elouazzani for web development and digital solutions.",
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
      "Practical project write-ups — how I built each system, key decisions, and what I learned along the way.",
    metadata: {
      title: "Blogs",
      description:
        "Soufian Elouazzani's project case studies — DevSecOps, distributed systems, mesh networks, and more.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and internships in DevOps and cybersecurity.",
    metadata: {
      title: "Experience",
      description:
        "Soufian Elouazzani's professional journey and experience timeline.",
    },
  },
};
