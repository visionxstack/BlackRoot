"use client"

import { useEffect, useRef } from "react"
import { Lightbulb, Code2, Shield, Users } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We approach challenges with creative thinking, transforming ideas into impactful and practical solutions.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "We build scalable, reliable, and modern software systems, from full-stack applications to competition-ready products.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Security is at the core of our mindset. We explore ethical hacking, security research, and secure-by-design development practices.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Our strength comes from combining diverse skills, a shared vision, and a commitment to building and learning together.",
  },
]

export function BlackrootAbout() {
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
    <section ref={sectionRef} id="about" className="section-container animate-section-book">
      <div className="section-inner">
        <div className="section-label animate-on-scroll-down">Who We Are</div>
        <h2 className="section-heading animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>About BlackRoot</h2>
        <p className="section-desc animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
          BlackRoot is a multidisciplinary team of builders and innovators passionate about software engineering, cybersecurity, and competitive problem solving. Through hackathons and collaborative projects, we continuously explore new technologies, build impactful solutions, and challenge ourselves to learn, create, and innovate.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="animate-on-scroll-up glass-card group relative overflow-hidden p-7 md:p-8"
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              {/* Gold top accent */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, oklch(0.76 0.14 62 / 0.5) 50%, transparent)`,
                }}
              />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-gold/30 group-hover:bg-gold/10">
                <pillar.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>

              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                {pillar.title}
              </h3>

              <p className="text-[0.82rem] leading-relaxed text-foreground/55">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
