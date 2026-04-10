"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const clients = [
  { name: "NAS (Ennsvalley Bakery Ltd)", sector: "Food & Bakery", initials: "NAS" },
  { name: "Norbrook Kenya Ltd", sector: "Pharmaceuticals", initials: "NBK" },
  { name: "Trufoods Ltd", sector: "Food Processing", initials: "TRU" },
  { name: "Interconsumer Products Ltd", sector: "FMCG", initials: "ICP" },
  { name: "Indra", sector: "Technology", initials: "IND" },
  { name: "Kibo Seed Company Ltd", sector: "Agriculture", initials: "KSC" },
  { name: "Kenya Police", sector: "Government", initials: "KPS" },
  { name: "Simlaw Seeds", sector: "Agriculture", initials: "SLS" },
  { name: "Gantek / Cold Solutions Kenya", sector: "Cold Storage — Tatu City", initials: "GTK" },
  { name: "Crown Farms Ltd", sector: "Agriculture — Delta, Nigeria", initials: "CFL" },
];

export default function Clients() {
  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">Trusted By</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d2561] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Our Clients</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Reputed organisations across food processing, pharmaceuticals, agriculture, government and cold storage sectors.
          </p>
          <div className="w-12 h-1 rounded-full mx-auto mt-5" style={{ background: "linear-gradient(90deg, #c8102e, #0d2561)" }} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-center group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg, #0d2561, #1a3a8c)" }}
              >
                {client.initials}
              </div>
              <p className="text-[#0d2561] font-semibold text-xs leading-tight mb-1">{client.name}</p>
              <p className="text-gray-400 text-[10px]">{client.sector}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/clients" className="inline-flex items-center gap-2 text-[#c8102e] font-semibold text-sm hover:text-[#0d2561] transition-colors">
            View All Clients & Projects <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
