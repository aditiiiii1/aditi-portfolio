"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import { resumeSkills } from "@/data/resume";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-950 to-surface-900/50 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <motion.header
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-block mb-8">
            <Logo size="lg" />
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-surface-50 tracking-tight">
            Resume
          </h1>
          <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.header>

        {/* Summary */}
        <ScrollReveal direction="up" delay={0}>
          <section className="mb-16 sm:mb-20">
            <h2 className="text-xl font-semibold text-accent-light mb-4 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-accent" />
              Professional Summary
            </h2>
            <p className="text-surface-300 leading-relaxed text-lg max-w-3xl">
              Software Developer with a strong foundation in{" "}
              <strong className="text-surface-50">Java</strong>,{" "}
              <strong className="text-surface-50">SQL</strong>, and the{" "}
              <strong className="text-surface-50">MERN stack</strong> (MongoDB,
              Express, React, Node.js). Skilled at building full-stack
              applications, designing clean APIs, and solving complex problems
              with maintainable code. Passionate about continuous learning and
              delivering impactful solutions.
            </p>
          </section>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal direction="up" delay={0.05}>
          <section className="mb-16 sm:mb-20">
            <h2 className="text-xl font-semibold text-accent-light mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-accent" />
              Skills
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(resumeSkills).map(([category, skills], catIndex) => (
                <ScrollReveal
                  key={category}
                  direction="up"
                  delay={0.05 + catIndex * 0.05}
                >
                  <motion.div
                    className="p-5 rounded-xl bg-surface-900/60 border border-surface-800 hover:border-surface-700 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-surface-800/80 text-surface-200 border border-surface-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Projects - Timeline */}
        <section className="mb-16 sm:mb-20">
          <ScrollReveal direction="up">
            <h2 className="text-xl font-semibold text-accent-light mb-8 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-accent" />
              Projects
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[11px] sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-surface-700 to-transparent" />
            <StaggerContainer className="space-y-8">
              {projects.map((project, index) => (
                <StaggerItem key={project.id}>
                  <motion.article
                    className="relative pl-10 sm:pl-12"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface-800 border-2 border-accent/60 flex items-center justify-center">
                      <span className="text-[10px] sm:text-xs font-bold text-accent-light">
                        {index + 1}
                      </span>
                    </div>
                    <div className="p-5 rounded-xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-colors">
                      <h3 className="text-lg font-semibold text-surface-50 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-surface-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-800 text-surface-300 border border-surface-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-accent-light hover:text-accent transition-colors"
                      >
                        View on GitHub
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Education */}
        <ScrollReveal direction="up">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-accent-light mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-accent" />
              Education
            </h2>
            <motion.div
              className="p-6 rounded-xl bg-surface-900/50 border border-surface-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={container}
            >
              <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold text-surface-50">
                  Bachelor of Technology in Computer Science and Business Systems
                </h3>
              </motion.div>
              <motion.p variants={item} className="text-surface-400 text-sm mt-1">
                Focus on software development, data structures, and business
                systems integration.
              </motion.p>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Back to home */}
        <motion.div
          className="mt-16 pt-8 border-t border-surface-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-surface-400 hover:text-accent-light transition-colors text-sm font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
