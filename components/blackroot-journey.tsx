"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, X } from "lucide-react"

interface TimelineEvent {
  date: string
  name: string
  achievement: string
  badgeClass: string
  badgeLabel: string
  project: string
  description: string
  details: {
    photo: string
    disclaimer: string
    projectsBuilt: { name: string; description: string }[]
    members: { name: string; role: string; image: string; linkedin: string }[]
  }
}

const teamMembers = {
  vision: { name: "Vision KC", role: "Leader & Security Researcher", image: "/member-center-cut.png", linkedin: "https://www.linkedin.com/in/visionkc/" },
  pranish: { name: "Pranish Khanal", role: "Game & Backend Developer", image: "/member-left-cut-v2.png", linkedin: "https://www.linkedin.com/in/pranish-khanal-02908b270/" },
  rachana: { name: "Rachana Tiwari", role: "UI Designer & Frontend Dev", image: "/member-right-cut-v2.png", linkedin: "https://www.linkedin.com/in/rachanatiwariofficial/" },
  safal: { name: "Safal Lohani", role: "Backend Developer", image: "/safal.png", linkedin: "https://www.linkedin.com/in/safal-lohani-1621bb318/" },
  shuvam: { name: "Shuvam Khanal", role: "Presenter & Tester", image: "/shuvam.png", linkedin: "https://www.linkedin.com/in/shuvam-khanal/" },
}

const events: TimelineEvent[] = [
  {
    date: "January 19, 2026",
    name: "IIMS Vibeathon",
    achievement: "🥇",
    badgeClass: "badge-gold",
    badgeLabel: "Winner",
    project: "DevBuddy",
    description:
      "Winner of Vibeathon 2026, organized by the IIMS ECHO Club, a beginner-friendly vibecoding hackathon focused on creativity, rapid prototyping, and AI-assisted development.",
    details: {
      photo: "/vibeathon.png",
      disclaimer:
        "Centered around the theme \"Well-being in a Hectic Coding Life,\" participants built innovative solutions promoting healthier and more balanced coding experiences through humor, creativity, and technology. The event encouraged experimentation, collaboration, and learning, providing students with a fun and approachable environment to transform ideas into meaningful products.",
      projectsBuilt: [
        {
          name: "DevBuddy",
          description: "DevBuddy is an AI-powered developer companion built to promote healthier and more enjoyable coding experiences by combining productivity tools, coding assistance, and wellness features.\n\nFeatures: Pomodoro Task Manager, AI Coding Assistant, Python Challenges, Meme Generator, Health Reminders, and Local Storage.\n\nTech Stack: HTML, TailwindCSS, JavaScript, Python Flask, Groq API, and Browser LocalStorage.",
        },
      ],
      members: [teamMembers.vision, teamMembers.pranish],
    },
  },
  {
    date: "May 8, 2026",
    name: "Relay Hack X LeapFrog Connect",
    achievement: "🥇",
    badgeClass: "badge-gold",
    badgeLabel: "Winner",
    project: "LeapFrog Connect",
    description:
      "Our breakthrough moment as a trio. We took first place with a solution that impressed judges with its technical depth.",
    details: {
      photo: "/relay.png",
      disclaimer:
        "Relay Hack X – LeapFrog Connect was a national hackathon organized in collaboration with the Ministry of Education, Science and Technology, Nepal, bringing together student innovators from across the country to solve real-world challenges through technology.\n\nOur team developed an innovative solution that showcased creativity, technical expertise, and effective collaboration, ultimately securing 🏆 1st Place among competing teams.",
      projectsBuilt: [
        {
          name: "LeapFrog Connect",
          description:
            "LeapFrog Connect is an AI-powered platform that bridges the gap between academic learning and professional employment by integrating a Learning Management System (LMS) with an HR Tracking Platform.\n\nThe platform enables students to upskill through courses, assignments, and quizzes while helping companies identify, evaluate, and hire job-ready candidates through AI-driven talent matching and readiness scoring.\n\nKey Features: AI Career Readiness Score, Skill Gap Analysis, Talent Matching, Course Management, Job Tracking, Automated Interview Scheduling, and Role-based Dashboards for Students, Employers, and Administrators.\n\nTech Stack: React, TailwindCSS, FastAPI, PostgreSQL, Supabase, GROQ API, JWT Authentication, and Email Automation.",
        },
      ],
      members: [teamMembers.vision, teamMembers.pranish, teamMembers.rachana],
    },
  },
  {
    date: "May 31, 2026",
    name: "JunctionX Kathmandu",
    achievement: "🥉",
    badgeClass: "badge-bronze",
    badgeLabel: "Top 3 Finalist",
    project: "Trip Mandala",
    description:
      "Competed in the Heritage Track and secured a Top 3 finish. Built a solution to promote authentic, sustainable, and community-driven tourism.",
    details: {
      photo: "/junction.png",
      disclaimer:
        "JunctionX Kathmandu & FinnoFest 2026 was a premier cross-border innovation festival and 36-hour hackathon that brought together 300+ students from 30+ institutions across the Kathmandu Valley.\n\nOrganized in collaboration with international and national partners, the event provided participants with mentorship, industry exposure, and opportunities to develop innovative solutions to real-world challenges in technology, sustainability, and smart tourism.",
      projectsBuilt: [
        {
          name: "Trip Mandala",
          description: "Trip Mandala is an AI-powered tourism platform designed to bridge Nepal's first and last-mile travel challenges while promoting authentic, sustainable, and community-driven tourism.\n\nThe platform helps travelers discover local experiences through intelligent trip planning, cultural storytelling, homestay discovery, multilingual support, and integrated local services.\n\nKey Features: AI Trip Planner, Smart Tourist Assistance, Community-Based Tourism Promotion, Local Guide Integration, Cultural Exploration, Offline Resources, and Tourism Analytics.\n\nTech Stack: React, Tailwind CSS, Python, FastAPI, PostgreSQL, GROQ API, 3D Mapping, and Local Tourism Datasets.\n\nMission: To make tourism in Nepal more accessible, authentic, and sustainable while empowering local communities and businesses.",
        },
      ],
      members: [teamMembers.vision, teamMembers.pranish, teamMembers.rachana],
    },
  },
  {
    date: "June 14, 2026",
    name: "Nepal Police Hackathon",
    achievement: "🏅",
    badgeClass: "badge-silver",
    badgeLabel: "Top 20 Finalist",
    project: "CrimeLink",
    description:
      "Competed in Nepal's first government-led hackathon and secured a Top 20 Finalist position, proving our consistency at the highest level.",
    details: {
      photo: "/police.png",
      disclaimer:
        "The Nepal Police Hackathon 2026 marked a historic milestone as Nepal's first government-led hackathon and the first innovation competition organized by any governmental body in the country.\n\nThe event aimed to foster collaboration between government institutions, developers, and innovators to build practical, ethical, and deployable solutions for real-world national challenges.\n\nThe hackathon featured three key tracks: Public Safety & Emergency Systems, Police Operations & Coordination, and OSINT, Cybercrime & Threat Analysis, with problem statements grounded in real Nepal Police data and operational needs.\n\nBy bridging technology and public service, the event established a new model for government-driven innovation in Nepal.",
      projectsBuilt: [
        {
          name: "CrimeLink",
          description:
            "CrimeLink is an AI-powered cybercrime intelligence platform designed to help Nepal Police uncover relationships between cybercrime cases, identify criminal networks, and support intelligence-driven investigations.\n\nInstead of treating complaints as isolated incidents, the platform extracts entities such as phone numbers, bank accounts, IP addresses, and social media profiles to automatically correlate related cases and generate actionable intelligence.\n\nKey Features: Case Ingestion System, OCR Pipeline, AI Entity Extraction, Cross-Case Correlation Engine, Graph-Based Criminal Network Analysis, Investigation Dashboard, Risk Scoring, and AI-Generated Investigation Summaries.\n\nTech Stack: React, Tailwind CSS, FastAPI, PostgreSQL, Neo4j, OCR Pipeline, AI/ML Models, and Interactive Network Visualization.\n\nMission: To transform fragmented cybercrime reports into connected intelligence, enabling faster, smarter, and more effective investigations against organized cybercrime.",
        },
      ],
      members: [teamMembers.vision, teamMembers.safal, teamMembers.shuvam],
    },
  },
]

function HackathonModal({
  event,
  onClose,
}: {
  event: TimelineEvent
  onClose: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[oklch(0.14_0_0)] shadow-[0_40px_100px_oklch(0_0_0/0.6)]"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "fade-in-up 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/50 transition-all hover:border-gold/40 hover:text-gold"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="border-b border-white/8 p-8 pb-6">
          <span className="text-[0.6rem] font-semibold tracking-[0.35em] text-foreground/35">
            {event.date}
          </span>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-black tracking-[0.06em] text-foreground md:text-3xl">
              {event.name}
            </h3>
            <span className={`badge ${event.badgeClass}`}>
              {event.achievement} {event.badgeLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 p-8">
          {/* Photo placeholder */}
          <div className="overflow-hidden rounded-xl border border-white/8 bg-white/[0.02]">
            {event.details.photo ? (
              <Image
                src={event.details.photo}
                alt={event.name}
                width={700}
                height={400}
                priority
                className={`h-48 w-full md:h-64 ${
                  event.details.photo === "/police.png" 
                    ? "object-cover object-[center_25%]" 
                    : event.details.photo === "/vibeathon.png"
                    ? "object-contain bg-white/5 scale-[1.32]"
                    : "object-cover object-center"
                }`}
              />
            ) : (
              <div className="flex h-48 flex-col items-center justify-center gap-3 md:h-64">
                <span className="text-4xl opacity-20">📸</span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground/20">
                  Hackathon Photo
                </span>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              About This Event
            </h4>
            <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/55">
              {event.details.disclaimer}
            </p>
          </div>

          {/* Projects Built */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Projects Built
            </h4>
            <div className="space-y-3">
              {event.details.projectsBuilt.map((project) => (
                <div
                  key={project.name}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-5"
                >
                  <h5 className="mb-2 text-sm font-bold tracking-[0.08em] text-foreground">
                    {project.name}
                  </h5>
                  <p className="whitespace-pre-line text-[0.8rem] leading-relaxed text-foreground/45">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Members in Team */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Team Members
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {event.details.members.map((member) => (
                <a
                  key={member.name}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="relative mb-3 h-16 w-16 overflow-hidden rounded-full border border-white/10 transition-colors duration-300 group-hover:border-gold/40">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      priority
                      sizes="64px"
                      className="object-cover"
                      style={{ objectPosition: member.name === "Rachana Tiwari" ? "72% 55%" : "center top" }}
                    />
                  </div>
                  <span className="text-center text-xs font-bold tracking-[0.08em] text-foreground transition-colors group-hover:text-gold">
                    {member.name}
                  </span>
                  <span className="mt-1 text-center text-[0.6rem] font-medium tracking-wide text-foreground/40">
                    {member.role}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BlackrootJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

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
    <>
      <section ref={sectionRef} id="journey" className="section-container animate-section-book">
        <div className="section-inner">
          <div className="section-label animate-on-scroll-down">Our Story</div>
          <h2 className="section-heading animate-on-scroll-left" style={{ animationDelay: '0.2s' }}>Hackathon Journey</h2>
          <p className="section-desc animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
            From our first hackathon to multiple victories and finalist finishes, each competition has strengthened our skills, expanded our perspective, and shaped us into a more capable and ambitious team.
          </p>

          {/* Timeline */}
          <div className="relative mx-auto max-w-4xl">
            {/* Central line */}
            <div
              className="absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, oklch(0.76 0.14 62 / 0.3) 10%, oklch(0.76 0.14 62 / 0.3) 90%, transparent)",
              }}
            />

            {events.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={`${event.name}-${i}`}
                  className="timeline-item animate-on-scroll-up relative mb-12 last:mb-0"
                  style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-background md:left-1/2"
                    style={{
                      boxShadow: "0 0 12px oklch(0.76 0.14 62 / 0.3)",
                    }}
                  />

                  {/* Card */}
                  <div
                    className={`glass-card group relative ml-10 cursor-pointer p-6 md:ml-0 md:w-[calc(50%-2.5rem)] md:p-8 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    {/* Date */}
                    <span className="text-[0.65rem] font-semibold tracking-[0.3em] text-foreground/40">
                      {event.date}
                    </span>

                    {/* Name & Badge */}
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-base font-bold tracking-[0.08em] text-foreground md:text-lg">
                        {event.name}
                      </h3>
                      <span className={`badge ${event.badgeClass}`}>
                        {event.achievement} {event.badgeLabel}
                      </span>
                    </div>

                    {/* Project */}
                    <p className="mt-1 text-xs font-semibold tracking-[0.15em] text-gold/80">
                      {event.project}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-[0.8rem] leading-relaxed text-foreground/50">
                      {event.description}
                    </p>

                    {/* Click indicator */}
                    <div className="mt-4 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold/50 transition-colors group-hover:text-gold">
                      <span>View Details</span>
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <HackathonModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  )
}
