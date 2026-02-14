import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Full-Stack Task Manager",
    description:
      "A MERN stack task management app with user authentication, CRUD operations, and real-time updates. Built with React for the frontend and Node.js with Express and MongoDB on the backend.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "REST API with Java Spring",
    description:
      "RESTful API for a sample e-commerce module. Implements secure authentication, role-based access, and clean architecture using Spring Boot and SQL.",
    techStack: ["Java", "Spring Boot", "SQL", "JPA"],
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "This responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a modern UI.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
];
