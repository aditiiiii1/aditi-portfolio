# Aditi's Portfolio

A modern, responsive portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.
It serves as a space to showcase my projects, skills, and learning journey.

Live Website : https://aditiiiii1.vercel.app/
It includes sections for About, Skills, Projects, Experience, Positions, and Contact.

## Features

- **Design:** Dark mode by default, responsive, smooth hover effects
- **Tech:** App Router, TypeScript, Tailwind CSS, reusable components

## Purpose

- **A platform to showcase my development work**
- **A record of my continuous learning journey**

## Getting Started

- **Clone the repository:**

git clone https://github.com/aditiiiii1/aditi_portfolio.git
cd aditi_portfolio

- **Install dependencies:**

npm install

- **Run development server:**

npm run dev

- **Open in browser:**

http://localhost:3000

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── skills/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/       # Reusable UI components
│   ├── Button.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── Section.tsx
├── data/             # Static data (projects, skills)
└── types/            # TypeScript types
```

## Customization

- **Projects:** Edit `src/data/projects.ts` to add or update projects and set real GitHub URLs.
- **Skills:** Edit `src/data/skills.ts` to update skill categories and items.
- **LinkedIn:** Update the LinkedIn button URL in `src/app/contact/page.tsx` (search for `linkedin.com`).

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
