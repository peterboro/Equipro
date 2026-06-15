import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug, posts } from "@/lib/posts";

const baseUrl = "https://equiprogroup.com";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Article",
      description: "Equipro Group blog article.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const url = `${baseUrl}/blog-news/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Equipro Group",
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Post not found</h2>
            <p className="text-gray-500 mb-6">The requested article could not be found. Please return to the blog listing.</p>
            <Link href="/blog-news" className="inline-flex items-center gap-2 text-[#55b7e5] font-semibold">Back to Blog <ArrowLeft size={14} /></Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <Link href="/blog-news" className="text-sm text-gray-500 hover:text-[#111827]">← Back to Blog</Link>
          </div>

          <article className="prose lg:prose-xl">
            <h1 className="text-[#111827]">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
            </div>
            <div className="w-full h-64 overflow-hidden rounded-xl mb-6 bg-gray-100">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            {post.content.map((p: string, i: number) => (
              <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
            ))}

            <div className="mt-8">
              <h3 className="font-semibold">Further reading</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Contact our engineering team for a project consultation.</li>
                <li>Browse our services for turnkey refrigeration solutions.</li>
                <li>Subscribe to our newsletter for regular updates.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
