import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Soufian Elouazzani | DevOps Engineer",
    short_name: "Soufian Elouazzani",
    description:
      "Soufian Elouazzani - DevOps Engineer working at the intersection of automated CI/CD pipelines, Infrastructure as Code, scalable systems, and cloud architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "devops",
      "ci-cd",
      "cloud infrastructure",
      "automation",
      "software engineering",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
