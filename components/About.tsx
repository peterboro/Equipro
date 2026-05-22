"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Award } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Electromechanical systems design, installation & commissioning",
  "Registered NCA 5 — Refrigeration, Air Conditioning & Electrical",
  "Industrial and private projects across all market sectors",
  "Client-focused approach — on time, within budget",
  "Packaging materials, temperature monitoring & home automation",
  "Lighting controls, mechanical & electrical works",
];

const stats = [
  { icon: Award, value: "NCA 5", label: "Registered" },
  { icon: Zap, value: "2007", label: "Established" },
  { icon: Shield, value: "24/7", label: "Support" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f4f6f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20">
              <img
                src="/images/gallery/equipro-project-59.jpg"
                alt="Equipro Engineering Team at Work"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111827]/25 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#111827] text-white p-6 rounded-xl shadow-xl max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>16+</div>
              <div className="text-sky-100 text-sm">Years of Engineering Excellence</div>
            </motion.div>
            {/* Red accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#55b7e5]/10 rounded-xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              About<br /><span className="text-[#55b7e5]">Equipro Group</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
              Equipro Investments (K) Ltd was established in 2007 as an electromechanical systems design, installation and commissioning company. We are specialists in packaging materials, packaging equipment, temperature monitoring, home automation, lighting controls, and mechanical & electrical works.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
              Fully registered with NCA as a refrigeration and air conditioning contractor NCA 5 and Electrical contractor NCA 5, we have a wealth of experience and a proven track record across all market sectors — both industrial and private projects.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <CheckCircle2 size={17} className="text-[#55b7e5] flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-8 mb-8 pt-6 border-t border-gray-200">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon size={20} className="text-[#55b7e5] mx-auto mb-1" />
                  <div className="font-bold text-[#111827] text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.value}</div>
                  <div className="text-gray-500 text-[11px] tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#55b7e5] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg"
            >
              ABOUT US
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
