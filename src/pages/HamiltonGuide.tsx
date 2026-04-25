import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Venue {
  name: string;
  note: string;
  emoji: string;
  gradient: string;
  tags?: string[];
}

const naturalSpots = [
  {
    name: "Tiffany Falls",
    description:
      "A 21-metre waterfall tucked between Ancaster and Dundas, reached by a short trail through the forest. Flow peaks in early spring — try to catch it then.",
    emoji: "🌊",
    tip: "Wear shoes with grip. The trail gets slippery near the base.",
  },
  {
    name: "Bayfront Park",
    description:
      "Hamilton's waterfront gem along Lake Ontario. Walk the pier, watch the sunset, or just sit and decompress from a long week of classes.",
    emoji: "🌅",
    tip: "Best at golden hour. Bring a coffee from Downtown first.",
  },
  {
    name: "Gage Park",
    description:
      "A beloved community park famous for its rose gardens and greenhouse, free for everyone to visit. About 40 minutes by bus from campus.",
    emoji: "🌹",
    tip: "Pair with a treat from a nearby café after — the walk back earns it.",
  },
  {
    name: "Cootes Paradise",
    description:
      "A massive wetland sanctuary that borders McMaster's campus. Trails for all fitness levels, and stunning in every season. Perfect for a group hike.",
    emoji: "🌿",
    tip: "The trail behind Les Prince Hall drops you right in. No transit needed.",
  },
];

const restaurants: Venue[] = [
  {
    name: "The Mule",
    note: "Mexican-inspired comfort food done right. Split the tacos and appetizers with the table — it's built for sharing. Casual, loud, and always fun.",
    emoji: "🌮",
    gradient: "linear-gradient(135deg, #86efac, #22c55e)",
    tags: ["Mexican", "Casual", "Great for groups"],
  },
  {
    name: "Menya Kyu",
    note: "A focused menu centered on chicken ramen, each bowl feeling thoughtfully composed. Excellent starters too — don't skip the karaage.",
    emoji: "🍜",
    gradient: "linear-gradient(135deg, #fdba74, #f97316)",
    tags: ["Ramen", "Japanese", "Cozy"],
  },
  {
    name: "Tondou Ramen",
    note: "Solid tonkotsu ramen in a compact, cozy space. Great gyoza. The broth runs a touch cooler than I'd like, but the flavour is there.",
    emoji: "🍜",
    gradient: "linear-gradient(135deg, #fca5a5, #ef4444)",
    tags: ["Ramen", "Japanese", "Small space"],
  },
  {
    name: "Ramen Isshin",
    note: "The tsukemen and roasted garlic ramen are the standouts. Broths can run salty — order a water with your bowl and thank me later.",
    emoji: "🍜",
    gradient: "linear-gradient(135deg, #c4b5fd, #7c3aed)",
    tags: ["Ramen", "Japanese", "Must-try tsukemen"],
  },
  {
    name: "Mystic Ramen",
    note: "More inventive than traditional — playful flavour combinations and a fun atmosphere. The thick pork belly slices are a non-negotiable order.",
    emoji: "🍜",
    gradient: "linear-gradient(135deg, #7dd3fc, #0ea5e9)",
    tags: ["Ramen", "Inventive", "Pork belly"],
  },
  {
    name: "Nannaa Persian Eatery",
    note: "Westdale's best kept secret. Generous portions, exceptional kabobs, and a warmth to the place that makes you want to linger.",
    emoji: "🫕",
    gradient: "linear-gradient(135deg, #fde68a, #f59e0b)",
    tags: ["Persian", "Westdale", "Large portions"],
  },
  {
    name: "The Burnt Tongue",
    note: "Multiple Hamilton locations. A hearty bowl of soup paired with a sandwich is the perfect cold-weather reset between classes.",
    emoji: "🥣",
    gradient: "linear-gradient(135deg, #d9f99d, #84cc16)",
    tags: ["Soup", "Sandwich", "Multiple locations"],
  },
  {
    name: "BAB Korean Food",
    note: "My personal favourite close to campus, full stop. The fried chicken is non-negotiable. Small shop with limited seating — arrive early or be patient.",
    emoji: "🍗",
    gradient: "linear-gradient(135deg, #fda4af, #e11d48)",
    tags: ["Korean", "Near campus", "Fried chicken"],
  },
  {
    name: "Fuwa Fuwa",
    note: "Japanese-style soufflé pancakes done perfectly. A weekend brunch destination or the reward you give yourself after a hard week.",
    emoji: "🥞",
    gradient: "linear-gradient(135deg, #f5d0fe, #d946ef)",
    tags: ["Japanese", "Pancakes", "Westdale"],
  },
  {
    name: "Chicken Plus",
    note: "Korean fried chicken with great flavour variety and solid sides. Mostly takeout-friendly but a few seats are available inside.",
    emoji: "🍗",
    gradient: "linear-gradient(135deg, #fed7aa, #ea580c)",
    tags: ["Korean", "Fried Chicken", "Takeout"],
  },
];

const coffeeDowntown: Venue[] = [
  {
    name: "One For All",
    note: "My favourite café in Hamilton — and I've tried nearly all of them. Not built for studying, built for enjoying. Every single drink is excellent.",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #c4b5fd, #7c3aed)",
    tags: ["Ambiance", "No studying", "Must visit"],
  },
  {
    name: "Mulberry Coffee Shop",
    note: "The best spot in the city for actually getting work done. Outlets, reliable wifi, solid coffee. Gets louder as the day goes on — come in the morning.",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #86efac, #22c55e)",
    tags: ["Study-friendly", "Outlets + WiFi"],
  },
  {
    name: "Synonym",
    note: "Exceptional coffee, thoughtful food, a jazz night on weekends. Has a distinct artistic energy that makes a two-hour visit feel too short.",
    emoji: "🎵",
    gradient: "linear-gradient(135deg, #fda4af, #f43f5e)",
    tags: ["Artsy", "Jazz nights", "WiFi"],
  },
  {
    name: "Durand Coffee",
    note: "A quieter neighbourhood shop — smaller, more intimate, with wifi. Not the most ergonomic seating, but great for a focused hour.",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #fdba74, #f97316)",
    tags: ["Neighbourhood", "WiFi", "Quiet"],
  },
];

const coffeeWestdale: Venue[] = [
  {
    name: "Paisleys",
    note: "No wifi or outlets, but the coffee and brunch sandwiches are worth the trade-off. More of a social stop between classes than a study session.",
    emoji: "🥐",
    gradient: "linear-gradient(135deg, #fde68a, #f59e0b)",
    tags: ["Brunch", "Social", "No WiFi"],
  },
  {
    name: "Mikels",
    note: "A reliable study option with wifi and outlets. Easy enough to find a spot for 1–2 people; can get noisy later in the afternoon.",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #bfdbfe, #3b82f6)",
    tags: ["Study-friendly", "Outlets + WiFi"],
  },
];

const coffeeDundas: Venue[] = [
  {
    name: "Detour Café",
    note: "Worth the trip out to Dundas. One of the best espresso drinks I've had in the entire region. Go once and you'll understand why people make the drive.",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #d1fae5, #059669)",
    tags: ["Dundas", "Exceptional coffee", "Destination"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      {/* Visual placeholder */}
      <div
        className="h-32 flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-105"
        style={{ background: venue.gradient }}
      >
        {venue.emoji}
      </div>
      {/* Content */}
      <div className="p-5">
        <h4 className="font-serif text-base font-semibold text-text-primary mb-2">
          {venue.name}
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          {venue.note}
        </p>
        {venue.tags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {venue.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium rounded-full bg-bg px-2.5 py-0.5 text-text-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function NatureCard({
  spot,
  index,
}: {
  spot: (typeof naturalSpots)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="flex gap-5 p-5 rounded-2xl border border-border bg-bg-elevated hover:shadow-md transition-all duration-300 group"
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center text-2xl">
        {spot.emoji}
      </div>
      <div>
        <h4 className="font-serif text-base font-semibold text-text-primary mb-1">
          {spot.name}
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          {spot.description}
        </p>
        <p className="text-xs text-lavender-dark mt-2 font-medium">
          ↳ {spot.tip}
        </p>
      </div>
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-lavender-dark mb-3">
      {children}
    </p>
  );
}

function NeighbourhoodHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <MapPin size={14} className="text-text-muted shrink-0" />
      <h3 className="text-sm font-semibold tracking-wide uppercase text-text-muted">
        {children}
      </h3>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HamiltonGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #fff7ed 0%, #fde68a 30%, #ede9fe 70%, #faf9f7 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 py-20 sm:py-28">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8 group"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              Back to home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full bg-peach-light text-orange-700 px-3 py-1 text-xs font-medium">
                Lifestyle
              </span>
              <span className="text-text-muted text-xs">·</span>
              <span className="text-xs text-text-muted">September 6, 2025</span>
              <span className="text-text-muted text-xs">·</span>
              <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                <Clock size={11} />7 min read
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary">
              Vanessa's Hamilton Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Waterfalls, world-class ramen, and coffee shops worth the detour.
              Everything I wish someone had told me when I first arrived at
              McMaster.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 lg:px-8 py-16 sm:py-20">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="text-lg text-text-secondary leading-[1.85]">
            Hamilton, Ontario is so much more than McMaster's backyard. Waterfalls
            hidden in ravines, a food scene punching well above its size, and
            coffee shops worth the detour — this city has a way of surprising
            you. After years of exploring every corner of it, these are the spots
            I keep returning to, and the ones I send every new student straight
            to.
          </p>
        </motion.div>

        {/* ── Natural Spots ────────────────────────────────── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <SectionLabel>Nature</SectionLabel>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-primary mb-3">
              Must-visit natural spots
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Hamilton sits on the Niagara Escarpment — which means waterfalls
              are genuinely around the corner. These four spots are the ones
              I'd send any visitor to first.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:gap-4">
            {naturalSpots.map((spot, i) => (
              <NatureCard key={spot.name} spot={spot} index={i} />
            ))}
          </div>
        </section>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Food Scene ───────────────────────────────────── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <SectionLabel>Food</SectionLabel>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-primary mb-3">
              The food scene
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Hamilton's food scene is quietly exceptional — and wildly
              underrated. These are my personal favourites, the places I
              would revisit without hesitation. Most are within a short transit
              ride of campus.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((venue) => (
              <VenueCard key={venue.name} venue={venue} />
            ))}
          </div>
        </section>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Coffee ───────────────────────────────────────── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10"
          >
            <SectionLabel>Coffee</SectionLabel>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-primary mb-3">
              My favourite coffee spots
            </h2>
            <p className="text-text-secondary leading-relaxed">
              As a student and lifelong coffee enthusiast, I've worked my way
              through nearly every café in the city. These are the ones that
              made the cut — organized by neighbourhood so you know what's
              closest.
            </p>
          </motion.div>

          {/* Downtown */}
          <div className="mb-12">
            <NeighbourhoodHeading>Downtown Hamilton</NeighbourhoodHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {coffeeDowntown.map((venue) => (
                <VenueCard key={venue.name} venue={venue} />
              ))}
            </div>
          </div>

          {/* Westdale */}
          <div className="mb-12">
            <NeighbourhoodHeading>Westdale</NeighbourhoodHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {coffeeWestdale.map((venue) => (
                <VenueCard key={venue.name} venue={venue} />
              ))}
            </div>
          </div>

          {/* Dundas */}
          <div>
            <NeighbourhoodHeading>Dundas</NeighbourhoodHeading>
            <div className="max-w-sm">
              {coffeeDundas.map((venue) => (
                <VenueCard key={venue.name} venue={venue} />
              ))}
            </div>
          </div>
        </section>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-lavender bg-lavender-light/40 p-8"
        >
          <p className="font-serif text-lg text-text-primary leading-relaxed">
            "Hamilton surprised me. It'll probably surprise you too — just
            give it the chance."
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Have a spot I missed? Send me a note at{" "}
            <a
              href="mailto:vanessa.sw.lai@gmail.com"
              className="text-lavender-dark hover:underline"
            >
              vanessa.sw.lai@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>
          <Link
            to="/#blog"
            className="text-sm font-medium text-lavender-dark hover:text-text-primary transition-colors"
          >
            All posts
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
