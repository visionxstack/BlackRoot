"use client"

import { useEffect, useRef } from "react"
import { Globe, GitBranch, ShieldCheck, Rocket } from "lucide-react"

const goals = [
  {
    icon: Globe,
    emoji: "🌍",
    title: "International Hackathons",
    description:
      "Competing on the global stage, collaborating with innovators worldwide, and showcasing our skills beyond borders.",
  },
  {
    icon: GitBranch,
    emoji: "🚀",
    title: "Open Source Projects",
    description:
      "Building and contributing meaningful open-source tools that empower developers and give back to the community.",
  },
  {
    icon: ShieldCheck,
    emoji: "🛡",
    title: "Cybersecurity Competitions",
    description:
      "Expanding into CTFs and security challenges to strengthen our expertise in ethical hacking and cyber defense.",
  },
  {
    icon: Rocket,
    emoji: "💡",
    title: "Building Impactful Products",
    description:
      "Transforming hackathon prototypes into real-world products that solve meaningful problems and create lasting impact.",
  },
]

export function BlackrootVision() {
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
    <section ref={sectionRef} id="vision" className="section-container animate-section-book">
      <div className="section-inner">
        <div className="section-label animate-on-scroll-down">Looking Ahead</div>
        <h2 className="section-heading animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>Where We Are Heading</h2>
        <p className="section-desc animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
          We're only at the beginning of our journey. Our vision extends beyond local competitions toward global innovation, open collaboration, and building technology that creates meaningful impact.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {goals.map((goal, i) => (
            <div
              key={goal.title}
              className="animate-on-scroll-up glass-card group relative overflow-hidden p-8 md:p-10"
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              {/* Subtle glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "oklch(0.76 0.14 62 / 0.08)" }}
              />

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] transition-all duration-400 group-hover:border-gold/25 group-hover:bg-gold/8">
                <goal.icon className="h-6 w-6 text-gold/80" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold tracking-[0.12em] text-foreground md:text-lg">
                {goal.title}
              </h3>

              {/* Description */}
              <p className="text-[0.82rem] leading-relaxed text-foreground/50">
                {goal.description}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.76 0.14 62 / 0.4) 50%, transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
