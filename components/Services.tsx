"use client";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Wind, Wrench, Zap, Monitor, Package } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Snowflake,
    title: "Industrial Refrigeration",
    description: "Complete turnkey industrial refrigeration solutions — project design, installation, commissioning and 24/7 maintenance using Freon, NH3 and CO2 (R744) technologies.",
    href: "/services/industrial-refrigeration",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    description: "Heating, ventilation and air conditioning systems for commercial, industrial and residential applications. Supply, installation and maintenance.",
    href: "/services/hvac-systems",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Wrench,
    title: "Facility Maintenance",
    description: "Comprehensive mechanical and electrical facility maintenance services. Proactive maintenance programs to minimise downtime and protect your assets.",
    href: "/services/facility-maintenance",
    color: "from-red-600 to-red-800",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "NCA 5 registered electrical contractor offering installation, maintenance and repair of electrical systems for industrial and commercial facilities.",
    href: "/services/electrical-services",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Monitor,
    title: "PLC & Automation",
    description: "PLC and automation systems for instant monitoring of all refrigeration data. Parameter measurement and system optimisation for reliable, efficient operation.",
    href: "/services/plc-automation",
    color: "from-indigo-500 to-purple-700",
  },
  {
    icon: Package,
    title: "Packaging Line Services",
    description: "Packaging materials, packaging equipment supply, installation and maintenance. Inkjet supply, installation and maintenance services for production lines.",
    href: "/services/packaging",
    color: "from-green-500 to-emerald-700",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d2561] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-red-400 text-xs font-bold tracking-widest uppercase mb-3">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Our Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Need a refrigeration solution? We offer everything from project design to repair & maintenance.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#c8102e] to-[#0d2561] rounded-full mx-auto mt-5" style={{ background: "linear-gradient(90deg, #c8102e, #4a7fd4)" }} />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="service-card relative bg-white/[0.05] border border-white/10 rounded-2xl p-7 group cursor-pointer hover:bg-white/[0.09] transition-colors overflow-hidden"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
              <Link href={service.href} className="inline-flex items-center gap-1.5 text-red-400 text-sm font-semibold hover:gap-3 transition-all duration-200">
                LEARN MORE <ArrowRight size={13} />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c8102e] to-[#4a7fd4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
          <Link href="/services"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:bg-white/10 text-sm">
            View All Services <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
