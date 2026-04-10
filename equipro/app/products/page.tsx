import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Equipro Investments — Refrigeration & HVAC Equipment Kenya",
  description: "Industrial refrigeration technologies, compressors, condensers, evaporators, cold room equipment and packaging machinery — Equipro Kenya.",
};

const products = [
  {
    title: "Refrigeration Technologies",
    subtitle: "Freon · NH3 (R-717) · CO2 (R-744)",
    description: "Complete refrigeration system technologies using synthetic Freon refrigerants and natural refrigerants including ammonia and CO2. Eco-friendly, energy-efficient options for every application.",
    href: "/products/refrigeration-technologies",
    image: "/images/ammonia.jpg",
    icon: "❄️",
  },
  {
    title: "Compressors",
    subtitle: "Piston · Screw · Hermetic",
    description: "Industrial-grade compressors converting low-pressure refrigerant gas to high-pressure, high-temperature gas. Piston and screw types for NH3, CO2 and Freon systems.",
    href: "/products/compressors",
    image: "/images/compressors.png",
    icon: "⚙️",
  },
  {
    title: "Condensers",
    subtitle: "Air-Cooled · Water-Cooled · Evaporative",
    description: "Heat exchanger devices that transfer heat from the refrigerant to air or water. Essential for efficient refrigeration system operation across all applications.",
    href: "/products/condensers",
    image: "/images/condensers.png",
    icon: "🌡️",
  },
  {
    title: "Evaporators & Glycol Coolers",
    subtitle: "Air · Brine · Direct Product",
    description: "Devices that transfer heat from the media to be cooled to the cooler refrigerant flowing through coils. Available for all refrigeration applications.",
    href: "/products/evaporators",
    image: "/images/evaporators-glycol.png",
    icon: "💧",
  },
  {
    title: "Cold Room Equipment",
    subtitle: "Panels · Doors · Floor Heating",
    description: "Cold room panels, doors and floor heating systems for complete cold storage facility construction. High-performance insulation and durable access solutions.",
    href: "/products/cold-room-equipment",
    image: "/images/floor-heating.png",
    icon: "🏗️",
  },
  {
    title: "Packaging Equipment",
    subtitle: "Machinery · Inkjet · Materials",
    description: "Packaging equipment supply for food processing and agricultural operations. Inkjet coding systems, seed packaging machines and associated consumables.",
    href: "/products/packaging-equipment",
    image: "/images/co2.jpg",
    icon: "📦",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Products & Equipment"
        subtitle="From Freon to natural refrigerants, compressors to cold room panels — the complete equipment range for your project."
        breadcrumbs={[{ label: "Products" }]}
        image="/images/cooling-technologies-bg.jpg"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">What We Supply</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d2561] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Equipment Range
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Complete refrigeration and HVAC equipment — sourced from leading manufacturers and installed by our qualified engineers.
            </p>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg,#c8102e,#0d2561)" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => (
              <Link key={p.title} href={p.href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/12 transition-all duration-300 hover:-translate-y-1.5">
                <div className="relative h-52 overflow-hidden bg-gray-50">
                  <img src={p.image} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081232]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-2xl">{p.icon}</span>
                </div>
                <div className="p-6">
                  <p className="text-[#c8102e] text-[10px] font-bold tracking-widest uppercase mb-1">{p.subtitle}</p>
                  <h3 className="font-bold text-[#0d2561] text-xl mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center gap-1.5 font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                    style={{ color: "#c8102e" }}>
                    View Product <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
}
