import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fullText = "Hi, I'm Vanessa Lai.";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1200);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, var(--color-bg) 75%),
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      />

      {/* Soft gradient orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-lavender-light/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-rose-light/80 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-mint-light/80 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-lavender-dark">
              Software Engineer & Designer
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-text-primary"
          >
            {typed}
            {showCursor && (
              <span className="ml-0.5 inline-block w-[3px] h-[0.85em] bg-lavender-dark animate-pulse align-middle" />
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 space-y-3 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl"
          >
            <p>
              Software Engineering student at{" "}
              <span className="font-medium text-text-primary">
                McMaster University
              </span>
              .
            </p>
            <p>
              Experienced in{" "}
              <Highlight color="lavender">DevOps</Highlight>,{" "}
              <Highlight color="rose">Full Stack Development</Highlight>, and{" "}
              <Highlight color="mint">SRE</Highlight>.
            </p>
            <p className="text-text-muted text-base sm:text-lg">
              Avid matcha drinker and coffee lover based in Toronto, Canada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-text-primary text-bg px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              View my work
              <span aria-hidden>→</span>
            </a>
            <a
              href="/Vanessa_Lai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lavender-light text-lavender-dark border border-lavender px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:bg-lavender"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex items-center gap-6"
          >
            <StatusPill
              label="Previous Intern"
              value="Royal Bank of Canada (RBC)"
            />
            <StatusPill
              label="Looking for"
              value="New Grad 2027"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Highlight({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "lavender" | "rose" | "mint" | "sky";
}) {
  const bgMap = {
    lavender: "bg-lavender-light",
    rose: "bg-rose-light",
    mint: "bg-mint-light",
    sky: "bg-sky-light",
  };
  return (
    <span
      className={`${bgMap[color]} px-1.5 py-0.5 rounded-md font-medium text-text-primary transition-colors`}
    >
      {children}
    </span>
  );
}

function StatusPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-bg-elevated/60 backdrop-blur-sm px-4 py-2.5">
      <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
        {label}
      </span>
      <span className="h-4 w-px bg-border" />
      <span className="text-sm font-medium text-text-primary">{value}</span>
    </div>
  );
}
