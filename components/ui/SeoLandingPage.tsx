import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";

interface RelatedLink {
  label: string;
  href: string;
}

interface SeoLandingPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  paragraphs: string[];
  features: string[];
  relatedLinks: RelatedLink[];
}

export default function SeoLandingPage({
  title,
  subtitle,
  heroImage,
  intro,
  paragraphs,
  features,
  relatedLinks,
}: SeoLandingPageProps) {
  return (
    <>
      <Navbar />
      <PageHero
        title={title}
        subtitle={subtitle}
        image={heroImage}
        breadcrumbs={[
          { label: title.includes("Water Tanks") ? "Products" : "Services", href: title.includes("Water Tanks") ? "/products" : "/services" },
          { label: title },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          <article className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-[#55b7e5] pl-5">
              {intro}
            </p>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#55b7e5] transition-colors"
              >
                Request a Project Quote <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          <aside className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#111827] mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What We Cover
            </h2>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={18} className="text-[#55b7e5] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Related Pages</h3>
            <div className="space-y-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-3 rounded-lg bg-white border border-gray-100 px-4 py-3 text-sm font-semibold text-[#111827] hover:border-[#55b7e5] hover:text-[#2f9ccc] transition-colors"
                >
                  {link.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
