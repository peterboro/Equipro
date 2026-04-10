import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | Equipro Investments — Our Track Record",
  description: "Equipro's client portfolio spans food processing, pharmaceuticals, agriculture, government and cold storage sectors across Kenya and beyond.",
};

const clients = [
  { name: "NAS (Ennsvalley Bakery Ltd)", initials: "NAS", sector: "Food & Bakery", services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet Supply, Installation & Maintenance"] },
  { name: "Norbrook Kenya Ltd", initials: "NBK", sector: "Pharmaceuticals", services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet Supply, Installation & Maintenance"] },
  { name: "Trufoods Ltd", initials: "TRU", sector: "Food Processing", services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet Supply, Installation & Maintenance"] },
  { name: "Interconsumer Products Ltd", initials: "ICP", sector: "FMCG", services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet Supply, Installation & Maintenance"] },
  { name: "Indra", initials: "IND", sector: "Technology", services: ["Server Room Air Conditioners Supply, Installation & Maintenance", "Inverter Maintenance Services"] },
  { name: "Kibo Seed Company Ltd", initials: "KSC", sector: "Agriculture", services: ["Cold Rooms, Air Conditioners Supply, Installation & Maintenance", "Generator Installations & Maintenance", "Seed Packaging Machines Supply, Installation & Maintenance"] },
  { name: "Kenya Police", initials: "KPS", sector: "Government", services: ["Boiler & Steam Line Installation & Maintenance", "Kitchen Equipment Installation & Maintenance Service"] },
  { name: "Simlaw Seeds", initials: "SLS", sector: "Agriculture", services: ["Air Conditioners Supply, Installation & Maintenance", "Packaging Line Supply, Installation & Maintenance", "Inkjet Supply, Installation & Maintenance"] },
  { name: "Gantek / Cold Solutions Kenya", initials: "GTK", sector: "Industrial Cold Storage — Tatu City (Ongoing)", services: ["Complete Installation of Ammonia Gas Refrigeration Plant", "Seamless Pipe TIG Welding, Testing, Insulation", "Ventilation Works, Commissioning"] },
  { name: "Crown Farms Ltd", initials: "CFL", sector: "Agriculture — Delta State, Nigeria", services: ["Installation of Blast Freezers", "Cold Storage Facility Installation & Maintenance"] },
];

const sectorColors: Record<string, string> = {
  "Food & Bakery": "bg-amber-100 text-amber-800",
  "Pharmaceuticals": "bg-blue-100 text-blue-800",
  "Food Processing": "bg-green-100 text-green-800",
  "FMCG": "bg-purple-100 text-purple-800",
  "Technology": "bg-cyan-100 text-cyan-800",
  "Agriculture": "bg-lime-100 text-lime-800",
  "Government": "bg-gray-100 text-gray-800",
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Clients"
        subtitle="A proven track record across food processing, pharmaceuticals, agriculture, government and industrial cold storage sectors."
        breadcrumbs={[{ label: "Clients" }]}
        image="/images/co2-nh3-cascade.jpg"
      />

      {/* Stats */}
      <section className="py-14 bg-[#0d2561]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10+", label: "Major Clients Listed" },
              { num: "16+", label: "Years Track Record" },
              { num: "Multi-sector", label: "Industry Coverage" },
              { num: "Kenya & Beyond", label: "Geographic Reach" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">Trusted By</span>
            <h2 className="text-4xl font-bold text-[#0d2561]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Client Portfolio</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">Below is a selection of our clients and the services we offer or have offered them.</p>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg, #c8102e, #0d2561)" }} />
          </div>

          <div className="space-y-5">
            {clients.map((client, i) => (
              <div key={client.name} className={`flex flex-col md:flex-row gap-5 p-6 rounded-2xl border transition-shadow hover:shadow-lg ${i % 2 === 0 ? "bg-[#f7f9fc] border-gray-100" : "bg-white border-gray-100"}`}>
                {/* Logo placeholder */}
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #0d2561, #1a3a8c)" }}>
                  {client.initials}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <h3 className="font-bold text-[#0d2561] text-lg leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{client.name}</h3>
                    <span className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ${sectorColors[client.sector] || "bg-gray-100 text-gray-700"}`}>
                      {client.sector}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((svc) => (
                      <span key={svc} className="inline-block bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-lg">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
