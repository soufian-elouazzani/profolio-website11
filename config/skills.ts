import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Docker",
    description:
      "Containerize services, optimize images for CI jobs, and compose multi-service stacks for local and production-like environments.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "Kubernetes",
    description:
      "Deploy and operate containerized workloads — manifests, ingress, secrets, GPU scheduling, and Kustomize-based multi-service apps.",
    rating: 4,
    icon: Icons.kubernetes,
  },
  {
    name: "Terraform",
    description:
      "Provision infrastructure as code — VMs, clusters, and cloud resources with versioned, repeatable deployments.",
    rating: 5,
    icon: Icons.terraform,
  },
  {
    name: "Ansible",
    description:
      "Configure servers, install runtimes (NVIDIA toolkit, kubectl), and apply Kubernetes manifests after provisioning.",
    rating: 4,
    icon: Icons.ansible,
  },
  {
    name: "Jenkins",
    description:
      "Build automated CI jobs — package publishing, Terraform-provisioned agents, and optimized Docker-based pipelines (BASSETTI internship).",
    rating: 5,
    icon: Icons.jenkins,
  },
  {
    name: "GitHub Actions",
    description:
      "CI/CD for build, test, container push, and Vercel/Kubernetes deploy workflows across multi-repo projects.",
    rating: 5,
    icon: Icons.githubactions,
  },
  {
    name: "GitLab",
    description:
      "End-to-end CI/CD with SAST/DAST gates, Helm deploys, and GitOps-style delivery to Kubernetes.",
    rating: 4,
    icon: Icons.gitlab,
  },
  {
    name: "AWS",
    description:
      "Core cloud services — IAM, VPC, EC2, EBS — with AWS Academy Cloud Foundations certification.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "Linux",
    description:
      "Server administration, bash scripting, Grid'5000 bare-metal workflows, and secure Linux environments.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "Python",
    description:
      "FastAPI services, async workers, RabbitMQ consumers, network tooling, and automation scripts.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "FastAPI",
    description:
      "Async API gateways — JWT auth, OpenAPI docs, queue integration, and non-blocking request handling.",
    rating: 4,
    icon: Icons.fastapi,
  },
  {
    name: "React",
    description:
      "SPAs with React 19 — auth flows, polling-based async UX, and production builds behind Nginx.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "PostgreSQL",
    description:
      "Relational schemas for users, sessions, and message history; durable persistence alongside Redis caches.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Redis",
    description:
      "Session message caches, task status hashes, sorted sets for recent history, and TTL-based eviction.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "Java",
    description:
      "Low-level systems programming — custom HTTP servers, concurrency patterns, and class loader isolation.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Vue.js",
    description:
      "Microfrontends with Leaflet maps for real-time geospatial visualization in distributed monitoring systems.",
    rating: 3,
    icon: Icons.vuejs,
  },
  {
    name: "Javascript",
    description:
      "Node.js backends, React frontends, and API client layers for full-stack applications.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "Typescript",
    description:
      "Type-safe frontend and tooling code for maintainable web applications.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    description:
      "This portfolio site — React 19, server components, SEO, and Vercel deployment.",
    rating: 4,
    icon: Icons.nextjs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
