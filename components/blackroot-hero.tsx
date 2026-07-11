import Image from "next/image"
import { ArrowRight } from "lucide-react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "TEAM", href: "#team" },
  { label: "JOURNEY", href: "#journey" },
  { label: "PROJECTS", href: "#projects" },
  { label: "VISION", href: "#vision" },
  { label: "CONTACT", href: "#contact" },
]

export function BlackrootHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground">
      {/* Corner brackets */}
      <span className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-foreground/25" aria-hidden />
      <span className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-foreground/25" aria-hidden />
      <span className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 border-b border-l border-foreground/25" aria-hidden />
      <span className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b border-r border-foreground/25" aria-hidden />

      {/* Giant faded background word */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[16%] -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-black leading-none tracking-tighter text-foreground/[0.04] animate-title-reveal"
      >
        BLACKROOT
      </span>

      {/* Hero Animated Cards — three members */}
      <div className="absolute inset-x-0 bottom-32 md:bottom-52 flex justify-center z-10 px-4">
        <div className="flex h-[75vh] md:h-[88vh] w-full max-w-6xl items-end justify-center group/team">
          {[
            { name: "Pranish Khanal", titles: ["Game Developer", "Backend Developer", "Roblox Scripter"], image: "/member-left-cut-v2.png", delay: "0s" },
            { name: "Vision KC", titles: ["Security Researcher", "Ethical Hacker", "Full Stack Developer"], image: "/member-center-cut.png", delay: "0.2s" },
            { name: "Rachana Tiwari", titles: ["UI Designer", "Frontend Developer", "Speaker"], image: "/member-right-cut-v2.png", delay: "0.4s", imageStyle: { objectPosition: "center 60%" } },
          ].map((member) => (
            <div
              key={member.name}
              className="relative h-full w-[40%] md:w-[38%] -mx-6 md:-mx-16 transition-all duration-700 group-hover/team:blur-[3px] group-hover/team:opacity-75 hover:!blur-none hover:!opacity-100 hover:z-30 cursor-pointer"
            >
              {/* Entrance Animation Wrapper */}
              <div 
                className="group/card relative h-full w-full animate-hero-card"
                style={{ animationDelay: member.delay }}
              >
                {/* Cloud Tooltip (Hidden by default, floats up on hover) */}
                <div className="pointer-events-none absolute left-1/2 top-[10%] md:top-[20%] z-50 flex -translate-x-1/2 translate-y-8 flex-col items-center justify-center opacity-0 transition-all duration-700 ease-out group-hover/card:-translate-y-4 group-hover/card:opacity-100">
                  <div className="relative rounded-2xl border border-white/20 bg-black/40 px-6 py-4 text-center shadow-[0_0_30px_rgba(192,160,98,0.3)] backdrop-blur-xl">
                    <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-white/20 bg-black/40 backdrop-blur-xl"></div>
                    <h3 className="whitespace-nowrap text-xl md:text-2xl font-black tracking-widest text-white drop-shadow-lg">{member.name}</h3>
                    <div className="mt-2 flex flex-col items-center gap-1">
                      {member.titles.map((title) => (
                        <p key={title} className="whitespace-nowrap text-[0.6rem] md:text-xs font-bold tracking-[0.25em] text-gold">{title.toUpperCase()}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Front (Image) */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative h-full w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 33vw, 300px"
                      className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover/card:scale-[1.12] origin-bottom"
                      style={member.imageStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-[0.35em] text-foreground">BLACKROOT</span>
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium tracking-[0.25em] text-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Centered logo mark */}
      <div className="pointer-events-none absolute left-1/2 top-5 z-30 -translate-x-1/2 md:top-6 animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
        <Image
          src="/blackroot-logo.png"
          alt="BLACKROOT logo"
          width={96}
          height={96}
          className="h-16 w-16 object-contain brightness-0 invert md:h-20 md:w-20"
          priority
        />
      </div>

      {/* Side tagline — left */}
      <div className="relative z-20 hidden md:block animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
        <div className="absolute left-12 top-[26vh] flex items-start gap-4">
          <span className="mt-1 h-24 w-px bg-gold/70" aria-hidden />
          <div className="space-y-1 text-lg font-semibold leading-tight tracking-[0.15em] text-foreground/90">
            <p>INNOVATE.</p>
            <p>SECURE.</p>
            <p>IMPACT.</p>
          </div>
        </div>
        <div className="absolute left-[52px] top-[52vh] flex flex-col gap-2" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-gold/60" />
          ))}
        </div>
      </div>

      {/* Side tagline — right */}
      <div className="relative z-20 hidden md:block animate-fade-in-left" style={{ animationDelay: '0.7s' }}>
        <div className="absolute right-12 top-[26vh] space-y-1 text-right text-lg font-semibold leading-tight tracking-[0.15em] text-foreground/90">
          <p>CODE.</p>
          <p>COLLABORATE.</p>
          <p>CONQUER.</p>
        </div>
      </div>

      {/* Bottom hero copy */}
      <div className="relative z-20 mt-auto flex flex-col items-center px-6 pb-12 text-center md:pb-16 pointer-events-none">
        {/* Mobile side taglines */}
        <div className="mb-6 flex w-full items-center justify-between text-[10px] font-semibold tracking-[0.2em] text-foreground/80 md:hidden animate-fade-in-down" style={{ animationDelay: '0.7s' }}>
          <div className="space-y-0.5 text-left">
            <p>INNOVATE.</p>
            <p>SECURE.</p>
            <p>IMPACT.</p>
          </div>
          <div className="space-y-0.5 text-right">
            <p>CODE.</p>
            <p>COLLABORATE.</p>
            <p>CONQUER.</p>
          </div>
        </div>

        <h1 className="flex justify-center text-balance text-[16vw] font-black leading-[0.85] tracking-tight text-foreground drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] md:text-[10rem] lg:text-[12rem]">
          <span className="animate-fade-in-left inline-block" style={{ animationDelay: '0.9s' }}>BLACK</span>
          <span className="animate-fade-in-right inline-block" style={{ animationDelay: '1.4s' }}>ROOT</span>
        </h1>

        <div className="mt-3 flex items-center gap-4 animate-fade-in-down" style={{ animationDelay: '1.9s' }}>
          <span className="h-px w-10 bg-gold/70" aria-hidden />
          <span className="text-sm font-semibold tracking-[0.5em] text-gold md:text-base">HACKATHON TEAM</span>
          <span className="h-px w-10 bg-gold/70" aria-hidden />
        </div>

        <p className="mt-4 flex flex-col items-center gap-1 text-xs font-medium tracking-[0.3em] text-foreground/85 md:flex-row md:gap-3 md:text-sm">
          <span className="animate-fade-in-left inline-block" style={{ animationDelay: '2.3s' }}>BUILDING SOLUTIONS.</span>
          <span className="animate-fade-in-right inline-block" style={{ animationDelay: '2.7s' }}>CREATING IMPACT.</span>
        </p>

        <a
          href="#journey"
          className="group mt-8 inline-flex items-center gap-3 border border-gold/70 px-8 py-3 text-xs font-semibold tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-background md:text-sm pointer-events-auto animate-fade-in-up"
          style={{ animationDelay: '3.2s' }}
        >
          EXPLORE OUR JOURNEY
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
