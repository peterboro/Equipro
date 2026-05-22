"use client";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #050505 0%, #111827 50%, #1f2937 100%)" }}>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      {/* Red accent glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "rgba(85,183,229,0.12)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl" style={{ background: "rgba(17,24,39,0.28)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-sky-300 text-xs font-bold tracking-widest uppercase mb-3">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Contact Us Now</h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Call us immediately for all your questions about our products and services, pricing, and project delivery. Our team is ready 24/7.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+254722101946"
              className="group flex items-center gap-3 bg-white hover:bg-gray-50 text-[#111827] font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-xl hover:scale-[1.02]"
            >
              <div className="w-9 h-9 bg-[#55b7e5] rounded-lg flex items-center justify-center group-hover:bg-[#2f9ccc] transition-colors">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 tracking-wider uppercase">Call Now</div>
                <div className="text-sm font-bold">0722-101946</div>
              </div>
            </a>
            <Link
              href="/contact"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/70 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:bg-white/10"
            >
              <Mail size={18} /> Contact Form
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
