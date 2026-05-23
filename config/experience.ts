import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "bassetti",
    position: "DevOps & Cloud Engineer",
    company: "BASSETTI",
    location: "Grenoble, France",
    startDate: new Date("2026-04-07"),
    endDate: "Present",
    description: [
      "Automated infrastructure provisioning and cloud deployments on AWS using Terraform and Ansible.",
      "Designed and optimized GitLab and GitHub Actions CI/CD pipelines to streamline deployment workflows.",
      "Managed containerized application deployments on Kubernetes (EKS) and Docker environments for high scalability.",
    ],
    achievements: [
      "Automated infrastructure provisioning and cloud deployments on AWS using Terraform and Ansible, reducing environment setup time by 50%.",
      "Designed and optimized GitLab and GitHub Actions CI/CD pipelines to streamline deployment workflows for over 10 internal systems.",
      "Managed containerized application deployments on Kubernetes (EKS) and Docker environments to ensure high scalability and zero-downtime rolling updates.",
      "Implemented central logging and application performance monitoring to proactively resolve cluster health issues.",
      "Led migration from legacy bare-metal deployment servers to secure AWS VPC cloud infrastructure using IaC best practices.",
    ],
    skills: ["AWS", "Terraform", "Ansible", "GitLab", "GitHub Actions", "Docker", "Kubernetes", "Linux", "Git"],
    companyUrl: "https://www.bassetti-group.com",
    logo: "/experience/keys-logo.png",
  },
  {
    id: "muze-ai",
    position: "DevOps Engineer / Founding SRE",
    company: "Muze AI",
    location: "Bengaluru, India",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    description: [
      "Designed and maintained highly reliable cloud architecture on AWS using Terraform.",
      "Orchestrated GitLab CI/CD pipelines, automating integration tests and container image builds.",
      "Improved cold-start latency and infrastructure scaling by optimizing container resource allocations.",
    ],
    achievements: [
      "Designed and maintained highly reliable cloud architecture on AWS using Terraform, achieving 99.9% uptime for core applications.",
      "Orchestrated GitLab CI/CD pipelines, automating integration tests and container image builds to improve release cycles by 40%.",
      "Optimized container resource allocations and orchestration in Docker, reducing cloud hosting costs by ~30%.",
      "Configured robust VPC network segmentation, IAM security policies, and secure secrets management.",
    ],
    skills: ["AWS", "Terraform", "GitLab", "Docker", "Linux", "Git"],
    companyUrl: "https://muzecmo.com",
    logo: "/experience/muzeai-logo.png",
  },
  {
    id: "builtdesign",
    position: "DevOps Intern",
    company: "Builtdesign",
    location: "Nagpur, India",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    description: [
      "Automated application builds and deployment pipelines using Jenkins and bash scripting.",
      "Configured and managed Linux-based staging and production servers on AWS.",
      "Maintained local development Docker environments to ensure team environments aligned with staging.",
    ],
    achievements: [
      "Automated application builds and deployment pipelines using Jenkins and bash scripting, saving developers hours of manual deployment work.",
      "Configured and managed Linux-based staging and production servers on AWS EC2.",
      "Maintained local development Docker environments to ensure team environments aligned with staging, reducing 'works on my machine' issues by 90%.",
    ],
    skills: ["Jenkins", "AWS", "Docker", "Linux", "Git"],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/builtdesign-logo.png",
  },
];
