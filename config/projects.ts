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
    id: "meshnetwork",
    companyName: "Meshtastic Network Monitoring Suite",
    type: "Personal",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Monitoring suite for Meshtastic networks with automatic SPLAT! coverage calculation, redundancy analysis, and Dockerized microservices.",
    websiteLink: "https://github.com/soufian-elouazzani/meshnetwork-docs",
    githubLink: "https://github.com/soufian-elouazzani/meshnetwork",
    techStack: ["Python", "Docker", "PostgreSQL", "Linux", "Git"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Coverage & redundancy services",
        description:
          "Python daemons compute radio coverage with SPLAT! terrain data and analyze overlap between nodes.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Extends the Meshtastic MQTT Explorer with coverage and redundancy microservices that run alongside the existing stack in Docker — no changes to the upstream codebase.",
        "Full documentation and architecture diagrams live in the companion meshnetwork-docs repository.",
      ],
      bullets: [
        "Automatic coverage prediction using SPLAT! and NASA SRTM terrain data with GeoJSON output per node.",
        "Redundancy analysis with overlap detection, scoring (levels 1–5), and cluster identification.",
        "Vue.js + Leaflet microfrontend for real-time coverage visualization on port 3001.",
        "Docker Compose deployment with PostgreSQL, Mosquitto MQTT, and persistent terrain cache.",
      ],
    },
  },
  {
    id: "devsecops-pipeline",
    companyName: "DevSecOps Pipeline Implementation",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Academic end-to-end GitLab CI/CD pipeline with Kubernetes, Argo CD GitOps, and integrated SAST/SCA/DAST security gates.",
    techStack: [
      "GitLab",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Terraform",
      "Jenkins",
    ],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Secure SDLC pipeline",
        description:
          "GitLab CI/CD with automated vulnerability gates, signed commits, and approval workflows.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Academic DevOps & Security project delivering a production-style pipeline from commit to cluster with security scanning at every stage.",
      ],
      bullets: [
        "End-to-end GitLab CI/CD pipeline with Kubernetes deployment and Argo CD GitOps.",
        "Integrated SAST, SCA, and DAST scanning with automated vulnerability gates.",
        "Secured SDLC via protected branches, signed commits, and approval workflows.",
        "Stack: GitLab CI/CD, Kubernetes, Argo CD, Docker, Maven, Minikube, SonarQube, Prometheus, Grafana.",
      ],
    },
  },
  {
    id: "p2p-securechat",
    companyName: "Peer-to-Peer SecureChat Application",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Decentralized P2P chat with Kademlia discovery, Chord/DHT routing, and Diffie-Hellman + AES secured messaging.",
    techStack: ["Python", "Linux", "Git"],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Distributed overlay network",
        description:
          "Structured overlay with Kademlia node discovery and Chord/DHT for efficient message routing.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Distributed Systems project implementing a decentralized chat application without a central server.",
      ],
      bullets: [
        "Designed and implemented a decentralized P2P chat with a structured overlay network.",
        "Kademlia protocol for node discovery and Chord/DHT for efficient routing.",
        "Secured communications with Diffie-Hellman key exchange and AES encryption.",
        "Technologies: Python, socket programming, cryptography, DHT, Kademlia, Chord protocol.",
      ],
    },
  },
  {
    id: "http-server",
    companyName: "HTTP Server (Java)",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Custom HTTP server built in Java from scratch — request parsing, routing, and response handling without frameworks.",
    githubLink: "https://github.com/soufian-elouazzani/http-server",
    techStack: ["Java", "Linux", "Git"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Core server implementation",
        description:
          "Low-level TCP socket handling, HTTP protocol parsing, and static resource serving.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A from-scratch HTTP server in Java exploring networking fundamentals, protocol design, and concurrent request handling.",
      ],
      bullets: [
        "Implements HTTP request parsing and response generation without servlet containers.",
        "Handles connection lifecycle and basic routing logic in pure Java.",
      ],
    },
  },
  {
    id: "formal-while-language",
    companyName: "WHILE Language — OCaml & Rocq Proofs",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Formal methods project: WHILEb/WHILEb-- parsers in OCaml, natural semantics, and machine-checked proofs in Rocq (Coq).",
    githubLink: "https://github.com/soufian-elouazzani/formal-while-language",
    techStack: ["Python", "Java", "Linux", "Git"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Syntax, semantics & proofs",
        description:
          "OCaml interpreters for WHILE variants plus Coq proofs for natural and operational semantics.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Three-part academic project covering grammars, natural semantics (SN), syntactic analyzers, and formal verification in Rocq.",
      ],
      bullets: [
        "OCaml parsers and executors for WHILEb-- and WHILEb with whitespace-tolerant parsing.",
        "Natural semantics rules and operational semantics (SOS) with proofs in TD6et7.v.",
        "Optional extensions: lazy lists, memory management, step counters, and interactive execution.",
      ],
    },
  },
  {
    id: "java-prod-cons",
    companyName: "Java Producer–Consumer Application",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Classic producer–consumer concurrency pattern in Java with thread-safe queues and coordinated worker threads.",
    githubLink: "https://github.com/soufian-elouazzani/java-prod-cons",
    techStack: ["Java", "Linux", "Git"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Concurrent workers",
        description:
          "Synchronized buffer between producer and consumer threads with proper wait/notify coordination.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Demonstrates multi-threaded programming in Java using the producer–consumer pattern with shared bounded buffers.",
      ],
      bullets: [
        "Thread-safe queue or buffer between producer and consumer roles.",
        "Proper synchronization to avoid race conditions and deadlocks.",
        "Illustrates classic concurrency primitives in a minimal, readable codebase.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
