export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  logo?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    role: "Research Intern",
    organization: "National Remote Sensing Centre (NRSC), ISRO",
    period: "Dec 2025 – Present",
    logo: "/logos/isro.png",
    description:
      "Working on deep learning models for geospatial and satellite imagery analysis.",
    highlights: [
      "Conducting technical feasibility studies on deep learning models for satellite imagery",
      "Collaborating with research teams to document technical findings",
      "Performing literature survey on deep learning models for geospatial data",
      "Documenting research findings and presenting technical insights to support project objectives",
    ],
  },
];
