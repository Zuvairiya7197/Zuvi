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
    <main className="px-4 pb-[clamp(4rem,8svh,6rem)] pt-[clamp(7rem,14svh,8rem)] md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog"
          title="Notes on premium branding, UI UX, and design systems."
          text="A search-friendly content hub designed to grow topical authority around high-value design services."
        />
        <div className="mt-[clamp(2rem,5svh,3rem)] grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group glow-border rounded-[1.5rem]">
              <article className="glass h-full rounded-[1.25rem] p-[clamp(1.25rem,3vw,1.5rem)]">
                <p className="text-sm text-[#d5ad6f]">{post.category}</p>
                <h2 className="mt-5 font-display text-2xl font-semibold transition group-hover:text-[#f4d79d]">
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
