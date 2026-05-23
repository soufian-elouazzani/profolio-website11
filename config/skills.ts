import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "AWS",
    description:
      "Design, deploy, and manage highly available, scalable, and secure cloud infrastructure and services.",
    rating: 5,
    icon: Icons.amazonaws,
  },
  {
    name: "Terraform",
    description:
      "Define, provision, and version infrastructure safely and efficiently using declarative config files (IaC).",
    rating: 5,
    icon: Icons.terraform,
  },
  {
    name: "Ansible",
    description:
      "Automate system configuration, software deployment, and configuration management at scale.",
    rating: 5,
    icon: Icons.ansible,
  },
  {
    name: "Jenkins",
    description:
      "Orchestrate complex automated build, test, and release pipelines to enable continuous integration.",
    rating: 5,
    icon: Icons.jenkins,
  },
  {
    name: "GitLab",
    description:
      "Build end-to-end CI/CD pipelines, container registries, and manage code repositories natively.",
    rating: 5,
    icon: Icons.gitlab,
  },
  {
    name: "GitHub Actions",
    description:
      "Automate workflows, tests, and deployments directly within the GitHub ecosystem.",
    rating: 5,
    icon: Icons.githubactions,
  },
  {
    name: "Docker",
    description:
      "Package applications into standardized, lightweight containers for consistency across environments.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "Kubernetes",
    description:
      "Orchestrate, automate scaling, and manage containerized applications in production clusters.",
    rating: 4,
    icon: Icons.kubernetes,
  },
  {
    name: "Linux",
    description:
      "Automate administration tasks, write bash scripts, and manage secure server environments.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "Next.js",
    description:
      "Develop performant, production-ready React web applications with routing and server-side rendering.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Build interactive, component-driven user interfaces for web applications.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Typescript",
    description:
      "Write type-safe, maintainable, and robust code for application and automation logic.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create dynamic experiences and write scripts for web and server environments.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern, and responsive user interfaces with utility-first styling.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
