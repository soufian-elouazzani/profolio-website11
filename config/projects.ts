import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "eks-terraform",
    companyName: "Multi-Region Kubernetes (EKS & Terraform)",
    type: "Personal",
    category: ["Web Dev", "Backend"],
    shortDescription:
      "Architected and implemented a highly available multi-region Kubernetes cluster deployment on AWS EKS utilizing Terraform and GitOps.",
    websiteLink: "https://github.com/soufian-elouazzani/eks-terraform-gitops",
    githubLink: "https://github.com/soufian-elouazzani/eks-terraform-gitops",
    techStack: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Git",
      "CI/CD",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Cluster Architecture",
        description:
          "Multi-region setup with automated load balancing, VPC peering, and secure private networking namespaces.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project focuses on building a highly available Kubernetes cluster infrastructure across multiple AWS regions using Terraform for Infrastructure as Code.",
        "We integrated GitOps practices via ArgoCD, allowing automated configuration drift detection and synchronization directly from git repositories.",
      ],
      bullets: [
        "Deployed multi-region Amazon EKS clusters managed using custom Terraform workspaces.",
        "Implemented secure VPC peering and routing rules, restricting direct internet access to worker nodes.",
        "Configured GitOps with ArgoCD to synchronize application Helm charts from a central Git repository.",
        "Integrated Prometheus and Grafana for comprehensive system monitoring and alerting.",
      ],
    },
  },
  {
    id: "gitops-gitlab",
    companyName: "GitOps CD Pipeline (ArgoCD & GitLab CI)",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Designed and deployed an automated GitOps CD pipeline for secure microservices deployment using GitLab CI, ArgoCD, and Helm.",
    githubLink: "https://github.com/soufian-elouazzani/gitops-gitlab-argocd",
    techStack: ["GitLab", "Kubernetes", "Docker", "CI/CD", "Git"],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Pipeline Architecture",
        description:
          "Continuous Delivery steps including Docker build, push, security scanning (Trivy), and automated manifest update.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Designed an end-to-end continuous integration and deployment pipeline for containerized microservices.",
        "Code commits trigger GitLab CI runners to build, scan, and push Docker images, then automatically update Helm manifests tracked by ArgoCD.",
      ],
      bullets: [
        "Automated container builds and security scanning (Trivy) on GitLab runners.",
        "Configured ArgoCD to pull the latest image versions and deploy them to local and cloud clusters.",
        "Implemented automated rollbacks on health check failures.",
      ],
    },
  },
  {
    id: "ansible-aws",
    companyName: "Automated Cloud Provisioning (Ansible & AWS)",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Built an automated system configuration and application deployment platform utilizing Ansible Playbooks and AWS EC2.",
    githubLink: "https://github.com/soufian-elouazzani/ansible-aws-automation",
    techStack: ["Ansible", "AWS", "Linux", "Git", "Docker"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-08-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Playbook Execution",
        description:
          "Ansible playbooks configuring security settings, firewall policies, Docker containers, and reverse proxy settings.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This repository contains Ansible playbooks to provision and harden AWS EC2 Linux instances dynamically.",
        "It automates system updates, firewall rules (UFW), user creation, and runs containerized microservices in production-like configurations.",
      ],
      bullets: [
        "Wrote modular Ansible roles for system hardening, Docker daemon setup, and reverse-proxy configuration.",
        "Provisioned AWS resources dynamically using Ansible EC2 modules.",
        "Managed staging and production environments using secure Ansible Vault variables.",
      ],
    },
  },
  {
    id: "jenkins-pipeline",
    companyName: "Jenkins Enterprise Pipeline-as-Code",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Developed a reusable Jenkins Shared Library and Declarative Pipelines to standardize builds and security scanning for microservices.",
    githubLink: "https://github.com/soufian-elouazzani/jenkins-shared-library",
    techStack: ["Jenkins", "CI/CD", "Docker", "Git", "Linux"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-02-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Jenkins Shared Library",
        description:
          "Custom Groovy steps encapsulating build, test, and SonarQube quality gates.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a reusable pipeline framework for developers across projects using a custom Jenkins Shared Library.",
        "It ensures standard linting, static analysis (SonarQube), and dependency vulnerability scans (OWASP dependency check).",
      ],
      bullets: [
        "Wrote custom Groovy pipeline functions within Jenkins Shared Libraries.",
        "Integrated SonarQube quality gates into the build process, blocking failing code.",
        "Configured automated Slack notifications for build failures.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
