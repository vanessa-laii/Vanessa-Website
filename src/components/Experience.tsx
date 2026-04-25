import { useState } from "react";
import { motion } from "framer-motion";

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
    tech: ["NLP", "Machine Learning","Python", "Hugging Face"],
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
    year: "2024-2026",
    title: "McMaster Teaching Assistant",
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
      "Collaborated with researchers to develop a wiki page winning Silver in the overgrad category at the iGEM Giant Jamboree in Paris, France.",
    links: [
      { label: "Wiki", url: "https://2024.igem.wiki/mcmaster-canada/" },
      { label: "Team Site", url: "https://www.mcmaster-igem.ca/" },
    ],
    src: "/IGEM.png",
    tagClass: "bg-mint-light text-green-700 border-mint",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function ExpCard({ entry, delay }: { entry: TimelineEntry; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (!window.matchMedia("(hover: hover)").matches) {
      setExpanded((p) => !p);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group cursor-pointer"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={handleClick}
    >
      {/* ── Media — square, no rounded corners ── */}
      <div className="aspect-square overflow-hidden shadow-[0_4px_64px_rgba(0,0,0,0.05),0_1px_16px_rgba(0,0,0,0.03)] transition-shadow duration-300 group-hover:shadow-[0_8px_80px_rgba(0,0,0,0.08),0_2px_24px_rgba(0,0,0,0.04)]">
        {entry.type === "video" ? (
          <div className={`w-full h-full flex items-center justify-center${entry.contained ? " bg-white p-12" : ""}`}>
            <video
              src={entry.src}
              autoPlay
              loop
              muted
              playsInline
              className={entry.contained ? "w-[60%] object-contain" : "w-full h-full object-cover"}
            />
          </div>
        ) : (
          <img
            src={entry.src}
            alt={entry.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        )}
      </div>

      {/* ── Caption row — always visible below the image ── */}
      <div className="flex items-baseline justify-between gap-4 mt-3">
        <h3 className="text-sm font-medium text-text-primary leading-snug">
          {entry.title}
        </h3>
        <span className="text-[11px] font-medium text-text-muted uppercase tracking-widest shrink-0 tabular-nums">
          {entry.organization} · {entry.year}
        </span>
      </div>

      {/* ── Description — reveals on hover / tap ── */}
      <motion.div
        animate={{
          maxHeight: expanded ? 200 : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{
          maxHeight: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.25, delay: expanded ? 0.1 : 0 },
        }}
        className="overflow-hidden"
      >
        <p className="text-xs text-text-secondary leading-relaxed mt-2.5">
          {entry.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {entry.tech.map((t) => (
            <span
              key={t}
              className={`text-[11px] font-medium border rounded-full px-2.5 py-0.5 ${entry.tagClass}`}
            >
              {t}
            </span>
          ))}
        </div>

        {entry.links && entry.links.length > 0 && (
          <div className="flex gap-4 mt-2.5">
            {entry.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-lavender-dark hover:text-text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Experience() {
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
            Previous Software Engineering Intern at RBC on the Innovation &
            Technology DevOps Team. Currently looking for new grad 2027 swe 
            roles in Infrastructure, Systems Engineering and DevOps/SRE. 

          </p>
        </motion.div>

        {/* Gallery grid — 3 equal square tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {timeline.map((entry, i) => (
            <ExpCard key={entry.year} entry={entry} delay={i * 0.1} />
          ))}
        </div>

        {/* Mobile hint */}
        <p className="mt-6 text-center text-xs text-text-muted sm:hidden">
          Tap a card to explore
        </p>
      </div>
    </section>
  );
}
