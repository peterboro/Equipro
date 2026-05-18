import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const allProducts = [
  { title: "Refrigeration Technologies", href: "/products/refrigeration-technologies" },
  { title: "Compressors", href: "/products/compressors" },
  { title: "Condensers", href: "/products/condensers" },
  { title: "Evaporators & Glycol Coolers", href: "/products/evaporators" },
  { title: "Cold Room Equipment", href: "/products/cold-room-equipment" },
  { title: "Packaging Equipment", href: "/products/packaging-equipment" },
];

interface ProductDetailProps {
  title: string; subtitle: string; breadcrumbLabel: string;
  heroImage: string; intro: string; body: string[];
  features: string[]; specs?: { label: string; value: string }[];
  images: string[]; icon: string;
  variants?: { name: string; desc: string }[];
}

export default function ProductDetail({ title, subtitle, breadcrumbLabel, heroImage, intro, body, features, specs, images, icon, variants }: ProductDetailProps) {
  return (
    <>
      <Navbar />
      <PageHero title={title} subtitle={subtitle}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: breadcrumbLabel }]}
        image={heroImage}
      />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="text-4xl mb-5">{icon}</div>
              <h2 className="text-3xl font-bold text-[#0d2561] mb-5" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>{title}</h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6 font-medium">{intro}</p>
              {body.map((para, i) => <p key={i} className="text-gray-600 text-[15px] leading-relaxed mb-5">{para}</p>)}
              <div className="grid grid-cols-2 gap-4 my-8">
                {images.map((img, i) => (
                  <img key={i} src={img} alt={`${title} ${i+1}`} className="w-full h-[200px] object-cover rounded-xl shadow-md" loading="lazy" />
                ))}
              </div>
              {variants && variants.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-[#0d2561] mb-4" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>Product Variants</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {variants.map((v) => (
                      <div key={v.name} className="bg-[#f7f9fc] rounded-xl p-5 border border-gray-100 hover:border-[#c8102e] transition-colors">
                        <h4 className="font-bold text-[#0d2561] text-base mb-2" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>{v.name}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <h3 className="text-2xl font-bold text-[#0d2561] mb-4" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>Features & Benefits</h3>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700 text-[14px]">
                    <CheckCircle2 size={17} className="text-[#c8102e] flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              {specs && (
                <>
                  <h3 className="text-2xl font-bold text-[#0d2561] mb-4" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>Technical Specifications</h3>
                  <div className="bg-[#f7f9fc] rounded-xl overflow-hidden border border-gray-100 mb-8">
                    {specs.map((s, i) => (
                      <div key={i} className={`flex justify-between px-5 py-3.5 text-sm ${i%2===0?"bg-white":""}`}>
                        <span className="font-medium text-gray-700">{s.label}</span>
                        <span className="text-gray-600">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg" style={{ background:"#0d2561" }}>
                Request a Quote <ArrowRight size={15} />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-[#f7f9fc] rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#0d2561] text-lg mb-4" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>All Products</h4>
                <ul className="space-y-1">
                  {allProducts.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href} className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${p.title===title?"text-white font-semibold":"text-gray-600 hover:bg-white hover:text-[#0d2561] hover:shadow-sm"}`}
                        style={p.title===title?{background:"#0d2561"}:{}}>
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ background:"#0d2561" }}>
                <h4 className="font-bold text-xl mb-3" style={{ fontFamily:"'Barlow Condensed',sans-serif" }}>Request a Quote</h4>
                <p className="text-blue-200 text-sm leading-relaxed mb-5">Tell us your requirements and we'll provide a detailed technical and commercial proposal.</p>
                <Link href="/contact" className="block text-center text-white font-semibold py-3 rounded-xl transition-colors text-sm" style={{ background:"#c8102e" }}>
                  Contact Our Team
                </Link>
                <a href="tel:+254722101946" className="block text-center text-blue-300 text-xs mt-3 hover:text-white transition-colors">
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
