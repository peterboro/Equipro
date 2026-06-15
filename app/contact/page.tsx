import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Equipro Investments (K) Ltd",
  description: "Contact Equipro Investments in Nairobi, Kenya. HVAC, industrial refrigeration and facility maintenance enquiries. Call 0722-101946 / 0722-514226.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Speak with our team about your HVAC, refrigeration or facility maintenance project."
        breadcrumbs={[{ label: "Contact" }]}
        image="/images/gallery/equipro-project-56.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Get In Touch</span>
                <h2 className="text-3xl font-bold text-[#111827] mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>We're Here to Help</h2>
                <p className="text-gray-600 text-sm leading-relaxed">Call us, email us or fill out the form. Our engineering team responds promptly to discuss your requirements.</p>
              </div>

              {[
                { icon: MapPin, title: "Office Address", lines: ["Avon Center, Enterprise Road", "P.O. Box 12636-00400", "Nairobi, Kenya"] },
                { icon: Phone, title: "Phone", lines: ["0722-101946", "0722-514226"] },
                { icon: Mail, title: "Email", lines: ["info@equiprogroup.com"] },
                { icon: Globe, title: "Website", lines: ["www.equiprogroup.com"] },
                { icon: Clock, title: "Business Hours", lines: ["Monday – Friday: 08:00 – 17:30", "24/7 Emergency Support Available"] },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#eaf8fd" }}>
                    <item.icon size={18} className="text-[#55b7e5]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-sm mb-1">{item.title}</div>
                    {item.lines.map((line) => <div key={line} className="text-gray-600 text-sm">{line}</div>)}
                  </div>
                </div>
              ))}

              {/* Registration details */}
              <div className="bg-[#f4f6f8] rounded-xl p-5 border border-gray-100 text-xs text-gray-500 space-y-1">
                <p className="font-semibold text-[#111827] text-sm mb-2">Company Details</p>
                <p>NCA Registration: Refrigeration & AC — Grade 5</p>
                <p>NCA Registration: Electrical Contractor — Grade 5</p>
                <p>EPRA Certificate: Class B</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-[#f4f6f8] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Send Us a Message</h3>
              <form
                className="space-y-5"
                action="https://formsubmit.co/info@equiprogroup.com"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New Equipro Website Quote Request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://equipro.vercel.app/contact/thank-you" />
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" name="Full Name" required placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#111827]/20 focus:border-[#111827] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                    <input type="text" name="Company Name" placeholder="Your company"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#111827]/20 focus:border-[#111827] transition-all" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input type="email" name="Email Address" required placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#111827]/20 focus:border-[#111827] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" name="Phone Number" placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#111827]/20 focus:border-[#111827] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Required</label>
                  <select name="Service Required" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#111827]/20 focus:border-[#111827] transition-all">
                    <option value="">Select a service...</option>
                    <option>Industrial Refrigeration</option>
                    <option>HVAC Systems</option>
                    <option>Facility Maintenance</option>
                    <option>Electrical Services</option>
                    <option>PLC & Automation</option>
                    <option>Remote Monitoring & Control</option>
                    <option>Packaging Line Services</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea name="Message" required rows={6} placeholder="Describe your project requirements or question..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#111827]/20 focus:border-[#111827] transition-all resize-none" />
                </div>
                <button type="submit"
                  className="w-full text-white font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg hover:opacity-90"
                  style={{ background: "#111827" }}>
                  Send Message
                </button>
                <p className="text-center text-gray-400 text-xs">We typically respond within 1 business day. For urgent matters call 0722-101946.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[360px] relative overflow-hidden" style={{ background: "#e8eef5" }}>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
            <MapPin size={36} className="text-[#55b7e5] mx-auto mb-3" />
            <p className="text-[#111827] font-bold text-base mb-1">Avon Center, Enterprise Road</p>
            <p className="text-gray-500 text-sm mb-4">Nairobi, Kenya</p>
            <a href="https://maps.google.com/?q=Enterprise+Road+Nairobi+Kenya"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              style={{ background: "#111827" }}>
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(rgba(17,24,39,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(17,24,39,.14) 1px,transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </section>

      <Footer />
    </>
  );
}
