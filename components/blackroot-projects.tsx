"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const projects = [
  {
    name: "DevBuddy",
    description:
      "An AI-powered developer companion built to promote healthier and more enjoyable coding experiences by combining productivity tools, coding assistance, and wellness features.",
    techStack: ["HTML", "TailwindCSS", "JavaScript", "Python Flask", "Groq API", "LocalStorage"],
    hackathon: "IIMS Vibeathon",
    achievement: "🥇 Winner",
    badgeClass: "badge-gold",
    image: "/devbuddy.png",
    link: "https://dev-buddy-five.vercel.app/",
  },
  {
    name: "LeapFrog Connect",
    description:
      "An AI-powered platform that bridges the gap between academic learning and professional employment by integrating a Learning Management System (LMS) with an HR Tracking Platform.",
    techStack: ["React", "TailwindCSS", "FastAPI", "PostgreSQL", "Supabase", "GROQ API"],
    hackathon: "Relay Hack X LeapFrog Connect",
    achievement: "🥇 Winner",
    badgeClass: "badge-gold",
    image: "/leapfrogconnect.png",
    link: "https://leap-frog-connect-five.vercel.app/",
  },
  {
    name: "Trip Mandala",
    description:
      "An AI-powered tourism platform designed to bridge Nepal's first and last-mile travel challenges while promoting authentic, sustainable, and community-driven tourism.",
    techStack: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL", "GROQ API", "3D Mapping"],
    hackathon: "JunctionX Kathmandu",
    achievement: "🥉 Top 3 in Heritage Track",
    badgeClass: "badge-bronze",
    image: "/tripmandala.png",
    link: "https://youtu.be/77OeXo1pWcM?si=aPEItxedmBN0fwo9",
  },
  {
    name: "CrimeLink",
    description:
      "An AI-powered cybercrime intelligence platform designed to help Nepal Police uncover relationships between cases and identify criminal networks.",
    techStack: ["React", "FastAPI", "Neo4j", "PostgreSQL", "AI/ML"],
    hackathon: "Nepal Police Hackathon",
    achievement: "🏅 Top 20 Finalist",
    badgeClass: "badge-silver",
    image: "/Crimelink.png",
    link: "https://canva.link/crime-link-blackroot",
  },
]

export function BlackrootProjects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('[class*="animate-on-scroll"]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.remove("is-closing")
              entry.target.classList.add("is-opening")
            } else {
              entry.target.classList.add("is-visible")
              observer.unobserve(entry.target)
            }
          } else {
            if (entry.target === sectionRef.current) {
              if (entry.target.classList.contains("is-opening")) {
                entry.target.classList.remove("is-opening")
                entry.target.classList.add("is-closing")
              }
            }
          }
        })
      },
      { threshold: 0.1 }
    )
    
    observer.observe(sectionRef.current)
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="section-container animate-section-book">
      <div className="section-inner">
        <div className="section-label animate-on-scroll-down">What We Built</div>
        <h2 className="section-heading animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>Projects</h2>
        <p className="section-desc animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
          Every hackathon is an opportunity to turn ideas into reality. These are the solutions we've built projects designed to solve real problems, create meaningful impact, and showcase our passion for innovation.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Card = project.link ? "a" : "div"
            return (
              <Card
                key={project.name}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className={`animate-on-scroll-up glass-card group relative overflow-hidden p-7 md:p-9 ${
                  project.link ? "block cursor-pointer transition-all hover:border-gold/40 hover:bg-white/[0.03]" : ""
                }`}
                style={{ animationDelay: `${0.6 + i * 0.15}s` }}
              >
              {/* Gradient top edge */}
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.76 0.14 62 / 0.5) 30%, oklch(0.76 0.14 62 / 0.7) 50%, oklch(0.76 0.14 62 / 0.5) 70%, transparent)",
                }}
              />

              {/* Project Image */}
              <div className="relative mb-6 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] md:h-48">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    priority={i < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-4xl opacity-30">📦</span>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-foreground/25">
                      Project Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Badges */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className={`badge ${project.badgeClass}`}>{project.achievement}</span>
                <span className="text-[0.6rem] font-medium tracking-[0.15em] text-foreground/35">
                  {project.hackathon}
                </span>
              </div>

              {/* Name */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className={`text-lg font-bold tracking-[0.08em] text-foreground md:text-xl ${project.link ? "transition-colors group-hover:text-gold" : ""}`}>
                  {project.name}
                </h3>
                {project.link && (
                  <svg
                    className="h-4 w-4 text-foreground/30 transition-colors group-hover:text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>

              {/* Description */}
              <p className="mb-5 text-[0.82rem] leading-relaxed text-foreground/50">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          )})}
        </div>
      </div>
    </section>
  )
}
