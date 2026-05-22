"use client";
import { motion } from "framer-motion";
import { Target, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Customer First Philosophy",
    description: "At Equipro, the client is everybody's business. We respond to customer needs and maintain the quality our customers know us for.",
    color: "#55b7e5",
  },
  {
    icon: Zap,
    title: "Diversified Expertise",
    description: "Diversified business interests spanning refrigeration, HVAC, electrical, automation and packaging — a one-stop engineering partner.",
    color: "#111827",
  },
  {
    icon: Shield,
    title: "On Time, Within Budget",
    description: "Our professional approach to all project types ensures successful completion on time and within budget — every time.",
    color: "#374151",
  },
  {
    icon: Users,
    title: "24/7 Service Support",
    description: "Equipro is ready to provide round-the-clock maintenance and repair service support with our dedicated technical service team.",
    color: "#55b7e5",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Our Strengths</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Why Choose Equipro?</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            High customer focus, committed to providing solutions and "Customer Care" — the pillars of Equipro Group.
          </p>
          <div className="w-12 h-1 rounded-full mx-auto mt-5" style={{ background: "linear-gradient(90deg, #55b7e5, #111827)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-[#f4f6f8] hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl p-7 text-center hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300"
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${f.color}18` }}
              >
                <f.icon size={26} style={{ color: f.color }} />
              </div>
              <h3 className="font-bold text-[#111827] text-lg mb-3 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
