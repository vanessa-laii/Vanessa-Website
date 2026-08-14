import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  tech: string[];
  description: string;
  links?: { label: string; url: string }[];
  src: string;
  type?: "image" | "video";
  contained?: boolean;
  tagClass: string;
}

const timeline: TimelineEntry[] = [
  {
    year: "Current",
    title: "NLP Research Assistant",
    organization: "McMaster University",
    tech: ["NLP", "Machine Learning", "Python", "Adapters", "Qwen"],
    description: "NLP Research Assistant for the McMaster Engineering Department",
    src: "/mcmaster-enginering.png",
    type: "image",
    tagClass: "bg-sky-light text-sky-600 border-sky",
  },
  {
    year: "2025",
    title: "Software Engineer Intern",
    organization: "Royal Bank of Canada",
    tech: ["TypeScript", "Python", "OpenTelemetry", "Dynatrace", "Backstage", "Ansible"],
    description:
      "12-month co-op on Innovation & Technology DevOps, implementing Site Reliability Practices for 30+ services and improving developer productivity across all lines of business.",
    src: "/rbc.png",
    type: "image",
    tagClass: "bg-lavender-light text-lavender-dark border-lavender",
  },
  {
    year: "2024–2026",
    title: "Teaching Assistant",
    organization: "McMaster University",
    tech: ["Java", "C", "Linux/Unix", "OOP", "Debuggers"],
    description: "Object Oriented Programming (OOP), Computer Science Development Basics",
    src: "/mcmaster.png",
    type: "image",
    tagClass: "bg-rose-light text-rose-600 border-rose",
  },
  {
    year: "2024",
    title: "Web Dev Lead",
    organization: "McMaster iGEM",
    tech: ["TypeScript", "React", "Node.js", "Vercel", "TailwindCSS"],
    description:
      "Collaborated with researchers to develop an award winning website in the overgrad category at the iGEM Giant Jamboree in Paris, France.",
    links: [
      { label: "Wiki", url: "https://2024.igem.wiki/mcmaster-canada/" },
      { label: "Team Site", url: "https://www.mcmaster-igem.ca/" },
    ],
    src: "/iGEM-Logo.jpg",
    tagClass: "bg-mint-light text-green-700 border-mint",
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Experience() {
  const [active, setActive] = useState(0);
  const entry = timeline[active];

  return (
    <section id="experience" className="relative py-24 w-full">
      <div className="px-4 sm:px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-lavender-dark mb-3">
            Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-text-primary">
            A brief overview of my journey
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Previous Software Engineering Intern at RBC on DevOps Team, worked on the internal developer platform for software delivery and AI-assisted development tooling. Currently looking for new grad 2027 SWE roles in Infrastructure, Systems Engineering and DevOps/SRE.
          </p>
        </motion.div>

        {/* Two-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1100px_1fr] gap-12 lg:gap-16 items-start">

          {/* ── Left: clickable list ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-1"
          >
            {timeline.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left px-3 py-2 rounded-xl transition-all duration-200 group ${
                  active === i
                    ? "bg-bg-elevated border border-border"
                    : "hover:bg-bg-elevated/60 border border-transparent"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className={`text-sm font-medium transition-colors ${active === i ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"}`}>
                    {item.title}
                  </span>
                  <span className="text-[11px] font-medium text-text-muted uppercase tracking-widest shrink-0 tabular-nums">
                    {item.year}
                  </span>
                </div>
                <p className={`text-xs mt-0.5 transition-colors ${active === i ? "text-text-muted" : "text-text-muted/60"}`}>
                  {item.organization}
                </p>
              </button>
            ))}
          </motion.div>

          {/* ── Right: detail panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-4"
              >
                {/* Photo */}
                <div className="w-full aspect-video overflow-hidden rounded-xl border border-border shadow-sm">
                  {entry.type === "video" ? (
                    <video
                      src={entry.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={entry.src}
                      alt={entry.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {entry.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {entry.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] font-medium border rounded-full px-2.5 py-0.5 ${entry.tagClass}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {entry.links && entry.links.length > 0 && (
                  <div className="flex gap-4">
                    {entry.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-lavender-dark hover:text-text-primary transition-colors"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
