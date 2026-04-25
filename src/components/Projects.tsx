import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  gradient: string;
  shimmer: string;
  tagColor: string;
}

const projects: Project[] = [
  {
    title: "BizConnect",
    description:
      "A comprehensive business networking platform connecting small businesses with potential partners, featuring real-time chat, matching algorithms, and analytics dashboards.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT"],
    github: "https://github.com/vanessa-laii/bizconnect",
    demo: "https://bizconnect-demo.vercel.app",
    gradient: "linear-gradient(145deg, #c4b5fd 0%, #7c3aed 55%, #4c1d95 100%)",
    shimmer:
      "linear-gradient(135deg, #a78bfa 0%, #6d28d9 25%, #4c1d95 50%, #7c3aed 75%, #a78bfa 100%)",
    tagColor: "bg-lavender-light text-lavender-dark border-lavender",
  },
  {
    title: "iGEM Platform",
    description:
      "An interactive platform for the International Genetically Engineered Machine competition, showcasing team research, documentation, and achievements.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    github: "https://github.com/vanessa-laii/igem-platform",
    demo: "https://igem-platform.vercel.app",
    gradient: "linear-gradient(145deg, #86efac 0%, #22c55e 55%, #15803d 100%)",
    shimmer:
      "linear-gradient(135deg, #4ade80 0%, #16a34a 25%, #15803d 50%, #22c55e 75%, #4ade80 100%)",
    tagColor: "bg-mint-light text-green-700 border-mint",
  },
  {
    title: "MacWater Analytics",
    description:
      "A water quality monitoring and analytics dashboard for McMaster University with interactive visualizations and data-driven insights.",
    tech: ["Vue.js", "Python", "Flask", "D3.js", "SQLite", "Chart.js"],
    github: "https://github.com/vanessa-laii/macwater-analytics",
    gradient: "linear-gradient(145deg, #7dd3fc 0%, #0ea5e9 55%, #0284c7 100%)",
    shimmer:
      "linear-gradient(135deg, #38bdf8 0%, #0284c7 25%, #0369a1 50%, #0ea5e9 75%, #38bdf8 100%)",
    tagColor: "bg-sky-light text-blue-700 border-sky",
  },
  {
    title: "Spotify Music Analyzer",
    description:
      "A music analytics application that connects to Spotify API to visualize listening habits, top tracks, and personalized audio feature breakdowns.",
    tech: ["React", "Spotify API", "Node.js", "Express", "Chart.js", "OAuth"],
    github: "https://github.com/vanessa-laii/spotify-analyzer",
    demo: "https://spotify-analyzer-demo.netlify.app",
    gradient: "linear-gradient(145deg, #fdba74 0%, #f97316 55%, #ea580c 100%)",
    shimmer:
      "linear-gradient(135deg, #fb923c 0%, #ea580c 25%, #c2410c 50%, #f97316 75%, #fb923c 100%)",
    tagColor: "bg-peach-light text-orange-700 border-peach",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
      {/* ── Square image — no rounded corners ── */}
      <div className="group aspect-square overflow-hidden relative">
        {/* Gradient fill */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          style={{ background: project.gradient }}
        />

        {/* Video shimmer on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: project.shimmer,
            backgroundSize: "200% 200%",
            animation: "videoShimmer 3s ease infinite",
          }}
        />

        {/* Play badge on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="white"
              className="ml-0.5"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Caption row — always visible ── */}
      <div className="flex items-baseline justify-between gap-4 mt-3">
        <h3 className="text-sm font-medium text-text-primary">
          {project.title}
        </h3>
        <span className="text-[11px] font-medium text-text-muted uppercase tracking-widest shrink-0">
          {project.tech[0]} · {project.tech[1]}
        </span>
      </div>

      {/* ── Toggle button ── */}
      <button
        onClick={() => setExpanded((p) => !p)}
        className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-lavender-dark hover:text-text-primary transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? "Hide details" : "Learn more"}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="inline-block leading-none"
        >
          ↓
        </motion.span>
      </button>

      {/* ── Permanent details panel ── */}
      <motion.div
        animate={{
          maxHeight: expanded ? 320 : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{
          maxHeight: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.25, delay: expanded ? 0.1 : 0 },
        }}
        className="overflow-hidden"
      >
        <div className="pt-3 space-y-3">
          {/* Description */}
          <p className="text-xs text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`text-[11px] font-medium border rounded-full px-2.5 py-0.5 ${project.tagColor}`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 pt-0.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              <GithubIcon size={13} />
              Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-lavender-dark hover:text-text-primary transition-colors"
              >
                <ExternalLink size={12} strokeWidth={2} />
                Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 w-full bg-bg-elevated/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-lavender-dark mb-3">
            Projects
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-text-primary">
            Things I've built
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            A selection of projects spanning full-stack development, data
            visualization, and developer tools.
          </p>
        </motion.div>

        {/* 2 × 2 gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
