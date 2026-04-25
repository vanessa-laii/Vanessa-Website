import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const photos = [
  { id: 1, src: "/hero-me.jpg",      alt: "Photo 1" },
  { id: 2, src: "/hero-study.jpg",   alt: "Photo 2" },
  { id: 3, src: "/hero-arties.jpg",  alt: "Photo 3" },
  { id: 4, src: "/hero-rbg.jpg",     alt: "Photo 4" },
];

const interests = [
  "Site Reliability Engineering",
  "DevOps & Automation",
  "UI/UX Design",
  "Full Stack Dev",
  "Human-Centred Tech",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section id="about" className="relative py-24 w-full">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="px-4 sm:px-6 lg:px-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-medium tracking-widest uppercase text-lavender-dark mb-8"
        >
          About
        </motion.p>

        {/* Statement — full width, large */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.3] tracking-tight text-text-primary max-w-4xl mb-16"
        >
          I think deeply about systems, people, and reliable software. My focus
          is on{" "}
          <span className="text-lavender-dark">
            automation and engineering that holds up under pressure
          </span>{" "}
          — invisible infrastructure that lets developers move faster and users
          never notice the machinery behind the scenes.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Identity */}
            <div>
              <p className="text-lg sm:text-xl font-medium text-text-primary leading-relaxed">
                Engineer, designer,{" "}
                <span className="text-lavender-dark">&</span> creative —
              </p>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                always seeking new adventures.
              </p>
            </div>

            {/* Interests */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium rounded-full bg-bg-elevated border border-border text-text-secondary px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                Education
              </p>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-lavender-light flex items-center justify-center shrink-0">
                  <GraduationCap size={15} className="text-lavender-dark" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    McMaster University
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    Bachelor of Engineering, Software Engineering
                  </p>
                  {/* Update year below */}
                  <p className="text-xs text-text-muted mt-1">
                    Expected 2027 · Hamilton, ON
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-text-muted">
                <MapPin size={14} className="shrink-0" />
                Hamilton, Ontario
              </div>

              {/* Favourite spots — 3 columns */}
              <div className="grid grid-cols-3 gap-2 w-fit">
                {[
                  {
                    label: "Cafes",
                    dot: "bg-lavender",
                    items: ["One For All", "Synonym", "Phin coffee bar", "Detour Café", "Daigyo"],
                  },
                  {
                    label: "Food Spots",
                    dot: "bg-mint",
                    items: ["BAB Korean", "Artie's", "Pinbones Fish Market", "Menya Kyu", "Sio Bento"],
                  },
                  {
                    label: "Nature",
                    dot: "bg-rose",
                    items: ["Tiffany Falls", "Bayfront Park", "Gage Park", "Cootes Paradise", "Royal Botanical Gardens"],
                  },
                ].map((col) => (
                  <div
                    key={col.label}
                    className="border border-border rounded-xl p-3.5 bg-bg-elevated/60"
                  >
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-text-muted mb-2.5">
                      {col.label}
                    </p>
                    <ul className="space-y-1.5">
                      {col.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-text-secondary"
                        >
                          <span className={`h-1 w-1 rounded-full shrink-0 ${col.dot}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: photo grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="grid grid-cols-2 gap-2 w-full lg:w-[480px]"
          >
            {photos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: "easeOut" }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
