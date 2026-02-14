export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}
