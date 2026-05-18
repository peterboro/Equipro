"use client";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Clients", href: "/clients" },
  { label: "Blog / News", href: "/blog-news" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Industrial Refrigeration", href: "/services/industrial-refrigeration" },
  { label: "HVAC Systems", href: "/services/hvac-systems" },
  { label: "Facility Maintenance", href: "/services/facility-maintenance" },
  { label: "Electrical Services", href: "/services/electrical-services" },
  { label: "PLC & Automation", href: "/services/plc-automation" },
  { label: "Packaging Line Services", href: "/services/packaging" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060e27" }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-4">
              {/* Logo is now transparent — shows naturally on dark bg */}
              <div className="bg-white rounded-xl px-3 py-2 inline-block">
                <Image
                  src="/logo.png"
                  alt="Equipro Group"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white font-semibold text-sm mb-1 mt-3">Power You Can Trust</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              HVAC, industrial refrigeration, facility maintenance, mechanical & electrical services — Nairobi, Kenya.
            </p>
            <div className="space-y-1 text-xs text-gray-500 mb-5 border-l-2 pl-3" style={{ borderColor: "#c8102e" }}>
              <p>NCA: Refrigeration & Electrical — Grade 5</p>
            </div>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#c8102e")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "#c8102e" }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "#c8102e" }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#c8102e" }} />
                Avon Center, Enterprise Road,<br />P.O. Box 12636-00400,<br />Nairobi, Kenya
              </li>
              <li>
                <a href="tel:+254722101946" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone size={14} style={{ color: "#c8102e", flexShrink: 0 }} /> 0722-101946
                </a>
              </li>
              <li>
                <a href="tel:+254722514226" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone size={14} style={{ color: "#c8102e", flexShrink: 0 }} /> 0722-514226
                </a>
              </li>
              <li>
                <a href="mailto:Info@equiprogroup.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail size={14} style={{ color: "#c8102e", flexShrink: 0 }} /> Info@equiprogroup.com
                </a>
              </li>
              <li>
                <a href="https://www.equiprogroup.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <span style={{ color: "#c8102e", fontSize: 14, flexShrink: 0 }}>🌐</span> www.equiprogroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Equipro Investments (K) Ltd. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs italic">Power You Can Trust</p>
        </div>
      </div>
    </footer>
  );
}
