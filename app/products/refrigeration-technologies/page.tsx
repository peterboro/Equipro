import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refrigeration Technologies in Kenya | Freon, Ammonia NH3 & CO2 Systems",
  description: "Freon, ammonia/NH3 and CO2/R744 refrigeration technologies for industrial refrigeration, cold rooms, cold storage and commercial cooling systems in Kenya.",
};

const allProducts = [
  { title: "Refrigeration Technologies", href: "/products/refrigeration-technologies" },
  { title: "Freon Gases", href: "/products/freon-gases" },
  { title: "Compressors", href: "/products/compressors" },
  { title: "Condensers", href: "/products/condensers" },
  { title: "Evaporators & Glycol Coolers", href: "/products/evaporators" },
  { title: "Cold Room Equipment", href: "/products/cold-room-equipment" },
  { title: "Packaging Equipment", href: "/products/packaging-equipment" },
];

const technologies = [
  {
    name: "Freon Refrigeration Systems",
    tag: "Synthetic Refrigerants",
    tagColor: "#374151",
    image: "/images/gallery/equipro-project-52.jpg",
    description: "Freon refrigeration systems are suitable for medium and small-size plants due to their relevant investment cost and widespread service support. Modern low-GWP HFO refrigerants offer improved environmental performance over older HFC options.",
    specs: ["Suitable for small to medium plants", "Lower capital investment", "Wide service support network", "Modern HFO options available (R32, R454B)"],
  },
  {
    name: "Ammonia (NH3) Systems",
    tag: "R-717 · ODP=0 · GWP=0",
    tagColor: "#55b7e5",
    image: "/images/gallery/equipro-project-62.jpg",
    description: "Ammonia (R-717) is the refrigerant of choice for large industrial refrigeration. Excellent thermodynamic efficiency, zero ozone depletion potential and zero global warming potential. Temperatures achievable down to -70°C. Used with piston and screw compressors.",
    specs: ["ODP = 0, GWP = 0", "Temperatures to -70°C", "Best thermodynamic efficiency", "Lowest long-term operating cost"],
  },
  {
    name: "CO2 (R744) Systems",
    tag: "Natural · Eco-Friendly",
    tagColor: "#64748b",
    image: "/images/gallery/equipro-project-60.jpg",
    description: "Modern CO2 refrigeration systems are defined by their energy efficiency and extreme eco-friendliness. CO2 is harmless to people and goods in case of leakage. These systems save approximately 30% engine room footprint compared to equivalent systems.",
    specs: ["ODP = 0, GWP = 1", "30% smaller engine room footprint", "Safe in case of leakage", "Excellent for food retail applications"],
  },
  {
    name: "NH3/CO2 Cascade Systems",
    tag: "HFC-Free · Best Performance",
    tagColor: "#374151",
    image: "/images/gallery/equipro-project-59.jpg",
    description: "The NH3/CO2 cascade system is a completely HFC-free refrigeration solution delivering superior performance. NH3 operates in the engine room for efficiency; CO2 distributes to evaporators throughout the facility. The gold standard for modern cold chain.",
    specs: ["100% HFC-free", "NH3 efficiency + CO2 distribution", "Superior food retail performance", "Future-proof technology"],
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Refrigeration Technologies"
        subtitle="Freon, NH3 and CO2 (R744) — the right refrigerant technology for every application and budget."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Refrigeration Technologies" }]}
        image="/images/gallery/equipro-project-56.jpg"
      />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <span className="text-4xl mb-4 block">❄️</span>
              <h2 className="text-3xl font-bold text-[#111827] mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Complete Refrigeration Technologies
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4 font-medium">
                Equipro Investments (K) Ltd works across all major refrigeration technologies — synthetic Freon refrigerants for smaller applications, and natural refrigerants (NH3 and CO2) for industrial-scale systems where environmental performance and running costs are paramount.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
                Our engineering team analyses your specific requirements — system size, temperature range, refrigerant preference, energy budget and future growth plans — to recommend the most appropriate and cost-effective technology for your project.
              </p>

              {/* Technology Cards */}
              <div className="space-y-10">
                {technologies.map((tech) => (
                  <div key={tech.name} className="bg-[#f4f6f8] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                          style={{ background: tech.tagColor }}>
                          {tech.tag}
                        </span>
                        <h3 className="text-white font-bold text-2xl mt-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-[14px] leading-relaxed mb-4">{tech.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {tech.specs.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-[13px] text-gray-700">
                            <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: "#55b7e5" }} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* F-Gas image */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  F-Gas Regulation Compliance
                </h3>
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-4">
                  <img src="/images/gallery/equipro-project-08.jpg" alt="F-Gas Regulation" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-8">
                    <div>
                      <p className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Compliant with F-Gas Regulation (EU) 517/2014
                      </p>
                      <p className="text-gray-200 text-sm max-w-sm">
                        All Equipro refrigerant systems are designed and commissioned in full compliance with applicable F-Gas regulations and local NCA standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glycol systems */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Glycol Secondary Refrigerant Systems
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-lg h-56">
                  <img src="/images/gallery/equipro-project-14.jpg" alt="Glycol Refrigeration System" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="text-gray-600 text-[14px] leading-relaxed mt-4">
                  Glycol (brine) secondary systems use a water-glycol mixture to distribute cooling from a central refrigeration plant to multiple cooling points throughout a facility — reducing direct refrigerant charge, pipework cost and regulatory burden.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:opacity-90"
                  style={{ background: "#111827" }}>
                  Request a Quote <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#f4f6f8] rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#111827] text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>All Products</h4>
                <ul className="space-y-1">
                  {allProducts.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${p.title === "Refrigeration Technologies" ? "text-white font-semibold" : "text-gray-600 hover:bg-white hover:text-[#111827] hover:shadow-sm"}`}
                        style={p.title === "Refrigeration Technologies" ? { background: "#111827" } : {}}>
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick specs */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#111827] text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Quick Comparison</h4>
                <div className="space-y-3">
                  {[
                    { label: "Freon ODP/GWP", value: "Low / High→Low (HFO)" },
                    { label: "NH3 ODP/GWP", value: "0 / 0" },
                    { label: "CO2 ODP/GWP", value: "0 / 1" },
                    { label: "NH3 Min Temp", value: "−70°C" },
                    { label: "CO2 Footprint", value: "30% smaller engine room" },
                    { label: "NCA Registration", value: "Grade 5" },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                      <span className="font-medium text-gray-700">{s.label}</span>
                      <span className="text-gray-500 text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 text-white" style={{ background: "#111827" }}>
                <h4 className="font-bold text-xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Need Guidance?</h4>
                <p className="text-sky-100 text-sm leading-relaxed mb-5">Not sure which refrigerant technology is right for your project? Our engineers will help you choose.</p>
                <Link href="/contact" className="block text-center text-white font-semibold py-3 rounded-xl transition-colors text-sm hover:opacity-90"
                  style={{ background: "#55b7e5" }}>
                  Talk to an Engineer
                </Link>
                <a href="tel:+254722101946" className="block text-center text-sky-200 text-xs mt-3 hover:text-white transition-colors">
                  0722-101946 / 0722-514226
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </>
  );
}
