// ─────────────────────────────────────────────────────────────
// All portfolio content lives here.
// To change info / add a project → edit this file only.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Tran Thi Mai An",
  greeting: "Hi, I'm Mai An",
  role: "UI/UX Designer",
  tagline:
    "A young UI/UX Designer crafting simple, useful, and thoughtful digital experiences.",
  heroHeadline:
    "I design simple, useful, and thoughtful digital experiences.",
  heroSub:
    "A UI/UX Designer with experience across 30+ Zalo Mini Apps in many industries — from user research to design systems.",
  intro:
    "I'm a UI/UX Designer with experience designing 30+ Zalo Mini Apps and hundreds of product screens across many industries. I enjoy the whole process — from user research, wireframing, and prototyping to building design systems that keep products consistent and ship faster.",
  intro2:
    "I care about how design, technology, and business come together to create digital products that are genuinely useful for people.",
  quote:
    "“Good design is simple, purposeful, and always focused on real user needs.”",
  location: "District 4, Ho Chi Minh City, Vietnam",
  email: "tranthimaian.p@gmail.com",
  phone: "0396598720",
  behance: {
    label: "@anan326",
    url: "https://www.behance.net/anan326",
  },
  cvUrl: "#", // TODO: replace with CV PDF link (Drive/Figma)
};

export const brands = [
  "FPT Shop",
  "Panasonic",
  "Masan",
  "Ajinomoto",
  "Hanotour",
  "KDI Education",
  "Nam Du Invest",
];

export const stats = [
  { value: "30+", label: "Zalo Mini Apps" },
  { value: "100+", label: "Screens designed" },
  { value: "5+", label: "Product domains" },
  { value: "3.43", label: "GPA / 4.0" },
];

export const badges = [
  { icon: "🎓", label: "E-commerce — IUH" },
  { icon: "⭐", label: "GPA 3.43 / 4.0" },
];

export const education = [
  {
    school: "MindX Technology School",
    program: "UX/UI Design",
    place: "Ho Chi Minh City",
    period: "2024 – 2025",
  },
  {
    school: "Industrial University of Ho Chi Minh City (IUH)",
    program: "E-commerce — GPA 3.43/4.0",
    place: "Ho Chi Minh City",
    period: "2022 – 2026",
  },
];

export const experience = [
  {
    company: "DIGIBIRD CO.",
    title: "UI/UX Designer",
    place: "Ho Chi Minh City",
    period: "2025 – Present",
    type: "Full-time",
    summary:
      "At DIGIBIRD, I design UI/UX for Zalo Mini App products and the AIMINI platform across many industries — from user research to building design systems.",
    points: [
      "Designed UI/UX for 30+ Zalo Mini Apps: user research, wireframing, and prototyping to optimize the overall experience.",
      "Built 100+ screens per mobile project and designed interactions that improved product usability.",
      "Developed UI components for the AIMINI platform, streamlining the deployment and operation of Zalo Mini Apps.",
      "Created 30+ Mini App templates across 5+ industries (retail, education, services, travel, real estate), shortening time to market.",
      "Collaborated closely with Product Managers, Business Analysts, and Developers throughout the product lifecycle.",
      "Helped build and apply Design Systems, Components, and Auto Layout to speed up the design workflow.",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  role: string;
  tools: string[];
  from: string; // gradient start
  to: string; // gradient end
  tint: string; // pastel card background
  image?: string; // real image (if any) — in /public
};

export const featuredProjects: Project[] = [
  {
    name: "Aimini Platform",
    category: "Product Design",
    description:
      "A Mini App sales management system with a drag-and-drop website builder, helping businesses create and run Mini Apps quickly.",
    role: "UI/UX Designer",
    tools: ["Figma", "Design System"],
    from: "#394b38",
    to: "#5c7052",
    tint: "#f7d6c4",
  },
  {
    name: "GENFIN-X",
    category: "Fintech",
    description:
      "Nam Du Invest's mobile app for financial investment education, focused on clarity and trust.",
    role: "UI/UX Designer",
    tools: ["Figma", "UX Research"],
    from: "#6e7f5c",
    to: "#94a67c",
    tint: "#d3e8db",
  },
  {
    name: "Zalo Retail Mini Apps",
    category: "E-commerce",
    description:
      "Ajinomoto Shop, FPT Shop, Nam&Co, Co Shop — joined client meetings to gather requirements and present design proposals.",
    role: "UI/UX Designer",
    tools: ["Figma", "Client-facing"],
    from: "#f0af44",
    to: "#e4c07a",
    tint: "#f4ecb0",
  },
  {
    name: "The Adora & Hanotour",
    category: "Rental & Booking",
    description:
      "The Adora mobile app (event booking) and Hanotour Mini App (travel reservations) with smooth booking flows.",
    role: "UI/UX Designer",
    tools: ["Figma", "Prototyping"],
    from: "#c99a5b",
    to: "#e4c08a",
    tint: "#dcd6f1",
  },
  {
    name: "Loyalty Mini Apps",
    category: "Loyalty",
    description:
      "Bia Masan (Masan Group), My Pandora, Panasonic — loyalty systems to engage and retain customers.",
    role: "UI/UX Designer",
    tools: ["Figma", "UI Design"],
    from: "#4a5a45",
    to: "#7a8c6e",
    tint: "#d2e0f7",
  },
  {
    name: "STEM TOWN",
    category: "Education & Service",
    description:
      "Zalo Mini App STEM TOWN, STEM TOWN Staff, and an on-platform customer data management system (KDI Education).",
    role: "UI/UX Designer",
    tools: ["Figma", "Data Management"],
    from: "#d9b26a",
    to: "#f0af44",
    tint: "#f6d4e4",
  },
];

export const personalProjects: Project[] = [
  {
    name: "Pionail",
    category: "Beauty Booking",
    description:
      "A nail appointment booking app connecting customers, technicians, and salon owners: scheduling, service management, and operations on one platform.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    from: "#c99a5b",
    to: "#f0af44",
    tint: "#f6d4e4",
  },
  {
    name: "CoJobs",
    category: "Freelance Marketplace",
    description:
      "A platform connecting freelancers with businesses: short-term job search, applications, profile management, and progress tracking.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    from: "#5c7052",
    to: "#94a67c",
    tint: "#d2e0f7",
  },
  {
    name: "Coze Porph Record",
    category: "Music Streaming",
    description:
      "An online music streaming app focused on content discovery, playback, playlist management, and a personal library.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    from: "#394b38",
    to: "#6e7f5c",
    tint: "#dcd6f1",
  },
];

export const skills = [
  { key: "ui", name: "UI Design", desc: "Designing clear, intuitive interfaces." },
  { key: "research", name: "UX Research", desc: "Understanding users through research." },
  { key: "wireframe", name: "Wireframing", desc: "Sketching structure & screen flows." },
  { key: "prototype", name: "Prototyping", desc: "Interactive prototypes for fast testing." },
  { key: "system", name: "Design System", desc: "Building consistent component systems." },
];

export const tools = [
  { key: "figma", name: "Figma", desc: "Primary design & collaboration tool." },
  { key: "canva", name: "Canva", desc: "Quick, tidy layouts." },
  { key: "illustrator", name: "Adobe Illustrator", desc: "Vector graphics & illustration." },
  { key: "notion", name: "Notion", desc: "Notes & task management." },
  { key: "office", name: "Microsoft Office", desc: "Documents & presentations." },
  { key: "htmlcss", name: "HTML & CSS", desc: "Basic web fundamentals." },
];

export const languages = [
  { name: "Vietnamese", level: "Native" },
  { name: "English", level: "Conversational" },
];

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
