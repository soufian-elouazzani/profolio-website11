export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "meshnetwork",
    contibutionDescription:
      "Meshtastic monitoring suite with SPLAT! coverage calculation, redundancy analysis, and Docker microservices.",
    repoOwner: "soufian-elouazzani",
    link: "https://github.com/soufian-elouazzani/meshnetwork",
  },
  {
    repo: "meshnetwork-docs",
    contibutionDescription:
      "Architecture documentation, diagrams, and screenshots for the Meshtastic network monitoring project.",
    repoOwner: "soufian-elouazzani",
    link: "https://github.com/soufian-elouazzani/meshnetwork-docs",
  },
  {
    repo: "formal-while-language",
    contibutionDescription:
      "OCaml parsers and executors for WHILEb/WHILEb-- with Rocq proofs for natural and operational semantics.",
    repoOwner: "soufian-elouazzani",
    link: "https://github.com/soufian-elouazzani/formal-while-language",
  },
  {
    repo: "http-server",
    contibutionDescription:
      "Custom HTTP server implemented in Java — request parsing, routing, and responses without frameworks.",
    repoOwner: "soufian-elouazzani",
    link: "https://github.com/soufian-elouazzani/http-server",
  },
  {
    repo: "java-prod-cons",
    contibutionDescription:
      "Producer–consumer concurrency pattern in Java with thread-safe buffers and synchronized workers.",
    repoOwner: "soufian-elouazzani",
    link: "https://github.com/soufian-elouazzani/java-prod-cons",
  },
  {
    repo: "AWS Academy Cloud Foundations",
    contibutionDescription:
      "Certification covering core AWS services, cloud architecture, and security fundamentals.",
    repoOwner: "Certification",
    link: "https://github.com/soufian-elouazzani",
  },
  {
    repo: "Arduino Fundamentals",
    contibutionDescription:
      "Electronics certification — circuits, sensors, and embedded fundamentals with Arduino.",
    repoOwner: "Certification",
    link: "https://github.com/soufian-elouazzani",
  },
  {
    repo: "National Web Development Competition",
    contibutionDescription: "2nd Place — national web development competition.",
    repoOwner: "Competition",
    link: "https://github.com/soufian-elouazzani",
  },
  {
    repo: "Orange Digital Center CP",
    contibutionDescription: "4th Place — Orange Digital Center competitive programming.",
    repoOwner: "Competition",
    link: "https://github.com/soufian-elouazzani",
  },
  {
    repo: "Morocco Blockchain Days",
    contibutionDescription:
      "Organizing Committee — Morocco Blockchain Days (INPT 2025).",
    repoOwner: "Leadership",
    link: "https://github.com/soufian-elouazzani",
  },
  {
    repo: "Tangier Port Startup Support",
    contibutionDescription:
      "1-month startup support program at Tangier Port.",
    repoOwner: "Leadership",
    link: "https://github.com/soufian-elouazzani",
  },
  {
    repo: "National Youth Ministry Program",
    contibutionDescription:
      "21-day national program — Volunteering Training Certification.",
    repoOwner: "Volunteering",
    link: "https://github.com/soufian-elouazzani",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
