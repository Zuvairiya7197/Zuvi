import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main className="px-6 pb-24 pt-32 md:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-200">{post.category}</p>
        <h1 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">{post.title}</h1>
        <p className="mt-5 text-sm uppercase tracking-[0.24em] text-neutral-500">
          {post.date} / {post.readTime}
        </p>
        <p className="mt-10 text-xl leading-9 text-neutral-200">{post.excerpt}</p>
        <div className="mt-12 space-y-7 text-lg leading-9 text-neutral-300">
          <p>
            Premium design is rarely about adding more visual effects. It is about establishing a clear hierarchy,
            choosing a memorable visual language, and then repeating it with enough flexibility to stay useful.
          </p>
          <p>
            The strongest design systems create a recognizable rhythm across every touchpoint: typography, spacing,
            image direction, UI states, motion, social templates, and sales collateral.
          </p>
          <p>
            For growing brands, that consistency improves trust and speeds up execution. Teams spend less time
            inventing from scratch and more time refining the message that needs to land.
          </p>
        </div>
      </article>
    </main>
  );
}
