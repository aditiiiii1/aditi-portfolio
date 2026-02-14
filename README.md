# Aditi's Portfolio

A modern, professional developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Pages:** Home, About, Projects, Skills, Contact
- **Design:** Dark mode by default, responsive, smooth hover effects
- **Tech:** App Router, TypeScript, Tailwind CSS, reusable components

## Getting Started

1. **Install dependencies**

   ```bash
   cd portfolio && npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
