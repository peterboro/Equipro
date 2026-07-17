"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientLogo from "@/components/ui/ClientLogo";

const clients = [
  { name: "NAS (Ennsvalley Bakery Ltd)", sector: "Food & Bakery", initials: "NAS", localLogo: "/images/logos/ennsvalleybakery.jpg" },
  { name: "Norbrook Kenya Ltd", sector: "Pharmaceuticals", initials: "NBK", localLogo: "/images/logos/norbrook.png" },
  { name: "Trufoods Ltd", sector: "Food Processing", initials: "TRU", localLogo: "/images/logos/trufoods.png" },
  { name: "Interconsumer Products Ltd", sector: "FMCG", initials: "ICP", localLogo: "/images/logos/interconsumer.png" },
  { name: "Kibo Seed Company Ltd", sector: "Agriculture", initials: "KSC", localLogo: "/images/logos/KiboSeed.jpg" },
  { name: "Simlaw Seeds", sector: "Agriculture", initials: "SLS", localLogo: "/images/logos/simlawseeds.png" },
  { name: "Crown Farms Ltd", sector: "Agriculture — Delta, Nigeria", initials: "CFL", localLogo: "/images/logos/crownfarms.png" },
  { name: "SBI Impianti (SARL)", sector: "Cold Storage — Ivory Coast", initials: "SBI", localLogo: "/images/logos/sbimpianti.png" },
  { name: "Glacier Products Ltd (Dairyland)", sector: "Cold Storage — Tanzania & Kenya", initials: "GPL", localLogo: "/images/logos/dairyland.png" },
  { name: "Don Bosco Utume", sector: "Education & Water Infrastructure", initials: "DBU", localLogo: "/images/logos/don-bosco-utume.jpeg" },
  { name: "White Field Agroprocessing Ltd", sector: "Cold Storage — Kano, Nigeria", initials: "WFA", localLogo: "/images/logos/whitefield.jpg" },
  { name: "KAPA Oil Refineries Ltd", sector: "HVAC / Air Conditioning", initials: "KOR", localLogo: "/images/logos/kapaoil.png" },
  { name: "Cold Solutions Kenya Ltd", sector: "Industrial Refrigeration", initials: "CSK", localLogo: "/images/logos/ColdSolutionsKenya.jpg" },
];

export default function Clients() {
  return (
    <section className="py-20 bg-[#f4f6f8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Trusted By</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Our Clients</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Reputed organisations across food processing, pharmaceuticals, agriculture, government and cold storage sectors — Kenya and beyond.
          </p>
          <div className="w-12 h-1 rounded-full mx-auto mt-5" style={{ background: "linear-gradient(90deg, #55b7e5, #111827)" }} />
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
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-center group"
            >
              <div className="w-16 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white border border-gray-100 overflow-hidden group-hover:scale-110 transition-transform">
                <ClientLogo
                  // domain={"domain" in client ? client.domain : undefined}
                  localLogo={"localLogo" in client ? client.localLogo : undefined}
                  name={client.name}
                  initials={client.initials}
                />
              </div>
              <p className="text-[#111827] font-semibold text-xs leading-tight mb-1">{client.name}</p>
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
          <Link href="/clients" className="inline-flex items-center gap-2 text-[#55b7e5] font-semibold text-sm hover:text-[#111827] transition-colors">
            View All Clients & Projects <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
