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
    position: "DevOps Engineer Intern",
    company: "BASSETTI-GROUP",
    location: "On-premise",
    startDate: new Date("2026-04-01"),
    endDate: new Date("2026-08-31"),
    description: [
      "Built Jenkins jobs to publish packages automatically to GitHub and Google Drive.",
      "Provisioned Jenkins controller and agent infrastructure with Terraform.",
      "Optimized Docker containers for faster, more reliable job execution.",
    ],
    achievements: [
      "Developed Jenkins jobs for automated package publishing to GitHub and Google Drive.",
      "Used Terraform to provision infrastructure for the Jenkins controller and build agents.",
      "Optimized Docker images and container configs to improve CI job execution performance.",
    ],
    skills: [
      "Jenkins",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "FastAPI",
      "Docker",
      "Linux",
      "Git",
    ],
    companyUrl: "https://www.bassetti-group.com",
    logo: "/logo.png",
  },
  {
    id: "sinteg",
    position: "Cybersecurity Research Intern",
    company: "Sinteg",
    location: "Remote, Netherlands",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-08-31"),
    description: [
      "Developed an agentless network segmentation assessment tool for SME internal traffic visibility.",
      "Delivered a segmentation health score framework to prioritize security improvements and compliance.",
    ],
    achievements: [
      "Built an agentless network segmentation assessment tool to enhance visibility into internal traffic for SMEs.",
      "Designed a segmentation health score framework to help organizations prioritize security improvements.",
      "Applied GNS3 lab environments, SPAN port mirroring, and Python-based network analysis workflows.",
    ],
    skills: ["Python", "Linux", "Git"],
    logo: "/logo.png",
  },
];
