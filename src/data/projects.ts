import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Equityze – Stock Trading Platform",
    description:
      "Developed a full-stack stock trading platform with a user interface and dashboard for managing trading workflows. Built responsive frontend using React and implemented RESTful backend services using Node.js and Express with MongoDB integration.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript",
    ],
    githubUrl: "https://github.com/aditiiiii1/equityze-frontend",
  },
  {
    id: "2",
    title: "Financial Decoder",
    description:
      "Built a financial analytics pipeline using Python and Streamlit to process financial datasets and generate actionable insights through an interactive dashboard.",
    techStack: ["Python", "Streamlit", "Data Analysis"],
    githubUrl: "https://github.com/aditiiiii1/financial-decoder",
  },
  {
    id: "3",
    title: "Blood Group Prediction using Fingerprint Images",
    description:
      "Developed a deep learning model using ResNet-18 to predict blood group from fingerprint images. Applied CNN-based feature extraction, preprocessing, and model evaluation techniques.",
    techStack: [
      "Python",
      "PyTorch",
      "ResNet-18",
      "Deep Learning",
      "Computer Vision",
    ],
    githubUrl:
      "https://github.com/aditiiiii1/fingerprint-blood-group-prediction",
  },
  {
    id: "4",
    title: "Proactive Churn Prediction and Retention (ServiceNow)",
    description:
      "Developed a churn prediction system using ServiceNow with structured data modeling, custom tables, and dashboards to analyze user behavior and retention trends.",
    techStack: ["ServiceNow", "Data Modeling", "Dashboards"],
  },
  {
    id: "5",
    title: "AR/VR Unity Hackathon Project",
    description:
      "Built an AR/VR prototype using Unity focusing on immersive interaction and real-time 3D rendering during a hackathon.",
    techStack: ["Unity", "AR/VR", "C#"],
  },
  {
    id: "6",
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern portfolio using Next.js, TypeScript, and Tailwind CSS with smooth animations and responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/aditiiiii1/aditi-portfolio",
  },
];
