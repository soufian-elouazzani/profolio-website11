export type ServiceCategory =
  | "simple-websites"
  | "complex-websites"
  | "digital-solutions";

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
    id: "simple-websites",
    title: "Simple Websites",
    description:
      "Clean, mobile-first sites for local businesses — ready to showcase your services and turn visitors into customers.",
  },
  {
    id: "complex-websites",
    title: "Complex Websites",
    description:
      "Full-featured web apps with more engagement: carts, accounts, payments, and workflows tailored to your business.",
  },
  {
    id: "digital-solutions",
    title: "Digital Solutions",
    description:
      "AI-powered tools that automate customer interactions and free up your time to focus on the business.",
  },
];

export const services: ServiceItem[] = [
  {
    id: "barber-demo",
    category: "simple-websites",
    title: "Barber Shop Website",
    description:
      "A modern, booking-ready site for salons and barbershops. Highlights services, gallery, pricing, and contact — optimized for mobile so clients can reach you on the go.",
    demoUrl: "https://barber.soufian.engineer",
    status: "live",
    tags: ["Barber", "Salon", "Booking", "Mobile-first"],
  },
  {
    id: "resto-demo",
    category: "simple-websites",
    title: "Restaurant Website",
    description:
      "A restaurant site built to convert visitors into diners. Menu, opening hours, location, and a clear reservations CTA — everything a guest needs before they walk in.",
    demoUrl: "https://resto.soufian.engineer",
    status: "live",
    tags: ["Restaurant", "Menu", "Reservations"],
  },
  {
    id: "salone-demo",
    category: "simple-websites",
    title: "Salone Website Demo",
    description:
      "A clean salon website focused on trust and conversion: services, pricing, gallery, and a clear booking path designed for mobile users.",
    demoUrl: "https://salone.soufian.engineer/",
    status: "live",
    tags: ["Salon", "Booking", "Showcase", "Mobile-first"],
  },
  {
    id: "fit-demo",
    category: "simple-websites",
    title: "Fit Website Demo",
    description:
      "A modern fitness website for coaches or gyms, with clear programs, pricing, and call-to-action sections that help convert visitors into members.",
    demoUrl: "https://fit.soufian.engineer/",
    status: "live",
    tags: ["Fitness", "Gym", "Coaching"],
  },
  {
    id: "terapia-demo",
    category: "simple-websites",
    title: "Terapia Website Demo",
    description:
      "A calm and professional therapy website with service presentation, practitioner profile, and contact-focused flow for first-time visitors.",
    demoUrl: "https://terapia.soufian.engineer/",
    status: "live",
    tags: ["Therapy", "Healthcare", "Consultation"],
  },
  {
    id: "shop-demo",
    category: "complex-websites",
    title: "Online Shop",
    description:
      "A full e-commerce experience with product catalog, cart, and checkout flow. Designed for shops that need more than a brochure site — inventory-minded UX and room to grow.",
    demoUrl: "https://shop.soufian.engineer/",
    status: "live",
    tags: ["E-commerce", "Shop", "Payments"],
  },
  {
    id: "ai-receptionist",
    category: "digital-solutions",
    title: "AI Receptionist",
    description:
      "An automated receptionist for small businesses — answers common questions, routes inquiries, and books appointments so you never miss a lead when you are busy with clients.",
    status: "coming-soon",
    tags: ["AI", "Automation", "Appointments"],
  },
];

export const featuredServices = services;

export function getServicesByCategory(category: ServiceCategory): ServiceItem[] {
  return services.filter((s) => s.category === category);
}
