export interface PositionItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  logo?: string;
}

export const positionsData: PositionItem[] = [
  {
    id: "1",
    title: "Membership Development Officer",
    organization: "IEEE - VBIT SB",
    period: "2024 – 2025",
    logo: "/logos/ieee.png",
    description:
      "Contributed to technical initiatives and supported student engagement within the IEEE student chapter.",
    highlights: [
     
      "Contributed to technical initiatives and student engagement programs",
      "Supported membership growth through outreach and community engagement",
    ],
  },
];
