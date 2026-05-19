import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import { posts, categories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog & News | Equipro Investments — HVAC & Refrigeration Insights",
  description: "Technical articles, industry news and project updates from the Equipro engineering team in Nairobi, Kenya.",
};

// posts and categories are imported from lib/posts

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <Navbar />
      <PageHero
        title="Blog / News"
        subtitle="Technical insights, industry knowledge and project updates from the Equipro engineering team."
        breadcrumbs={[{ label: "Blog / News" }]}
        image="/images/cooling-technologies-bg.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${cat === "All" ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#0d2561]"}`}
                style={cat === "All" ? { background: "#0d2561" } : {}}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <Link href={`/blog-news/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:shadow-blue-900/12 transition-all duration-300 mb-12 hover:-translate-y-1">
            <div className="relative h-[280px] md:h-auto overflow-hidden bg-gray-100">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a162c]/40 to-transparent" />
              <span className="absolute top-4 left-4 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full" style={{ background: "#c8102e" }}>Featured</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-blue-50 text-[#0d2561] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit">{featured.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d2561] mb-3 group-hover:text-[#c8102e] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{featured.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-[#c8102e] font-semibold text-sm group-hover:gap-4 transition-all">
                Read Article <ArrowRight size={14} />
              </div>
            </div>
          </Link>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog-news/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ background: "rgba(13,37,97,0.9)" }}>{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#0d2561] text-[18px] mb-2 leading-snug group-hover:text-[#c8102e] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{post.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-[#c8102e] font-semibold text-[12px] group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
