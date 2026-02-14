"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import TypingAnimation from "@/components/TypingAnimation";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { positionsData } from "@/data/positions";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setFormStatus("sent");
  }

  return (
    <>
      {/* Home / Hero */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden scroll-mt-0"
      >
        <div className="absolute inset-0 hero-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-950/80 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-900/15 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        <motion.div
          className="relative text-center max-w-2xl mx-auto z-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="text-accent font-medium text-sm uppercase tracking-widest mb-4"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-50 mb-4"
          >
            Aditi
          </motion.h1>
          <motion.div variants={item}>
            <TypingAnimation />
          </motion.div>
          <motion.p
            variants={item}
            className="text-surface-400 text-lg leading-relaxed mb-10"
          >
            I build clean, efficient software and love turning ideas into
            reality. Passionate about full-stack development and creating
            impactful solutions.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 cursor-pointer"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-surface-500 hover:text-surface-300 transition-colors"
            aria-label="Scroll to about"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">
            About Me
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl space-y-4 text-surface-300 leading-relaxed">
            <p>
              I&apos;m a Computer Science student with a strong passion for
              software development. I enjoy building applications from the
              ground up and solving real-world problems with code.
            </p>
            <p>
              My technical focus includes{" "}
              <strong className="text-surface-50">Java</strong> for robust
              backend systems, <strong className="text-surface-50">SQL</strong>{" "}
              for data modeling and querying, and the{" "}
              <strong className="text-surface-50">MERN stack</strong> (MongoDB,
              Express, React, Node.js) for full-stack web development. I&apos;m
              always exploring new technologies and best practices to write
              clean, maintainable code.
            </p>
            <p>
              When I&apos;m not coding, I like to contribute to open source,
              learn new frameworks, and work on side projects that challenge
              my skills.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Skills
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-surface-400 mb-12 max-w-2xl">
            Technologies and tools I work with to build software.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <ScrollReveal
                key={category.name}
                direction="up"
                delay={index * 0.08}
              >
                <motion.div
                  className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <h3 className="text-lg font-semibold text-accent-light mb-4">
                    {category.name}
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    {category.items.map((skill) => (
                      <motion.li
                        key={skill}
                        className="px-4 py-2 rounded-lg bg-surface-800 text-surface-200 border border-surface-700 hover:border-accent/50 hover:text-accent-light transition-colors duration-200 cursor-default"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Projects
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-surface-400 mb-12 max-w-2xl">
            A selection of projects I&apos;ve worked on. Each one taught me
            something new and pushed my skills further.
          </p>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} index={index} />
              </StaggerItem>
            ))}
        </StaggerContainer>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Experience
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-surface-400 mb-12 max-w-2xl">
            Professional experience and contributions.
          </p>
        </ScrollReveal>
        <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <ScrollReveal key={exp.id} direction="up" delay={index * 0.08}>
                <motion.article
                  className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-surface-50">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-accent-light font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-surface-400 text-sm font-medium mb-2">
                    {exp.organization}
                  </p>
                  <p className="text-surface-300 text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-surface-400 text-sm space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              </ScrollReveal>
            ))}
        </div>
      </Section>

      {/* Positions of Responsibility */}
      <Section id="positions">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Positions of Responsibility
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-surface-400 mb-12 max-w-2xl">
            Leadership and organizational roles.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
            {positionsData.map((pos, index) => (
              <ScrollReveal key={pos.id} direction="up" delay={index * 0.08}>
                <motion.article
                  className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-surface-50">
                      {pos.title}
                    </h3>
                    <span className="text-sm text-accent-light font-medium whitespace-nowrap">
                      {pos.period}
                    </span>
                  </div>
                  <p className="text-surface-400 text-sm font-medium mb-2">
                    {pos.organization}
                  </p>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    {pos.description}
                  </p>
                </motion.article>
              </ScrollReveal>
            ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-24">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
            Get in Touch
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-surface-400 mb-12 max-w-2xl">
            Have a question or want to work together? Send me a message or
            connect on LinkedIn.
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12">
            <ScrollReveal direction="up" delay={0.15} className="flex-1 max-w-xl">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-surface-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-surface-50 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-surface-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-surface-50 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-surface-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-surface-50 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  disabled={formStatus === "sending" || formStatus === "sent"}
                >
                  {formStatus === "sending"
                    ? "Sending..."
                    : formStatus === "sent"
                      ? "Message Sent!"
                      : "Send Message"}
                </Button>
                {formStatus === "sent" && (
                  <motion.p
                    className="text-sm text-green-400 mt-2"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Thanks! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {formStatus === "error" && (
                  <p className="text-sm text-red-400 mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} className="lg:w-80">
              <motion.div
                className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <h3 className="text-lg font-semibold text-surface-50 mb-4">
                  Connect
                </h3>
                <Button
                  href="https://www.linkedin.com/in/your-profile"
                  variant="outline"
                  external
                  className="w-full"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </motion.div>
            </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
