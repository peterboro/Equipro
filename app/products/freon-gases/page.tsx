import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freon Gases & Refrigeration Systems in Kenya | Equipro",
  description: "Freon refrigerant gases and Freon refrigeration system support including R134a, R404A, R407C, R410A, R422D and R449A for HVAC, cold rooms and industrial refrigeration in Kenya.",
};

const freonProducts = [
  {
    name: "R422D Refrigerant Gas",
    image: "/images/products/freon/r422d.jpg",
    description: "A service refrigerant option used in selected retrofit and maintenance applications where system compatibility has been confirmed.",
  },
  {
    name: "R407C Refrigerant Gas",
    image: "/images/products/freon/r407c.jpg",
    description: "Commonly specified for HVAC and medium-temperature cooling applications, subject to the correct equipment and operating conditions.",
  },
  {
    name: "R134a Refrigerant Gas",
    image: "/images/products/freon/r134a.jpg",
    description: "A widely used refrigerant for suitable chillers, HVAC systems and refrigeration applications requiring professional charging support.",
  },
  {
    name: "R404A Refrigeration Gas",
    image: "/images/products/freon/r404a.jpg",
    description: "Used in many low and medium-temperature refrigeration systems, including commercial and cold storage applications.",
  },
  {
    name: "R410A Refrigerant",
    image: "/images/products/freon/r410a.png",
    description: "A refrigerant option for compatible air-conditioning and heat-pump systems that require proper charging and pressure handling.",
  },
  {
    name: "R449A Refrigerant Gas",
    image: "/images/products/freon/r449a.jpg",
    description: "A replacement refrigerant option for selected systems after compatibility, oil type and operating requirements are reviewed.",
  },
];

const serviceNotes = [
  "Product selection guidance based on the installed equipment and operating application.",
  "Support for HVAC, cold room and industrial refrigeration service requirements.",
  "Professional handling, charging and maintenance guidance for refrigerant systems.",
  "Supply support for technicians, contractors and facility operators.",
];

const allProducts = [
  { title: "Refrigeration Technologies", href: "/products/refrigeration-technologies" },
  { title: "Freon Gases", href: "/products/freon-gases" },
  { title: "Compressors", href: "/products/compressors" },
  { title: "Condensers", href: "/products/condensers" },
  { title: "Evaporators & Glycol Coolers", href: "/products/evaporators" },
  { title: "Cold Room Equipment", href: "/products/cold-room-equipment" },
  { title: "Packaging Equipment", href: "/products/packaging-equipment" },
];

export default function FreonGasesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Freon Gases"
        subtitle="Refrigerant gas supply for HVAC, cold rooms and industrial refrigeration service applications."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Freon Gases" }]}
        image="/images/products/freon/r407c.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Refrigerant Supply</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Freon Products for Refrigeration Service
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                Equipro supplies Freon refrigerant gases for qualified HVAC and refrigeration service teams. The range supports maintenance, replacement and charging work across cold rooms, process cooling, air-conditioning and industrial refrigeration systems.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                Refrigerant selection depends on the system design, compressor type, oil compatibility, operating pressure and application. Our team can help confirm the appropriate gas before supply or service work begins.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {freonProducts.map((product) => (
                  <article key={product.name} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                    <div className="h-64 bg-[#f4f6f8] p-6 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-[#111827] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="rounded-2xl bg-[#f4f6f8] border border-gray-100 p-6 md:p-7 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#55b7e5] shadow-sm">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Supply & Handling Support
                  </h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {serviceNotes.map((note) => (
                    <li key={note} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                      <CheckCircle2 size={17} className="text-[#55b7e5] flex-shrink-0 mt-0.5" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg" style={{ background: "#111827" }}>
                Request Freon Gas Supply <ArrowRight size={15} />
              </Link>
            </div>

            <aside className="space-y-6">
              <div className="bg-[#f4f6f8] rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#111827] text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>All Products</h4>
                <ul className="space-y-1">
                  {allProducts.map((product) => (
                    <li key={product.href}>
                      <Link
                        href={product.href}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${product.title === "Freon Gases" ? "text-white font-semibold" : "text-gray-600 hover:bg-white hover:text-[#111827] hover:shadow-sm"}`}
                        style={product.title === "Freon Gases" ? { background: "#111827" } : {}}
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6 text-white" style={{ background: "#111827" }}>
                <h4 className="font-bold text-xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Need a Refrigerant?</h4>
                <p className="text-sky-100 text-sm leading-relaxed mb-5">
                  Share the equipment model, existing refrigerant and service requirement, and our team will advise on availability and compatibility.
                </p>
                <Link href="/contact" className="block text-center text-white font-semibold py-3 rounded-xl transition-colors text-sm" style={{ background: "#55b7e5" }}>
                  Contact Our Team
                </Link>
                <a href="tel:+254722101946" className="block text-center text-sky-200 text-xs mt-3 hover:text-white transition-colors">
                  0722-101946 / 0722-514226
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
