"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { icon: "👥", value: 3, label: "Core Members", suffix: "" },
  { icon: "🏆", value: 4, label: "Hackathons Participated", suffix: "" },
  { icon: "🥇", value: 2, label: "Hackathons Won", suffix: "" },
  { icon: "🥉", value: 1, label: "Top 3 Finish", suffix: "" },
  { icon: "🏅", value: 1, label: "Top 20 Finalist", suffix: "" },
]

function AnimatedNumber({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 1200
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setCount(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, target])

  return <>{count}</>
}

export function BlackrootStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
              setIsVisible(true)
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
    <section ref={sectionRef} id="stats" className="section-container animate-section-book">
      <div className="section-inner">
        <div className="section-label animate-on-scroll-down">Our Numbers</div>
        <h2 className="section-heading animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>Achievements</h2>
        <p className="section-desc animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
          A snapshot of our journey from forming a team and building impactful projects to competing, learning, and earning recognition through hackathons and innovation challenges.
        </p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-on-scroll-up glass-card float-${i + 1} flex flex-col items-center px-5 py-8 text-center md:px-6 md:py-10`}
              style={{
                animationDelay: `${0.6 + i * 0.15}s`,
              }}
            >
              <span className="mb-4 text-3xl md:text-4xl" aria-hidden>
                {stat.icon}
              </span>
              <span className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
                <AnimatedNumber target={stat.value} isVisible={isVisible} />
                {stat.suffix}
              </span>
              <span className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-foreground/50 md:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
