"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Refrigeration Technologies",
    subtitle: "Freon | NH3 | CO2 (R744)",
    description: "Complete refrigeration technologies for industrial, commercial and cold storage applications.",
    image: "/images/gallery/equipro-project-62.jpg",
    href: "/products/refrigeration-technologies",
    tag: "Refrigeration",
    imageClass: "object-cover",
  },
  {
    title: "Freon Gases",
    subtitle: "R422D | R407C | R134a | R404A",
    description: "Professional refrigerant gas supply for HVAC, cold room and service applications.",
    image: "/images/products/freon/r410a.png",
    href: "/products/freon-gases",
    tag: "Freon",
    imageClass: "object-contain p-5",
  },
  {
    title: "Compressors & Condensers",
    subtitle: "Industrial Grade Equipment",
    description: "High-performance compressors and condensers for demanding refrigeration systems.",
    image: "/images/gallery/equipro-project-57.jpg",
    href: "/products/compressors",
    tag: "Equipment",
    imageClass: "object-cover",
  },
  {
    title: "Cold Room Equipment",
    subtitle: "Panels | Doors | Floor Heating",
    description: "Panels, doors, evaporators and floor heating systems for complete cold storage facilities.",
    image: "/images/floor-heating-installation.jpeg",
    href: "/products/cold-room-equipment",
    tag: "Cold Room",
    imageClass: "object-cover",
  },
  {
    title: "Stainless Steel Water Tanks",
    subtitle: "Storage | Tower Tanks | Fabrication",
    description: "Durable stainless steel water tanks and elevated tower tank systems for commercial and industrial facilities.",
    image: "/images/stainless-steel-water-tower-tanks.jpeg",
    href: "/products/stainless-steel-water-tanks",
    tag: "Water Storage",
    imageClass: "object-cover",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">What We Supply</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Products & Equipment
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From project design to repair & maintenance, we offer complete refrigeration and HVAC solutions.
          </p>
          <div className="w-12 h-1 rounded-full mx-auto mt-5" style={{ background: "linear-gradient(90deg, #55b7e5, #111827)" }} />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:shadow-slate-900/10 transition-shadow flex flex-col h-full"
            >
              <div className="relative h-52 overflow-hidden bg-[#f4f6f8]">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full h-full ${p.imageClass} group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 to-transparent" />
                <span className="absolute top-4 left-4 text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#55b7e5]">
                  {p.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#55b7e5] text-[11px] font-semibold tracking-widest uppercase mb-2 min-h-[28px]">{p.subtitle}</p>
                <h3 className="text-[#111827] font-bold text-[21px] leading-tight mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
                <Link
                  href={p.href}
                  className="group/btn mt-auto inline-flex w-fit items-center justify-center gap-2 rounded-lg border-2 border-[#111827] bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] transition-all duration-200 hover:bg-[#111827] hover:text-white focus:outline-none focus:ring-4 focus:ring-sky-100"
                >
                  REVIEW <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-sm text-[#55b7e5] hover:text-[#111827] transition-colors">
            View All Products & Equipment <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
