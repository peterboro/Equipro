import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2, Target, Zap, Users, Shield, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Equipro Investments (K) Ltd",
  description: "Established in 2007, Equipro Investments (K) Ltd is a specialist in electromechanical systems, HVAC, industrial refrigeration and facility maintenance in Nairobi, Kenya.",
};

const coreValues = [
  { icon: Shield, title: "Integrity", description: "Integrity with customers and business partners — the foundation of every relationship we build." },
  { icon: Star, title: "Over-Deliver", description: "We endeavour to deliver over expectations. Good enough is never good enough at Equipro." },
  { icon: Zap, title: "Competence", description: "We grow our competence and keep sharpening it to ensure we add value to every engagement." },
  { icon: Target, title: "Goal Alignment", description: "We help partners and customers achieve their goals, believing that doing so achieves ours." },
  { icon: Users, title: "Customer Philosophy", description: "The client is everybody's business. We respond to needs and maintain the quality customers know us for." },
  { icon: Shield, title: "Quality Focus", description: "We set exacting standards and measure up to them — unwavering focus on quality and sustained business benefit." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="About Equipro Group"
        subtitle="Power You Can Trust — established in 2007 as a specialist in electromechanical systems, HVAC, and industrial refrigeration."
        breadcrumbs={[{ label: "About Us" }]}
        image="/images/site-cold-room-wide.jpg"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0d2561] mb-6 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Equipro Investments<br /><span className="text-[#c8102e]">(K) Ltd</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>Equipro Investments (K) Ltd was established in 2007 as an electromechanical systems design, installation and commissioning company. We are specialists in packaging materials and packaging equipment, temperature monitoring, home automation, lighting controls, and mechanical & electrical works as unique systems based on customer requirements.</p>
                <p>We are fully registered with NCA as a refrigeration and air conditioning contractor NCA 5 and Electrical contractor NCA 5. This dual registration underscores our capability and commitment to delivering compliant, professional work across both disciplines.</p>
                <p>We have a wealth of experience delivering projects and a proven track record in all market sectors — both industrial and private. We take great care to understand our client's requirements and make sure we deliver to those requirements, supported by a client-focused attitude and proven experience.</p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  "Electromechanical systems design & commissioning",
                  "NCA 5 registered — Refrigeration, AC & Electrical",
                  "Packaging equipment supply, installation & maintenance",
                  "Temperature monitoring & home automation systems",
                  "Lighting controls & facility management",
                  "Industrial and private sector project delivery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle2 size={17} className="text-[#c8102e] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/site-co2-plant-2.jpg"
                alt="Equipro engineering works"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl shadow-blue-900/20"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 text-white p-6 rounded-xl shadow-xl" style={{ background: "#0d2561" }}>
                <div className="text-4xl font-bold mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>2007</div>
                <div className="text-blue-200 text-sm">Established in Nairobi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: "#0d2561" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "2007", label: "Year Established" },
              { num: "16+", label: "Years Experience" },
              { num: "NCA 5", label: "Registered Grade" },
              { num: "24/7", label: "Support Available" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                <Target size={22} className="text-[#c8102e]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0d2561] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">"Acquisition and application of knowledge, integration of diverse working experience with the staff and thereby succeed in service delivery from winning the confidence of client through proven performance."</p>
              <p className="text-gray-600 text-sm leading-relaxed">Right from the beginning, we strive to create a balance — in our world, in our projects and our lives, maintaining our values, dignity and quality of our services.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <Star size={22} className="text-[#0d2561]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0d2561] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">"To be recognized as the gold standard in infrastructure development and consulting arm known for its people performance, creativity, technical excellence and dedication to sustainable development of humanity."</p>
              <p className="text-gray-600 text-sm leading-relaxed">We emphasize building human resources and creating a conducive environment for talent to grow and prosper.</p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <span className="inline-block text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">What Guides Us</span>
            <h2 className="text-4xl font-bold text-[#0d2561]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Core Values</h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg, #c8102e, #0d2561)" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-blue-900/8 transition-shadow group">
                <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c8102e] transition-colors">
                  <v.icon size={20} className="text-[#c8102e] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-[#0d2561] text-lg mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
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
