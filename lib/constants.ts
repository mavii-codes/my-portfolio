export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  helperText: string;
}

export interface InterestItem {
  title: string;
  description: string;
  iconName: "Globe" | "Code2" | "Layout" | "Layers";
}

export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  isCurrent?: boolean;
}

export const SITE_CONFIG = {
  name: "Marvin Barro",
  initials: "MB",
  role: "BSIT Student • Developer",
  title: "Marvin Barro | BSIT Student & Web Developer",
  description:
    "Personal portfolio of Marvin Barro — an aspiring developer and BSIT student building modern, practical, and user-friendly web experiences.",
  email: "barromrvn@gmail.com",
  socials: {
    github: "https://github.com/mavii-codes",
    linkedin: "https://www.linkedin.com/in/barro-marvin",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=barromrvn@gmail.com",
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  badge: "BSIT Student • Developer",
  greeting: "Hi, I'm",
  name: "Marvin Barro",
  backgroundText: "MARVIN BARRO",
  description: "An aspiring developer who turns ideas into real web experiences.",
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "#contact",
  },
  // Replace /images/marvin-profile.jpg in /public/images/ with another portrait anytime
  portraitSrc: "/images/marvin-profile.jpg",
  portraitAlt: "Portrait of Marvin Barro",
  statusLabel: "Open to Internships & Collaborations",
} as const;

export const ABOUT_CONTENT = {
  title: "About Me",
  eyebrow: "Introduction",
  headline:
    "Focused on building clean interfaces and practical web systems that solve real everyday workflows.",
  paragraphs: [
    "I'm Marvin Barro, a Bachelor of Science in Information Technology (BSIT) student and aspiring full-stack web developer passionate about crafting modern, reliable software.",
    "My work sits at the intersection of clean UI/UX and structured backend logic—turning complex requirements like ordering workflows, inventory tracking, and data management into intuitive web experiences.",
  ],
  interests: [
    {
      title: "Web Development",
      description:
        "Building responsive, accessible applications with React, Next.js, TypeScript, and modern CSS.",
      iconName: "Globe",
    },
    {
      title: "Software Development",
      description:
        "Writing maintainable, type-safe application logic backed by REST APIs and relational databases.",
      iconName: "Code2",
    },
    {
      title: "UI/UX Focus",
      description:
        "Designing calm, readable interfaces with clear hierarchy, smooth interactions, and thoughtful spacing.",
      iconName: "Layout",
    },
    {
      title: "Building Practical Systems",
      description:
        "Creating real-world tools that streamline operations, reduce friction, and support end users.",
      iconName: "Layers",
    },
  ] satisfies InterestItem[],
  // Easy-to-edit statistics
  stats: [
    {
      label: "Projects Completed",
      value: "3",
      helperText: "Academic & full-stack systems",
    },
    {
      label: "Technologies",
      value: "17",
      helperText: "Frontend, backend & tooling",
    },
    {
      label: "Years Learning",
      value: "3",
      helperText: "Dedicated BSIT journey",
    },
  ] satisfies StatItem[],
} as const;

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    year: "2024",
    title: "BSIT / Web Development Learning",
    subtitle: "Core Foundations & Programming",
    description:
      "Built strong fundamentals in software development, structured programming, relational database concepts, and semantic web interfaces with HTML, CSS, and JavaScript.",
    highlights: ["HTML, CSS & JavaScript", "Relational Databases", "IT Fundamentals"],
  },
  {
    year: "2025",
    title: "Building Web Development Projects",
    subtitle: "Modern Full-Stack Ecosystem",
    description:
      "Expanded into full-stack web engineering using TypeScript, React, Next.js, Node.js, and Express.js—focusing on reusable component architecture, REST APIs, and responsive UI design.",
    highlights: ["React & Next.js", "TypeScript", "Node.js & Express APIs"],
  },
  {
    year: "2026",
    title: "Capstone Development",
    subtitle: "End-to-End Practical Systems",
    description:
      "Designing and engineering complete operational web systems such as Eat n' RepEat, integrating Prisma ORM, MySQL, role-based workflows, and polished user experiences.",
    highlights: ["System Architecture", "Prisma & MySQL", "Full-Stack Capstone"],
    isCurrent: true,
  },
];

export const CONTACT_CONTENT = {
  eyebrow: "Get In Touch",
  title: "Let's Work Together",
  description:
    "Have a project idea, internship opportunity, or collaboration in mind? Feel free to reach out—I'd be glad to connect and discuss how I can contribute.",
} as const;

