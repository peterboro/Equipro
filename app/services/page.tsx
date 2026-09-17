import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowRight, Snowflake, Wind, Wrench, Monitor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Equipro Investments — HVAC & Refrigeration Kenya",
  description: "Commercial and industrial refrigeration and HVAC: design, supply, installation, commissioning, maintenance and system monitoring.",
};

const services = [
  { icon: Snowflake, title: "Refrigeration", description: "Commercial and industrial refrigeration, from equipment supply and installation to complete systems, commissioning and maintenance.", href: "/services/refrigeration", image: "/images/gallery/equipro-project-62.jpg", color: "from-sky-500 to-slate-700" },
  { icon: Wind, title: "HVAC Systems", description: "Heating, ventilation and air conditioning for commercial and industrial facilities. Design, supply, installation, commissioning and maintenance.", href: "/services/hvac-systems-kenya", image: "/images/gallery/equipro-project-08.jpg", color: "from-sky-500 to-slate-700" },
  { icon: Snowflake, title: "Cold Rooms & Freezer Rooms", description: "Complete cold storage solutions with insulated panels, doors, refrigeration equipment and controls, designed around your storage requirements.", href: "/services/cold-room-installation-kenya", image: "/images/gallery/equipro-project-51.jpg", color: "from-sky-500 to-slate-700" },
  { icon: Wrench, title: "Refrigeration & HVAC Maintenance", description: "Planned servicing, fault diagnosis and repairs to protect system performance and minimise operational downtime.", href: "/services/facility-maintenance", image: "/images/gallery/equipro-project-34.jpg", color: "from-sky-500 to-slate-700" },
  { icon: Monitor, title: "System Controls & Automation", description: "Integrated refrigeration controls, PLC automation and system optimisation for dependable temperature control.", href: "/services/plc-automation", image: "/images/gallery/equipro-project-14.jpg", color: "from-sky-500 to-slate-700" },
  { icon: Monitor, title: "Remote Monitoring", description: "Monitor cooling performance, receive system alerts and support diagnosis across your refrigeration and HVAC installation.", href: "/services/remote-monitoring", image: "/images/gallery/equipro-project-56.jpg", color: "from-sky-500 to-slate-700" }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Need a refrigeration solution? We offer everything from project design to repair & maintenance."
        breadcrumbs={[{ label: "Services" }]}
        image="/images/gallery/equipro-project-56.jpg"
      />

      {/* Complete Solutions Wheel Summary */}
      <section className="py-14 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Project Design", icon: "📐" },
              { label: "Installation", icon: "🔧" },
              { label: "Commissioning", icon: "✅" },
              { label: "Maintenance & Repair", icon: "🛠️" },
              { label: "Remote Monitoring", icon: "📡" },
              { label: "Equipment Supply", icon: "⚙️" },
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
            <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Complete Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>All Services</h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg, #55b7e5, #111827)" }} />
          </div>

          <div className="space-y-12">
            {services.map((s, i) => (
              <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}>
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img src={s.image} alt={s.title} className="w-full h-[260px] object-cover rounded-2xl shadow-lg" loading="lazy" />
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center mb-4">
                    <s.icon size={22} className="text-[#55b7e5]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{s.description}</p>
                  <Link href={s.href} className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-md" style={{ background: "#111827" }}>
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
