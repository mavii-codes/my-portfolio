export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: "Monitor" | "Server" | "Database" | "Wrench";
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Crafting responsive, accessible, and interactive user interfaces.",
    iconName: "Monitor",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Building structured server logic and reliable API services.",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    id: "database",
    title: "Database",
    description: "Modeling relational schemas and type-safe data queries.",
    iconName: "Database",
    skills: ["MySQL", "PostgreSQL", "Prisma"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Version control, API testing, and everyday development workflow.",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Thunder Client"],
  },
];

