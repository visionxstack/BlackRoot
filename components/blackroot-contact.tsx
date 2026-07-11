"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, ArrowRight, X } from "lucide-react"

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

const links = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/blackrootnepal",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/blackroot-nepal",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:blackrootnepal@gmail.com",
  },
]

export function BlackrootContact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setIsSubmitted(false)
      setError(null)
    }, 300)
  }

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('[class*="animate-on-scroll"]')
    if (!items) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isModalOpen) return
    document.body.style.overflow = "hidden"
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isModalOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch("https://formspree.io/f/mkodwjbg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        if (Object.hasOwn(data, "errors")) {
          setError(data.errors.map((err: any) => err.message).join(", "))
        } else {
          setError("Oops! There was a problem submitting your form")
        }
      }
    } catch (err) {
      setError("Oops! There was a problem submitting your form")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer ref={sectionRef} id="contact" className="section-container relative">
      {/* Corner brackets — matching hero */}
      <span className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-foreground/25" aria-hidden />
      <span className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-foreground/25" aria-hidden />
      <span className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 border-b border-l border-foreground/25" aria-hidden />
      <span className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b border-r border-foreground/25" aria-hidden />

      <div className="section-inner flex flex-col items-center text-center">
        {/* CTA */}
        <div className="section-label animate-on-scroll-down">Get In Touch</div>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black tracking-[0.04em] text-foreground md:text-5xl lg:text-6xl animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>
          Let&apos;s Build Something Amazing Together.
        </h2>

        {/* Accent line */}
        <div className="my-8 flex items-center gap-4 animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
          <span className="h-px w-10 bg-gold/50" aria-hidden />
          <span className="h-1.5 w-1.5 rounded-full bg-gold/70" aria-hidden />
          <span className="h-px w-10 bg-gold/50" aria-hidden />
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="group mb-10 inline-flex items-center gap-3 border border-gold/70 px-8 py-3 text-xs font-semibold tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-background md:text-sm animate-on-scroll-up"
          style={{ animationDelay: '0.6s' }}
        >
          JOIN OUR TEAM
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {links.map((link, i) => (
            <div key={link.label} className="flex flex-col items-center gap-4">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-foreground/50 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:shadow-[0_0_20px_oklch(0.76_0.14_62/0.12)] animate-on-scroll-up"
                aria-label={link.label}
                style={{ animationDelay: `${0.8 + i * 0.15}s` }}
              >
                <link.icon className="h-5 w-5" />
              </a>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-foreground/35 transition-colors duration-300 hover:text-gold animate-on-scroll-up"
                style={{ animationDelay: `${0.85 + i * 0.15}s` }}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-[0.6rem] font-medium uppercase tracking-[0.4em] text-foreground/20">
          © {new Date().getFullYear()} BlackRoot. All Rights Reserved.
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[oklch(0.14_0_0)] p-8 shadow-[0_40px_100px_oklch(0_0_0/0.6)] text-left"
            style={{
              animation: "fade-in-up 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/50 transition-all hover:border-gold/40 hover:text-gold"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center py-8 text-center" style={{ animation: "fade-in-up 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards" }}>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold text-gold">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-black tracking-tight text-foreground">
                  Application Received!
                </h3>
                <p className="text-sm text-foreground/70">
                  Thank you for your interest in joining BlackRoot. We will review your application and get back to you soon.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-8 rounded-xl bg-white/10 px-8 py-3 text-xs font-bold tracking-[0.2em] text-foreground transition-colors hover:bg-white/20"
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-2xl font-black tracking-tight text-foreground">
                  Join BlackRoot
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {error && (
                    <div className="rounded-lg bg-red-500/10 px-4 py-3 text-xs text-red-400">
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-foreground/70">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-foreground/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-foreground/70">
                      Why Do you Want to Join BlackRoot ?
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="Tell us about yourself and why you'd be a great fit..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-xl bg-gold py-3 text-xs font-bold tracking-[0.2em] text-background transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  )
}
