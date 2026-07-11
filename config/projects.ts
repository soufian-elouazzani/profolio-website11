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

const meshDocsImg =
  "https://raw.githubusercontent.com/soufian-elouazzani/meshnetwork-docs/main/Screenshots";

export const Projects: ProjectInterface[] = [
  {
    id: "chat-app-infra",
    companyName: "AI Chat Platform — Infrastructure & Kubernetes",
    type: "Personal",
    category: ["Full Stack", "Backend"],
    shortDescription:
      "Terraform + Ansible + Kubernetes deployment on Grid'5000 for a multi-repo ChatGPT-style app — from bare-metal provisioning to GPU-backed Ollama inference.",
    githubLink: "https://github.com/soufian-elouazzani/chat-app-infra",
    techStack: [
      "Terraform",
      "Ansible",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Git",
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "https://raw.githubusercontent.com/soufian-elouazzani/chat-app-infra/refs/heads/main/docs/images/k8s-infrastructure_blog-1.jpg",
    pagesInfoArr: [
      {
        title: "Kubernetes workloads",
        description:
          "Kustomize manifests for gateway, worker, frontend, PostgreSQL, Redis, RabbitMQ, and GPU-backed Ollama in the chat-app namespace.",
        imgArr: ["/logo.png"],
      },
      {
        title: "Grid'5000 provisioning",
        description:
          "Terraform reserves nodes via OAR, deploys images with Kadeploy, and bootstraps an RKE cluster before Ansible configures the runtime.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Infrastructure repository for deploying the multi-repo AI chat application on Grid'5000 (Kubernetes on bare metal). Covers the full path from cluster provisioning to production-style workloads with ingress, secrets, and observability hooks.",
        "Built to demonstrate system design, async processing, caching, message queues, and infrastructure as code — the same platform described across chat-app-frontend, chat-app-gateway, chat-app-worker, and this repo.",
      ],
      bullets: [
        "Terraform + Grid'5000 provider: OAR reservation (oarsub -t deploy), Kadeploy, and RKE cluster creation.",
        "Ansible: NVIDIA container toolkit, GPU device plugin, kubectl apply for manifests.",
        "Kubernetes (Kustomize): gateway, worker, frontend, PostgreSQL, Redis, RabbitMQ, Ollama with ingress /api rewrite.",
        "Docker Hub images (soufian1/chat-app-*): built and pushed via GitHub Actions before deploy.",
        "CPU and GPU profiles (chiclet vs chifflot) for integration tests vs Ollama on NVIDIA P100/V100.",
      ],
    },
  },
  {
    id: "chat-app-gateway",
    companyName: "AI Chat Platform — FastAPI Gateway",
    type: "Personal",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "FastAPI API gateway for a ChatGPT-style multi-model chat: JWT auth, session CRUD, async task enqueue, and polling-based inference orchestration.",
    githubLink: "https://github.com/soufian-elouazzani/chat-app-gateway",
    techStack: [
      "FastAPI",
      "Python",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Git",
      "CI/CD",
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "https://raw.githubusercontent.com/soufian-elouazzani/chat-app-gateway/refs/heads/master/docs/images/1_-8ZrRPNEz7wJwiEXbNrrrg.png",
    pagesInfoArr: [
      {
        title: "Async message flow",
        description:
          "Gateway returns task_id immediately (202 Accepted); frontend polls GET /tasks/{id}/status while the worker calls Ollama.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "FastAPI API gateway for a ChatGPT-style multi-model chat system powered by open-source LLMs (Ollama). Validates JWT, manages users/sessions/messages, enqueues inference tasks to RabbitMQ, and serves cached history from Redis with PostgreSQL as source of truth.",
        "The backend never blocks on slow inference — messages are processed asynchronously via a task queue while the React frontend polls until the AI reply is ready.",
      ],
      bullets: [
        "JWT authentication: register, login, admin model listing (GET /models).",
        "Session and message CRUD; POST /sessions/{id}/messages returns { task_id } immediately.",
        "RabbitMQ chat_tasks queue with dead-letter queue for failed jobs after 3 retries.",
        "Redis: last 50 messages per session, task status hashes, model config cache.",
        "PostgreSQL schema: users, chat_sessions, messages, model_configs.",
        "Design choices: FastAPI for async I/O, RabbitMQ over Kafka for task queues, polling over WebSocket for simpler frontend.",
      ],
    },
  },
  {
    id: "chat-app-worker",
    companyName: "AI Chat Platform — Async Worker",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "RabbitMQ consumer that loads conversation context, calls Ollama, persists to PostgreSQL, and updates Redis task status with DLQ retries.",
    githubLink: "https://github.com/soufian-elouazzani/chat-app-worker",
    techStack: [
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Linux",
      "Git",
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "https://raw.githubusercontent.com/soufian-elouazzani/chat-app-worker/refs/heads/master/docs/images/1_glKlvp33Gx_GYdK286oy7A.png",
    pagesInfoArr: [
      {
        title: "Worker pipeline",
        description:
          "Consumes chat_tasks, builds context from Redis (PostgreSQL fallback), calls Ollama generate, write-through cache update.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Async worker service for the multi-model AI chat platform. Consumes inference tasks from RabbitMQ, loads conversation context from Redis (with PostgreSQL fallback), calls Ollama, and writes results back to Redis and the database.",
        "Flow: gateway publishes task → worker picks up → builds context → Ollama inference → assistant reply persisted → task status set to completed → frontend poll succeeds.",
      ],
      bullets: [
        "Configurable retries (MAX_RETRIES=3) before dead-letter queue chat_tasks.dlq.",
        "Write-through caching: updates PostgreSQL and Redis (last 50 messages, 1-hour TTL).",
        "Environment-driven: RABBITMQ_URL, REDIS_URL, DATABASE_URL, OLLAMA_URL, prefetch and timeout tuning.",
        "Docker Compose stack for local dev with RabbitMQ, Redis, and Ollama (ollama pull llama3).",
        "Python 3.12+ with uv; structured logging and graceful shutdown.",
      ],
    },
  },
  {
    id: "chat-app-frontend",
    companyName: "AI Chat Platform — React Frontend",
    type: "Personal",
    category: ["Frontend", "Full Stack"],
    shortDescription:
      "ChatGPT-style React 19 SPA: JWT auth, session sidebar, async message polling, admin models page — containerized with Nginx on port 3000.",
    githubLink: "https://github.com/soufian-elouazzani/chat-app-frontend",
    techStack: [
      "React",
      "Javascript",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Git",
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "https://raw.githubusercontent.com/soufian-elouazzani/chat-app-frontend/refs/heads/master/docs/images/1_XdcrYecW6uCLwJOOe5048Q.jpg",
    pagesInfoArr: [
      {
        title: "Chat UI",
        description:
          "Sidebar session list, main chat area, protected routes, and 1.5s polling loop on GET /tasks/{task_id}/status.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Frontend for the Multi-Model AI Chat Application — a ChatGPT-style chat app powered by open-source LLMs (Ollama). Users register, log in, create chat sessions, and send messages to models like Llama, Mistral, and Gemma.",
        "The system is split across multiple repositories; each service is independent, containerized, and designed to scale. This repo delivers the React UI served by Vite in dev and Nginx in production.",
      ],
      bullets: [
        "React 19 + Vite + React Router: Login, Register, Chat, Admin (/models) routes.",
        "JWT stored in localStorage; Authorization: Bearer on every API call.",
        "Async UX: POST message → receive task_id → poll until status is completed or failed.",
        "Admin page lists Ollama models when is_admin is true in login response.",
        "Dockerfile + nginx.conf for production; GitHub Actions CI/CD; VITE_API_URL=/api for K8s ingress.",
        "Full stack tech: Nginx reverse proxy, FastAPI gateway, RabbitMQ, Redis, PostgreSQL, Ollama, K8s on Grid'5000.",
      ],
    },
  },
  {
    id: "meshnetwork",
    companyName: "Meshtastic Network Monitoring Suite",
    type: "Personal",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Dockerized monitoring for Meshtastic mesh networks — SPLAT! coverage zones, redundancy scoring, Vue.js map UI, and zero upstream code changes.",
    websiteLink: "https://github.com/soufian-elouazzani/meshnetwork-docs",
    githubLink: "https://github.com/soufian-elouazzani/meshnetwork",
    techStack: [
      "Python",
      "Docker",
      "PostgreSQL",
      "Vue.js",
      "Linux",
      "Git",
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "https://raw.githubusercontent.com/soufian-elouazzani/meshnetwork-docs/main/Screenshots/augmented_diagram.png",
    pagesInfoArr: [
      {
        title: "Coverage & redundancy",
        description:
          "Python daemons compute radio coverage with SPLAT! / NASA SRTM terrain data and analyze overlap between nodes (levels 1–5).",
        imgArr: [`${meshDocsImg}/coverage-logs.png`],
      },
      {
        title: "Microfrontend & main UI",
        description:
          "Vue.js + Leaflet coverage viewer on port 3001; integrated with the .NET Blazor Meshtastic MQTT Explorer.",
        imgArr: [`${meshDocsImg}/image.png`, `${meshDocsImg}/app-after.png`],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Complete monitoring solution for Meshtastic networks with automatic coverage calculation and redundancy analysis. Extends the Meshtastic MQTT Explorer with two microservices — all services run in Docker with zero modifications to the existing codebase.",
        "Full architecture documentation and screenshots live in the companion meshnetwork-docs repository.",
      ],
      bullets: [
        "Coverage Service: SPLAT! + SRTM terrain data, GeoJSON polygons per node, ~15s per node, terrain cache ~50 MB/region.",
        "Redundancy Service: overlap detection, scoring levels 1–5, color-coded visualization, cluster identification.",
        "Vue.js + Leaflet microfrontend (port 3001); main Blazor map on port 80; Recorder API on port 81.",
        "Stack: Python, PostgreSQL, Mosquitto MQTT, Docker Compose, .NET 9 Blazor — images on Docker Hub.",
        "Performance: API < 100 ms, redundancy calc < 2 s, coverage daemon ~200 MB RAM.",
      ],
    },
  },
  {
    id: "http-server",
    companyName: "HTTP Server with Class Loader Isolation (Java)",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Custom Java HTTP server from scratch — static files, dynamic Ricmlet servlets, sessions, and per-application URLClassLoader isolation.",
    githubLink: "https://github.com/soufian-elouazzani/http-server",
    techStack: ["Java", "Linux", "Git"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "https://raw.githubusercontent.com/soufian-elouazzani/http-server/refs/heads/main/docs/images/1_H9X3ox7LviQoxLBQcfx1CQ.png",
    pagesInfoArr: [
      {
        title: "Static & dynamic requests",
        description:
          "TCP socket server parses HTTP, serves files from a document root, and dispatches dynamic Ricmlets loaded from isolated application JARs.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "HTTP server that handles static and dynamic pages with isolation using class loaders — built in pure Java without servlet containers or Spring.",
        "Each deployed application gets its own URLClassLoader over a JAR file, so Ricmlet implementations are loaded in isolation while sharing the same server process.",
      ],
      bullets: [
        "Static resources served from a configurable folder (HTML, images, etc.).",
        "Dynamic Ricmlets (HttpRicmlet interface) instantiated per application via reflection + URLClassLoader.",
        "HTTP session management with UUID session IDs and configurable timeout (5 min).",
        "Worker threads handle concurrent connections; request routing distinguishes static vs Ricmlet URLs.",
        "Example Ricmlets: counters, cookies, session-scoped state — demonstrates servlet-like patterns at low level.",
      ],
    },
  },
  {
    id: "formal-while-language",
    companyName: "WHILE Language — OCaml & Rocq Proofs",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Formal methods framework: WHILEb/WHILEb-- parsers and interpreters in OCaml, natural semantics, and machine-checked proofs in Rocq.",
    githubLink: "https://github.com/soufian-elouazzani/formal-while-language",
    techStack: ["Python", "Java", "Linux", "Git"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "https://raw.githubusercontent.com/soufian-elouazzani/formal-while-language/refs/heads/main/docs/images/programmation-fonctionnelle.jpg",
    pagesInfoArr: [
      {
        title: "Syntax, semantics & proofs",
        description:
          "Three-part project: theoretical grammars, OCaml analyzers/executors, and Coq proofs for SN and SOS semantics.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Complete framework for implementing and formally verifying a simple programming language. Includes OCaml parser/interpreter and Coq proofs for big-step and small-step semantics.",
        "Project split into 1_Préliminaires (grammars & natural semantics rules), 2_PartiePrincipale (WHILEb-- and WHILEb implementations), and 3_ExtensionsOptionnelles (advanced parsing, lazy lists, memory, step-by-step mode).",
      ],
      bullets: [
        "OCaml: WHILEb--.ml, WHILEb.ml, WHILEb_With_Spaces.ml — syntactic analysis + natural semantics execution.",
        "Rocq (Coq): TD6et7.v — proofs for Part 2.3 (SN) and Part 3.1 (SOS); French answers in 3-1-ANSWERS.txt.",
        "Extensions: advanced lexical/syntax analysis, lazy lists, memory management, config translation, interactive step debugger.",
        "Demonstrates rigorous approach to language design — relevant foundation for reliable systems and tooling.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
