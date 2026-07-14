export type ServiceCategory =
  | "websites"
  | "ecommerce"
  | "business-software"
  | "ai-solutions"
  | "automation-devops";

export type ServiceStatus = "live" | "coming-soon";

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  demoUrl?: string;
  status: ServiceStatus;
  tags: string[];
}

export interface ServiceCategoryConfig {
  id: ServiceCategory;
  title: string;
  description: string;
}

export const serviceCategories: ServiceCategoryConfig[] = [
  {
    id: "websites",
    title: "Websites",
    description:
      "Business websites, landing pages, and portfolio sites built to look sharp, load fast, and convert visitors into customers.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "Shopify integration or custom e-commerce platforms with cart, checkout, and growth-ready product flows.",
  },
  {
    id: "business-software",
    title: "Business Software",
    description:
      "Booking systems, dashboards, and internal tools that help your business run smoothly every day.",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "AI receptionist, customer support, knowledge assistant, and email assistant solutions for modern businesses.",
  },
  {
    id: "automation-devops",
    title: "Automation, Cloud & DevOps",
    description:
      "Email, appointment, invoice, lead, reporting, and workflow automation, plus hosting, Docker, CI pipelines, and maintenance.",
  },
];

export const services: ServiceItem[] = [
  {
    id: "business-website",
    category: "websites",
    title: "Business Website",
    description:
      "A clean, mobile-first website for local businesses that need a professional online presence and a clear path to contact or booking.",
    status: "coming-soon",
    tags: ["Business", "Mobile-first", "Lead generation"],
  },
  {
    id: "landing-page",
    category: "websites",
    title: "Landing Page",
    description:
      "A focused single-page website for campaigns, launches, and offers that need a clear message and strong conversion flow.",
    status: "coming-soon",
    tags: ["Landing page", "Conversion", "Campaign"],
  },
  {
    id: "portfolio-website",
    category: "websites",
    title: "Portfolio Website",
    description:
      "A personal or studio portfolio that presents your work, services, and experience with a polished, memorable layout.",
    status: "coming-soon",
    tags: ["Portfolio", "Personal brand", "Showcase"],
  },
  {
    id: "barber-demo",
    category: "websites",
    title: "Barber Shop Website",
    description:
      "A modern, booking-ready site for salons and barbershops. Highlights services, gallery, pricing, and contact — optimized for mobile so clients can reach you on the go.",
    demoUrl: "https://barber.soufian.engineer",
    status: "live",
    tags: ["Barber", "Salon", "Booking", "Mobile-first"],
  },
  {
    id: "resto-demo",
    category: "websites",
    title: "Restaurant Website",
    description:
      "A restaurant site built to convert visitors into diners. Menu, opening hours, location, and a clear reservations CTA — everything a guest needs before they walk in.",
    demoUrl: "https://resto.soufian.engineer",
    status: "live",
    tags: ["Restaurant", "Menu", "Reservations"],
  },
  {
    id: "salone-demo",
    category: "websites",
    title: "Salone Website Demo",
    description:
      "A clean salon website focused on trust and conversion: services, pricing, gallery, and a clear booking path designed for mobile users.",
    demoUrl: "https://salone.soufian.engineer/",
    status: "live",
    tags: ["Salon", "Booking", "Showcase", "Mobile-first"],
  },
  {
    id: "fit-demo",
    category: "websites",
    title: "Fit Website Demo",
    description:
      "A modern fitness website for coaches or gyms, with clear programs, pricing, and call-to-action sections that help convert visitors into members.",
    demoUrl: "https://fit.soufian.engineer/",
    status: "live",
    tags: ["Fitness", "Gym", "Coaching"],
  },
  {
    id: "terapia-demo",
    category: "websites",
    title: "Terapia Website Demo",
    description:
      "A calm and professional therapy website with service presentation, practitioner profile, and contact-focused flow for first-time visitors.",
    demoUrl: "https://terapia.soufian.engineer/",
    status: "live",
    tags: ["Therapy", "Healthcare", "Consultation"],
  },
  {
    id: "shop-demo",
    category: "ecommerce",
    title: "Online Shop",
    description:
      "A full e-commerce experience with product catalog, cart, and checkout flow. Designed for shops that need more than a brochure site — inventory-minded UX and room to grow.",
    demoUrl: "https://shop.soufian.engineer/",
    status: "live",
    tags: ["E-commerce", "Shop", "Payments"],
  },
  {
    id: "shopify-integration",
    category: "ecommerce",
    title: "Shopify Integration",
    description:
      "Connect a Shopify storefront to your brand, content, and business workflows with a setup that feels tailored instead of generic.",
    status: "coming-soon",
    tags: ["Shopify", "Integration", "E-commerce"],
  },
  {
    id: "custom-ecommerce-platform",
    category: "ecommerce",
    title: "Custom E-commerce Platform",
    description:
      "A custom online selling platform for businesses that need more control over catalog, payments, customer experience, or internal workflows.",
    status: "coming-soon",
    tags: ["Custom platform", "Checkout", "Catalog"],
  },
  {
    id: "booking-systems",
    category: "business-software",
    title: "Booking Systems",
    description:
      "Appointment flows for salons, clinics, trainers, and service businesses that need reliable scheduling and reminders.",
    status: "coming-soon",
    tags: ["Booking", "Appointments", "Scheduling"],
  },
  {
    id: "business-dashboards",
    category: "business-software",
    title: "Business Dashboards",
    description:
      "Operational dashboards that give owners a clear view of sales, leads, appointments, and daily activity in one place.",
    status: "coming-soon",
    tags: ["Dashboard", "Metrics", "Operations"],
  },
  {
    id: "business-software",
    category: "business-software",
    title: "Business Software",
    description:
      "Custom tools built around the way your team actually works, instead of forcing your process into generic software.",
    status: "coming-soon",
    tags: ["Internal tools", "Workflow", "Operations"],
  },
  {
    id: "ai-receptionist",
    category: "ai-solutions",
    title: "AI Receptionist",
    description:
      "An automated receptionist that answers common questions, routes inquiries, and helps capture leads when you are busy.",
    status: "coming-soon",
    tags: ["AI", "Receptionist", "Automation"],
  },
  {
    id: "customer-support-assistant",
    category: "ai-solutions",
    title: "Customer Support Assistant",
    description:
      "An AI helper that handles common support questions and gives customers quick answers around the clock.",
    status: "coming-soon",
    tags: ["AI", "Support", "Customer service"],
  },
  {
    id: "knowledge-assistant",
    category: "ai-solutions",
    title: "Knowledge Assistant",
    description:
      "A business knowledge assistant that helps your team and customers find the right information faster.",
    status: "coming-soon",
    tags: ["AI", "Knowledge base", "Search"],
  },
  {
    id: "email-assistant",
    category: "ai-solutions",
    title: "Email Assistant",
    description:
      "An AI assistant for email triage, drafting, and follow-up so inbox work takes less time.",
    status: "coming-soon",
    tags: ["AI", "Email", "Productivity"],
  },
  {
    id: "email-automation",
    category: "automation-devops",
    title: "Email Automation",
    description:
      "Automated email flows for leads, follow-ups, and customer communication without manual repetition.",
    status: "coming-soon",
    tags: ["Automation", "Email", "Follow-up"],
  },
  {
    id: "appointment-automation",
    category: "automation-devops",
    title: "Appointment Automation",
    description:
      "Booking, reminders, and rescheduling flows that reduce no-shows and save admin time.",
    status: "coming-soon",
    tags: ["Automation", "Booking", "Reminders"],
  },
  {
    id: "invoice-automation",
    category: "automation-devops",
    title: "Invoice Automation",
    description:
      "Automated invoice creation and follow-up to keep billing organized and consistent.",
    status: "coming-soon",
    tags: ["Automation", "Invoices", "Billing"],
  },
  {
    id: "lead-management",
    category: "automation-devops",
    title: "Lead Management",
    description:
      "Capture, route, and track leads so new inquiries do not get lost between channels.",
    status: "coming-soon",
    tags: ["Leads", "CRM", "Automation"],
  },
  {
    id: "reporting-automation",
    category: "automation-devops",
    title: "Reporting Automation",
    description:
      "Scheduled reports and summaries that give you a clear view of business performance without manual work.",
    status: "coming-soon",
    tags: ["Reporting", "Automation", "Analytics"],
  },
  {
    id: "workflow-automation",
    category: "automation-devops",
    title: "Workflow Automation",
    description:
      "Process automation for repetitive business tasks so your team can focus on the work that matters.",
    status: "coming-soon",
    tags: ["Workflow", "Automation", "Efficiency"],
  },
  {
    id: "hosting-maintenance",
    category: "automation-devops",
    title: "Hosting & Maintenance",
    description:
      "Reliable hosting, updates, and ongoing care to keep your website or app stable after launch.",
    status: "coming-soon",
    tags: ["Hosting", "Maintenance", "Updates"],
  },
  {
    id: "docker-containers",
    category: "automation-devops",
    title: "Docker Containers",
    description:
      "Containerized deployment setups that make your application easier to run, ship, and maintain.",
    status: "coming-soon",
    tags: ["Docker", "Containers", "Deployment"],
  },
  {
    id: "ci-pipelines",
    category: "automation-devops",
    title: "CI Pipelines",
    description:
      "Continuous integration pipelines for automated build, test, and delivery workflows.",
    status: "coming-soon",
    tags: ["CI", "Pipelines", "Delivery"],
  },
  {
    id: "maintenance-updates",
    category: "automation-devops",
    title: "Maintenance & Updates",
    description:
      "Ongoing technical upkeep, fixes, and improvements so the solution stays healthy over time.",
    status: "coming-soon",
    tags: ["Maintenance", "Updates", "Support"],
  },
];

export const featuredServices = services;

export function getServicesByCategory(category: ServiceCategory): ServiceItem[] {
  return services.filter((s) => s.category === category);
}
