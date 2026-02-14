export interface PositionItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const positionsData: PositionItem[] = [
  {
    id: "1",
    title: "Member / Lead",
    organization: "Tech Club / Community",
    period: "2023 – Present",
    description:
      "Contributing to technical initiatives, organizing events, and mentoring peers.",
  },
  {
    id: "2",
    title: "Volunteer / Coordinator",
    organization: "Campus / External Initiative",
    period: "2022 – 2023",
    description:
      "Coordinated activities and supported team operations.",
  },
];
