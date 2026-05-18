"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Refrigeration Technologies",
    subtitle: "Freon · NH3 · CO2 (R744)",
    description: "Complete refrigeration solutions using Freon, Ammonia (NH3), and CO2 (R744) natural refrigerants — eco-friendly, energy-efficient and cost-effective.",
    image: "/images/ammonia.jpg",
    href: "/products/refrigeration-technologies",
    tag: "Refrigeration",
  },
  {
    title: "Compressors & Condensers",
    subtitle: "Industrial Grade Equipment",
    description: "High-performance compressors and condensers for industrial refrigeration systems. Piston, screw and hermetic types for all applications.",
    image: "/images/compressors.png",
    href: "/products/compressors",
    tag: "Equipment",
  },
  {
    title: "Cold Room Equipment",
    subtitle: "Panels · Doors · Floor Heating",
    description: "Cold room panels, doors, evaporators, glycol coolers and floor heating systems for complete cold storage facilities.",
    image: "/images/floor-heating.png",
    href: "/products/cold-room-equipment",
    tag: "Cold Room",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">What We Supply</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d2561] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Products & Equipment
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From project design to repair & maintenance — we offer complete refrigeration and HVAC solutions.
          </p>
          <div className="w-12 h-1 rounded-full mx-auto mt-5" style={{ background: "linear-gradient(90deg, #c8102e, #0d2561)" }} />
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {products.map((p) => (
            <motion.div key={p.title} variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="relative h-52 overflow-hidden bg-gray-50">
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081232]/60 to-transparent" />
                <span className="absolute top-4 left-4 text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: "rgba(200,16,46,0.9)" }}>{p.tag}</span>
              </div>
              <div className="p-6">
                <p className="text-[#c8102e] text-xs font-semibold tracking-widest uppercase mb-1">{p.subtitle}</p>
                <h3 className="text-[#0d2561] font-bold text-xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.description}</p>
                <Link href={p.href}
                  className="group/btn inline-flex items-center gap-2 font-semibold text-sm border-2 px-5 py-2.5 rounded-lg transition-all duration-200 hover:text-white"
                  style={{ color: "#0d2561", borderColor: "#0d2561" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0d2561"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  REVIEW <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-sm hover:text-[#0d2561] transition-colors"
            style={{ color: "#c8102e" }}>
            View All Products & Equipment <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
