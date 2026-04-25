import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tag: string;
  tagColor: string;
  href: string;
  isExternal?: boolean;
}

const posts: BlogPost[] = [
  {
    title: "Vanessa's Hamilton Guide",
    date: "September 6, 2025",
    readTime: "7 min",
    excerpt:
      "Waterfalls, world-class ramen, and coffee shops worth the detour. Everything I wish someone had told me when I first arrived at McMaster.",
    tag: "Lifestyle",
    tagColor: "bg-peach-light text-orange-700",
    href: "/blog/hamilton-guide",
  },
  {
    title: "My Journey at McMaster University",
    date: "September 1, 2025",
    readTime: "5 min",
    excerpt:
      "Reflections on academic life, campus culture, clubs, and the lessons learned navigating university as a software engineering student.",
    tag: "University",
    tagColor: "bg-sky-light text-blue-700",
    href: "#",
  },
  {
    title: "Lessons from Software Engineering",
    date: "August 30, 2025",
    readTime: "6 min",
    excerpt:
      "Technical foundations, learnings from industry at RBC, and thoughts on continuous growth in the ever-evolving world of software.",
    tag: "Engineering",
    tagColor: "bg-lavender-light text-lavender-dark",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-lavender-dark mb-3">
            Blog
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-text-primary">
            Thoughts & stories
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
            A digital diary of my experiences, thoughts, and journey at
            McMaster.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.title} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const inner = (
    <>
      <div className="flex items-center justify-between mb-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${post.tagColor}`}
        >
          {post.tag}
        </span>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span>{post.readTime} read</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
      </div>

      <h3 className="font-serif text-lg font-semibold text-text-primary mb-2 group-hover:text-lavender-dark transition-colors duration-200">
        {post.title}
      </h3>

      <p className="text-sm text-text-secondary leading-relaxed flex-1">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-lavender-dark">
        Read more
        <ArrowRight
          size={13}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </>
  );

  const className =
    "group flex flex-col rounded-2xl border border-border bg-bg-elevated p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-border-hover hover:-translate-y-0.5";

  const motionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, margin: "-60px" },
    transition: { duration: 0.55, delay: index * 0.1, ease: "easeOut" as const },
  };

  if (post.href.startsWith("/blog/")) {
    return (
      <motion.div {...motionProps}>
        <Link to={post.href} className={className}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.a href={post.href} {...motionProps} className={className}>
      {inner}
    </motion.a>
  );
}
