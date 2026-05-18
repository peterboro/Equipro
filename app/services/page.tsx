import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowRight, Snowflake, Wind, Wrench, Zap, Monitor, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Equipro Investments — HVAC & Refrigeration Kenya",
  description: "Complete refrigeration solutions from project design to repair & maintenance. Industrial refrigeration, HVAC, electrical, PLC automation and packaging services.",
};

const services = [
  {
    icon: Snowflake,
    title: "Industrial Refrigeration Solutions",
    description: "Equipro has proven its reputation with successful turnkey refrigeration projects. We offer project design, installation of Freon, NH3 and CO2 (R744) systems, commissioning and 24/7 maintenance and repair. We determine energy and capacity demand, coordinate refrigeration installation with other HVAC equipment, and manage construction through the full life cycle.",
    href: "/services/industrial-refrigeration",
    image: "/images/ammonia.jpg",
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    description: "Heating, ventilation and air conditioning systems designed, supplied, installed and maintained for commercial, industrial and residential environments. Server room air conditioning, split units, centralised HVAC and inverter systems.",
    href: "/services/hvac-systems",
    image: "/images/fgas.jpg",
  },
  {
    icon: Wrench,
    title: "Facility Maintenance",
    description: "Comprehensive mechanical and electrical facility maintenance services. Boiler and steam line installation and maintenance, kitchen equipment maintenance, and full site engineering services to keep your facility running at peak performance.",
    href: "/services/facility-maintenance",
    image: "/images/condensers.png",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "NCA 5 registered electrical contractor. Generator installations and maintenance, inverter maintenance, electrical panel installation, wiring and all associated electrical works for industrial and commercial facilities.",
    href: "/services/electrical-services",
    image: "/images/co2-nh3-cascade.jpg",
  },
  {
    icon: Monitor,
    title: "PLC & Automation Systems",
    description: "PLC and automation systems provide instant monitoring of all parameters in the refrigeration system. Remote monitoring and control, SCADA integration, remote diagnostics and optimisation according to target energy values.",
    href: "/services/plc-automation",
    image: "/images/glycol.jpg",
  },
  {
    icon: Package,
    title: "Packaging Line Services",
    description: "Packaging materials and packaging equipment supply, installation and maintenance. Inkjet supply, installation and maintenance services. Seed packaging materials and machines supply, installation and maintenance.",
    href: "/services/packaging",
    image: "/images/compressors.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Need a refrigeration solution? We offer everything from project design to repair & maintenance."
        breadcrumbs={[{ label: "Services" }]}
        image="/images/cooling-technologies-bg.jpg"
      />

      {/* Complete Solutions Wheel Summary */}
      <section className="py-14 bg-[#0d2561]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Project Design", icon: "📐" },
              { label: "Installation", icon: "🔧" },
              { label: "Commissioning", icon: "✅" },
              { label: "Maintenance & Repair", icon: "🛠️" },
              { label: "Remote Monitoring", icon: "📡" },
              { label: "Custom Manufacturing", icon: "⚙️" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 bg-white/8 rounded-xl border border-white/10">
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="text-white text-xs font-semibold leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">Complete Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d2561] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>All Services</h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg, #c8102e, #0d2561)" }} />
          </div>

          <div className="space-y-12">
            {services.map((s, i) => (
              <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}>
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img src={s.image} alt={s.title} className="w-full h-[260px] object-cover rounded-2xl shadow-lg" loading="lazy" />
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <s.icon size={22} className="text-[#c8102e]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0d2561] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{s.description}</p>
                  <Link href={s.href} className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-md" style={{ background: "#0d2561" }}>
                    Learn More <ArrowRight size={15} />
                  </Link>
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
