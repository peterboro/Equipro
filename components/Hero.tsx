"use client";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Wind, Wrench } from "lucide-react";
import Link from "next/link";

const highlights = [
  { icon: Snowflake, label: "Industrial Refrigeration" },
  { icon: Wind, label: "HVAC Systems" },
  { icon: Wrench, label: "Facility Maintenance" },
];

const stats = [
  { num: "2007", label: "Established" },
  { num: "16+", label: "Years Experience" },
  { num: "NCA 5", label: "Registered" },
  { num: "24/7", label: "Support Available" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[620px] md:min-h-[700px] flex flex-col justify-between overflow-hidden">
      {/* Background — real Equipro cooling technologies image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cooling-technologies-bg.jpg"
          alt="Industrial Cooling Technologies"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(110deg, rgba(6,12,35,0.93) 0%, rgba(13,37,97,0.84) 45%, rgba(6,12,35,0.68) 100%)"
        }} />
        <div className="absolute top-0 right-0 w-1/3 h-full" style={{
          background: "linear-gradient(to left, rgba(200,16,46,0.08), transparent)"
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 border text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-7"
              style={{ background: "rgba(200,16,46,0.18)", borderColor: "rgba(200,16,46,0.4)", color: "#fca5a5" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#c8102e" }} />
              NCA Registered — Nairobi, Kenya
            </motion.div>

            <h1
              className="font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.02em", fontSize: "clamp(52px, 7vw, 84px)" }}
            >
              Power You
              <br />
              <span style={{ background: "linear-gradient(135deg, #c8102e, #e8455f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Can Trust
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 leading-relaxed mb-7 max-w-xl"
              style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
            >
              Equipro Investments (K) Ltd — specialist contractors in Heating, Refrigeration, Ventilation, Air Conditioning (HVAC) and Facility Maintenance Mechanical & Electrical Services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-9"
            >
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-white text-xs font-medium"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <h.icon size={13} style={{ color: "#fca5a5" }} />
                  {h.label}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-row flex-wrap gap-4 items-center"
            >
              <Link href="/services"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg text-sm text-white hover:opacity-90"
                style={{ background: "#c8102e" }}>
                Our Services <ArrowRight size={15} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm text-white hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}>
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 w-full"
        style={{ background: "rgba(6,12,35,0.80)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-bold text-white text-xl md:text-3xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</div>
                <div className="text-gray-400 text-xs tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
