"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const members = [
  {
    name: "Vision KC",
    role: "Leader",
    titles: ["Security Researcher", "Ethical Hacker", "Full Stack Developer"],
    skills: ["Python", "Javascript", "React", "FastAPI", "Cybersecurity", "VAPT", "Linux", "Artificial Intelligence"],
    image: "/member-center-cut.png",
    github: "https://github.com/visionxstack",
    linkedin: "https://www.linkedin.com/in/visionkc/",
  },
  {
    name: "Pranish Khanal",
    role: "Developer",
    titles: ["Game Developer", "Backend Developer", "Roblox Scripter"],
    skills: ["Python", "Lua", "API Development", "Game Design Systems", "Backend Development"],
    image: "/member-left-cut-v2.png",
    github: "https://github.com/bankai4488",
    linkedin: "https://www.linkedin.com/in/pranish-khanal-02908b270/",
  },
  {
    name: "Rachana Tiwari",
    role: "Designer & Speaker",
    titles: ["UI Designer", "Frontend Developer", "Speaker"],
    skills: ["UI/UX Design", "Javascript", "Public Speaking", "Creative Design", "Frontend Development"],
    image: "/member-right-cut-v2.png",
    github: "https://github.com/missrachana-tiwari",
    linkedin: "https://www.linkedin.com/in/rachanatiwariofficial/",
  },
]

export function BlackrootTeam() {
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
    <section ref={sectionRef} id="team" className="section-container animate-section-book">
      <div className="section-inner">
        <div className="section-label animate-on-scroll-down">Our People</div>
        <h2 className="section-heading animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>Meet The Team</h2>
        <p className="section-desc animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
          Three individuals, one shared vision. We combine expertise in cybersecurity, software engineering, design, and innovation to build impactful solutions and compete at the highest level in hackathons.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="animate-on-scroll-up glass-card group relative flex flex-col items-center overflow-hidden pb-8 pt-10 md:pb-10 md:pt-14"
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              {/* Gold top accent */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, oklch(0.76 0.14 62 / 0.4) 50%, transparent)`,
                }}
              />

              {/* Avatar */}
              <div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-white/10 transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_0_30px_oklch(0.76_0.14_62/0.15)] md:h-32 md:w-32">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  sizes="128px"
                  className="object-cover"
                  style={{ objectPosition: member.name === "Rachana Tiwari" ? "72% 55%" : "center top" }}
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-bold tracking-[0.12em] text-foreground md:text-xl">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-gold">
                {member.role.toUpperCase()}
              </p>

              {/* Titles */}
              <div className="mt-3 flex flex-wrap justify-center gap-1.5 px-6">
                {member.titles.map((title) => (
                  <span
                    key={title}
                    className="text-[0.65rem] font-medium tracking-wide text-foreground/45"
                  >
                    {title}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-auto my-5 h-px w-12 bg-white/10" />

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 px-6">
                {member.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={member.github}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/40 transition-all duration-300 hover:border-gold/40 hover:text-gold"
                  aria-label={`${member.name} GitHub`}
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={member.linkedin}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/40 transition-all duration-300 hover:border-gold/40 hover:text-gold"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
