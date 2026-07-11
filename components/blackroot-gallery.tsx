"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const galleryItems = [
  { label: "JunctionX", category: "Final Presentation", image: "/junction.png", height: "h-52 md:h-64" },
  { label: "Relay Hack X LeapFrog", category: "Winning Moment", image: "/relay.png", height: "h-44 md:h-52", position: "object-[center_75%]" },
  { label: "Nepal Police Hackathon", category: "Certificates", image: "/police.png", height: "h-56 md:h-72" },
  { label: "Nepal Police Hackathon", category: "Hackathon Moments", image: "/police2.png", height: "h-48 md:h-56" },
  { label: "Nepal Police Hackathon", category: "Final Presentation", image: "/police3.png", height: "h-52 md:h-60" },
  { label: "JunctionX Kathmandu", category: "Hackathon Moments", image: "/junction2.png", height: "h-44 md:h-52" },
  { label: "Relay Hack X LeapFrog", category: "Mentor Session", image: "/relay2.png", height: "h-56 md:h-68" },
  { label: "Relay Hack X LeapFrog", category: "Photo Time", image: "/relay3.png", height: "h-48 md:h-56", position: "object-[center_30%]" },
  { label: "IIMS Vibeathon", category: "Winning Moment", image: "/vibeathon.png", height: "h-40 md:h-48", position: "object-[center_60%]" },
]

const gradients = [
  "linear-gradient(135deg, oklch(0.18 0.01 62 / 0.6), oklch(0.14 0 0))",
  "linear-gradient(135deg, oklch(0.16 0.02 288 / 0.4), oklch(0.13 0 0))",
  "linear-gradient(135deg, oklch(0.17 0.01 40 / 0.5), oklch(0.12 0 0))",
  "linear-gradient(135deg, oklch(0.15 0.015 200 / 0.4), oklch(0.13 0 0))",
]

export function BlackrootGallery() {
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
    <section ref={sectionRef} id="gallery" className="section-container animate-section-book">
      <div className="section-inner">
        <div className="section-label animate-on-scroll-down">Moments</div>
        <h2 className="section-heading animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>Gallery</h2>
        <p className="section-desc animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
          Snapshots from our journey, the late nights, memorable moments, hard-fought victories, and the people behind the ideas and code.
        </p>

        {/* Masonry grid */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="gallery-item animate-on-scroll-up mb-5 break-inside-avoid"
              style={{ animationDelay: `${0.6 + i * 0.08}s` }}
            >
              <div
                className={`group relative ${item.height} overflow-hidden rounded-xl border border-white/8 transition-all duration-500 hover:border-gold/25 hover:shadow-[0_8px_40px_oklch(0_0_0/0.5)]`}
                style={{ background: gradients[i % gradients.length] }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-700 group-hover:scale-105 object-cover ${item.position || ""}`}
                  />
                ) : (
                  <div className="absolute inset-0 origin-center transition-transform duration-700 group-hover:scale-105" />
                )}

                {/* Content overlay */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ${item.image ? "bg-black/70 opacity-0 group-hover:opacity-100" : ""}`}>
                  {!item.image && <span className="mb-2 text-3xl opacity-20">📸</span>}
                  <span className={`text-sm font-bold tracking-[0.1em] ${item.image ? "text-white" : "text-foreground/30"}`}>
                    {item.label}
                  </span>
                  <span className={`mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] ${item.image ? "text-white/80" : "text-foreground/20"}`}>
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
