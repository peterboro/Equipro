import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const allServices = [
  { title: "Industrial Refrigeration", href: "/services/industrial-refrigeration" },
  { title: "HVAC Systems", href: "/services/hvac-systems" },
  { title: "Facility Maintenance", href: "/services/facility-maintenance" },
  { title: "Electrical Services", href: "/services/electrical-services" },
  { title: "PLC & Automation", href: "/services/plc-automation" },
  { title: "Remote Monitoring & Control", href: "/services/remote-monitoring" },
  { title: "Packaging Line Services", href: "/services/packaging" },
];

interface ServiceDetailProps {
  title: string; subtitle: string; breadcrumbLabel: string;
  heroImage: string; intro: string; body: string[];
  features: string[]; specs?: { label: string; value: string }[];
  sideImage: string; icon: string;
}

export default function ServiceDetail({ title, subtitle, breadcrumbLabel, heroImage, intro, body, features, specs, sideImage, icon }: ServiceDetailProps) {
  return (
    <>
      <Navbar />
      <PageHero title={title} subtitle={subtitle}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: breadcrumbLabel }]}
        image={heroImage}
      />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="text-4xl mb-5">{icon}</div>
              <h2 className="text-3xl font-bold text-[#111827] mb-5" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>{title}</h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6 font-medium">{intro}</p>
              {body.map((para, i) => <p key={i} className="text-gray-600 text-[15px] leading-relaxed mb-5">{para}</p>)}
              <img src={sideImage} alt={title} className="w-full h-[260px] object-cover rounded-2xl shadow-lg my-8" loading="lazy" />
              <h3 className="text-2xl font-bold text-[#111827] mb-4" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>Key Features & Benefits</h3>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700 text-[14px]">
                    <CheckCircle2 size={17} className="text-[#55b7e5] flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              {specs && (
                <>
                  <h3 className="text-2xl font-bold text-[#111827] mb-4" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>Technical Details</h3>
                  <div className="bg-[#f4f6f8] rounded-xl overflow-hidden border border-gray-100 mb-8">
                    {specs.map((s, i) => (
                      <div key={i} className={`flex justify-between px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-white" : ""}`}>
                        <span className="font-medium text-gray-700">{s.label}</span>
                        <span className="text-gray-600">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg" style={{ background: "#111827" }}>
                Request a Quote <ArrowRight size={15} />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-[#f4f6f8] rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#111827] text-lg mb-4" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>All Services</h4>
                <ul className="space-y-1">
                  {allServices.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${s.title === title ? "text-white font-semibold" : "text-gray-600 hover:bg-white hover:text-[#111827] hover:shadow-sm"}`}
                        style={s.title === title ? { background: "#111827" } : {}}>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ background: "#111827" }}>
                <h4 className="font-bold text-xl mb-3" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>Need a Custom Solution?</h4>
                <p className="text-sky-100 text-sm leading-relaxed mb-5">Our engineers are ready to design a system tailored to your exact requirements.</p>
                <Link href="/contact" className="block text-center text-white font-semibold py-3 rounded-xl transition-colors text-sm" style={{ background: "#55b7e5" }}>
                  Contact Us
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
