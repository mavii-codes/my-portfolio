export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  previewUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  isPlaceholder?: boolean;
  highlights?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "eat-n-repeat",
    title: "Eat n' RepEat",
    category: "Full-Stack Web System",
    description:
      "A café ordering and management system designed to streamline customer ordering, staff operations, inventory, payments, and delivery management.",
    technologies: ["Next.js", "TypeScript", "Express.js", "MySQL", "Prisma"],
    image: "/images/eat-n-repeat-app.png",
    previewUrl: "eatnrepeat.online/customer",
    githubUrl: "https://github.com/mavii-codes/eat-n-repeat",
    // liveUrl: "https://eatnrepeat.online",
    featured: true,
    isPlaceholder: false,
    highlights: [
      "Unified customer digital menu & real-time order queue",
      "Staff operations dashboard with inventory & stock tracking",
      "Integrated payment verification & delivery status management",
    ],
  },
  {
    id: "akai-study-companion",
    title: "AkAI — Study Companion",
    category: "AI-Assisted Web Application",
    description:
      "An intelligent study companion web application built to help students stay organized, manage daily study schedules, receive reminders, and track academic goals with AI-assisted insights.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/images/akai-app.png",
    previewUrl: "akai-frontend-umber.vercel.app/home",
    githubUrl: "https://github.com/mavii-codes/akai-frontend",
    // liveUrl: "https://akai-frontend-umber.vercel.app",
    featured: true,
    isPlaceholder: false,
    highlights: [
      "Interactive study planner for scheduling daily academic tasks & goals",
      "Integrated AI Assistant and smart study insight notifications",
      "Clean, distraction-free dashboard built with responsive modern UI",
    ],
  },
  {
    id: "university-library-system",
    title: "University Library System",
    category: "Full-Stack Portal & Management System",
    description:
      "A comprehensive university library portal and circulation management system enabling students to browse the book catalog, submit borrowing requests, manage reservations, track loan due dates, and monitor fines and clearances.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: "/images/university-library-app.png",
    previewUrl: "educationuniversitysystems.vercel.app/student/dashboard",
    githubUrl: "https://github.com/mavii-codes/educationuniversity-system",
    // liveUrl: "https://educationuniversitysystems.vercel.app",
    featured: true,
    isPlaceholder: false,
    highlights: [
      "Student library portal with real-time catalog search & ISBN lookup",
      "End-to-end circulation tracking for active loans, requests & reservations",
      "Automated overdue book monitoring, fine calculation & clearance status",
    ],
  },
];

