"use client";

import Link from "next/link";
import Image from "next/image";
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
  
    const form = e.currentTarget;
  
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://formspree.io/f/xwvnnkyg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        setFormStatus("sent");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
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
            reality.
            <br />
            Driven by curiosity and focused on building meaningful technology
            solutions.
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
       
<div className="max-w-2xl space-y-6 text-surface-300 leading-relaxed">
  <p>
    I’m a Computer Science and Business Systems student passionate about building technology that solves real-world problems and creates meaningful impact. I enjoy exploring diverse areas of computing, from developing applications and intelligent systems to working with enterprise platforms and modern software technologies. Through hands-on projects and technical experiences, I’ve developed a strong foundation and a deeper understanding of how technology, users, and business needs come together to create impactful products.
  </p>

  <p>
    I’m naturally curious, adaptable, and driven by continuous learning. I enjoy stepping into new environments, taking on unfamiliar challenges, and expanding my skill set across different domains. Whether it’s building projects, exploring emerging technologies, or contributing to technical initiatives, I’m motivated by growth and by the opportunity to create solutions that make a meaningful difference.
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

  <div className="space-y-8 max-w-3xl mx-auto">

    {experienceData.map((exp, index) => (
      <ScrollReveal key={exp.id} direction="up" delay={index * 0.08}>
        <motion.article
          className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-colors"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="flex items-start gap-4">

            {/* LOGO */}
            {exp.logo && (
              <Image
                src={exp.logo}
                alt={exp.organization}
                width={36}
                height={36}
                className="object-contain mt-1 flex-shrink-0"
              />
            )}

            {/* TEXT CONTENT */}
            <div className="flex-1">

              <div className="flex justify-between items-start mb-2">
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

              <p className="text-surface-300 text-sm leading-relaxed">
                {exp.description}
              </p>

              {exp.highlights && (
                <ul className="mt-3 space-y-1 text-sm text-surface-400 list-disc list-inside">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

            </div>

          </div>
        </motion.article>
      </ScrollReveal>
    ))}
  </div>
</Section>


{/* Positions of Responsibility */}
<Section id="positions">
  <ScrollReveal direction="up">
    <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
      Position of Responsibility
    </h2>
  </ScrollReveal>

  <ScrollReveal direction="up" delay={0.1}>
    <p className="text-surface-400 mb-12 max-w-2xl">
      Leadership and organizational roles.
    </p>
  </ScrollReveal>

  <div className="space-y-8 max-w-3xl mx-auto">



    {positionsData.map((pos, index) => (
      <ScrollReveal key={pos.id} direction="up" delay={index * 0.08}>

        <motion.article
          className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-colors"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >

<div className="flex items-start gap-4">

            {/* LOGO */}
            {pos.logo && (
              <Image
                src={pos.logo}
                alt={pos.organization}
                width={36}
                height={36}
                className="object-contain mt-1"
              />
            )}

            {/* CONTENT */}
            <div className="flex-1">

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

              {pos.highlights && (
                <ul className="mt-3 space-y-1 text-sm text-surface-400 list-disc list-inside">
                  {pos.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

            </div>

          </div>

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
      Have a question or want to work together? Send me a message or connect on LinkedIn.
    </p>
  </ScrollReveal>

  <div className="flex flex-col lg:flex-row gap-12">

    {/* CONTACT FORM */}
<ScrollReveal direction="up" delay={0.15} className="flex-1 max-w-xl">
<form onSubmit={handleContactSubmit} className="space-y-6">



<div>
  <label className="block text-sm font-medium text-surface-300 mb-2">
    Name
  </label>
  <input
    name="name"
    type="text"
    required
    className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent"
    placeholder="Your name"
  />
</div>

<div>
  <label className="block text-sm font-medium text-surface-300 mb-2">
    Email
  </label>
  <input
    name="email"
    type="email"
    required
    className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent"
    placeholder="your-email@gmail.com"
  />
</div>

<div>
  <label className="block text-sm font-medium text-surface-300 mb-2">
    Message
  </label>
  <textarea
    name="message"
    rows={5}
    required
    className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent"
    placeholder="Your message..."
  />
</div>


    <Button type="submit">
      {formStatus === "sending"
        ? "Sending..."
        : formStatus === "sent"
        ? "Message Sent!"
        : "Send Message"}
    </Button>

    {formStatus === "sent" && (
    <p className="text-green-400 text-sm mt-2">
      Thanks! Your message has been sent successfully.
    </p>
  )}

  {formStatus === "error" && (
    <p className="text-red-400 text-sm mt-2">
      Something went wrong. Please try again.
    </p>
  )}

  </form>
</ScrollReveal>


{/* RIGHT SIDE COLUMN */}
<div className="flex flex-col gap-6 mt-14 ml-12 w-fit">


  <ScrollReveal direction="left" delay={0.3}>

  <motion.div className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800 flex flex-col gap-4 w-fit">


      <h3 className="text-lg font-semibold text-surface-50">
        Connect with me
      </h3>


      {/* EMAIL */}
      <Button
        href="mailto:aditiii.a19@gmail.com"
        variant="outline"
        className="w-full flex items-center justify-start gap-3 px-5"

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 13.065L.01 6.396A2 2 0 012 5h20a2 2 0 011.99 1.396L12 13.065zM12 15.435L0 8.765V19a2 2 0 002 2h20a2 2 0 002-2V8.765l-12 6.67z"/>
        </svg>

        Email
      </Button>


      {/* LINKEDIN */}
      <Button
        href="https://www.linkedin.com/in/aditiii19/"
        variant="outline"
        external
        className="w-full flex items-center justify-start gap-3 px-5"

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.25h4.5V24H.24V8.25zM7.98 8.25h4.32v2.16h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.95c0-1.89-.03-4.32-2.64-4.32-2.64 0-3.03 2.07-3.03 4.2V24h-4.5V8.25z"/>
        </svg>

        LinkedIn
      </Button>


      {/* GITHUB */}
      <Button
        href="https://github.com/aditiiiii1"
        variant="outline"
        external
        className="w-full flex items-center justify-start gap-3 px-5"

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.19.93-.26 1.92-.39 2.91-.39.99 0 1.98.13 2.91.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.63.23 2.83.11 3.13.75.81 1.2 1.85 1.2 3.11 0 4.44-2.69 5.41-5.25 5.69.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z"/>
        </svg>

        GitHub
      </Button>


    </motion.div>

  </ScrollReveal>

</div>



  </div>
</Section>


    </>
  );
}
