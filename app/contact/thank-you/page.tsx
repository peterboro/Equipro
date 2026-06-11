import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Sent | Equipro Investments (K) Ltd",
  description: "Thank you for contacting Equipro Investments. Our team will respond to your enquiry shortly.",
};

export default function ContactThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[620px] bg-[#f4f6f8] pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <CheckCircle2 size={34} className="text-[#55b7e5]" />
          </div>
          <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Message Sent</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Thank You for Contacting Equipro
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Your enquiry has been sent to info@equiprogroup.com. Our engineering team will review your message and respond as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#55b7e5]"
            >
              Back to Home <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+254722101946"
              className="inline-flex items-center gap-2 rounded-xl border border-[#111827] px-6 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-white"
            >
              Call 0722-101946
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
