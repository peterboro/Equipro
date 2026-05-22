"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Natural Refrigerants: NH3 & CO2 — The Future of Industrial Cooling",
    slug: "natural-refrigerants-nh3-co2",
    excerpt: "Ammonia (R-717) and CO2 (R-744) offer zero ozone depletion potential, near-zero global warming potential, and superior thermodynamic efficiency for industrial refrigeration.",
    date: "15 March 2024",
    image: "/images/gallery/equipro-project-62.jpg",
    category: "Technology",
  },
  {
    title: "Turnkey Cold Storage: From Design to Commissioning",
    slug: "turnkey-cold-storage-design-commissioning",
    excerpt: "Equipro has built a strong reputation delivering successful turnkey refrigeration projects. We manage every phase — design, installation, testing and handover.",
    date: "20 January 2024",
    image: "/images/gallery/equipro-project-59.jpg",
    category: "Projects",
  },
  {
    title: "Floor Heating for Cold Storage — Preventing Structural Damage",
    slug: "floor-heating-cold-storage",
    excerpt: "Floor heating systems prevent floors from freezing and icing in cold storage facilities, protecting structural integrity and improving energy efficiency.",
    date: "5 November 2023",
    image: "/images/gallery/equipro-project-10.jpg",
    category: "Products",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Latest Updates</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Blog / News</h2>
            <p className="text-gray-500 mt-3 text-sm">Industry insights and technical knowledge from the Equipro team.</p>
          </div>
          <Link href="/blog-news" className="flex items-center gap-2 font-semibold text-sm hover:text-[#111827] transition-colors whitespace-nowrap"
            style={{ color: "#55b7e5" }}>
            See All Articles <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <motion.article key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                <span className="absolute top-4 left-4 text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: "rgba(17,24,39,0.9)" }}>
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                  <Calendar size={12} /> {post.date}
                </div>
                <h3 className="font-bold text-[#111827] text-[18px] mb-3 leading-snug group-hover:text-[#55b7e5] transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog-news/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-3 transition-all duration-200"
                  style={{ color: "#55b7e5" }}>
                  Read More <ArrowRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
