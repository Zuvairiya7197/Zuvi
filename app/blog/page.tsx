import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "SEO-focused articles about branding, UI UX, graphic design, website design, and social media marketing."
};

export default function BlogPage() {
  return (
    <main className="px-6 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog"
          title="Notes on premium branding, UI UX, and design systems."
          text="A search-friendly content hub designed to grow topical authority around high-value design services."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group glow-border rounded-[1.5rem]">
              <article className="glass h-full rounded-[1.5rem] p-6">
                <p className="text-sm text-cyan-200">{post.category}</p>
                <h2 className="mt-5 font-display text-2xl font-semibold transition group-hover:text-cyan-100">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{post.excerpt}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.28em] text-neutral-500">
                  {post.date} / {post.readTime}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
