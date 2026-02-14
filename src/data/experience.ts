export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    role: "Intern",
    organization: "National Remote Sensing Centre, ISRO",
    period: "Dec 2025 – Present",
    description:
      "Building full-stack applications and contributing to product development.",
    highlights: [
      "Developed features using React and Node.js",
      "Collaborated with cross-functional teams",
      "Maintained code quality and best practices",
    ],
  },
  
];
