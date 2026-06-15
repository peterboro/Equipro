"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services", href: "/services",
    children: [
      { label: "Industrial Refrigeration", href: "/services/industrial-refrigeration" },
      { label: "Cold Room Installation", href: "/services/cold-room-installation-kenya" },
      { label: "Ammonia & CO2 Refrigeration", href: "/services/ammonia-co2-refrigeration-installation-kenya" },
      { label: "Freon Refrigeration Systems", href: "/services/freon-refrigeration-systems-kenya" },
      { label: "HVAC Systems Kenya", href: "/services/hvac-systems-kenya" },
      { label: "Facility Maintenance", href: "/services/facility-maintenance" },
      { label: "Electrical Services", href: "/services/electrical-services" },
      { label: "PLC & Automation", href: "/services/plc-automation" },
      { label: "Remote Monitoring", href: "/services/remote-monitoring" },
    ],
  },
  {
    label: "Products", href: "/products",
    children: [
      { label: "Refrigeration Technologies", href: "/products/refrigeration-technologies" },
      { label: "Freon Gases", href: "/products/freon-gases" },
      { label: "Compressors", href: "/products/compressors" },
      { label: "Condensers", href: "/products/condensers" },
      { label: "Evaporators & Glycol Coolers", href: "/products/evaporators" },
      { label: "Cold Room Equipment", href: "/products/cold-room-equipment" },
      { label: "Stainless Steel Water Tanks", href: "/products/stainless-steel-water-tanks" },
      { label: "Packaging Equipment", href: "/products/packaging-equipment" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blog / News", href: "/blog-news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#111827] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+254722101946" className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Phone size={11} /> 0722-101946
            </a>
            <a href="tel:+254722514226" className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Phone size={11} /> 0722-514226
            </a>
            <a href="mailto:info@equiprogroup.com" className="hover:text-sky-200 transition-colors">
              info@equiprogroup.com
            </a>
          </div>
          <span className="text-gray-400 text-xs">Avon Center, Enterprise Road, Nairobi, Kenya</span>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md shadow-lg shadow-slate-900/10"
            : "bg-white border-b border-gray-100"
        }`}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

          {/* Logo — transparent PNG, no blend tricks needed */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Equipro Group — Power You Can Trust"
              width={180}
              height={54}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-[#111827] rounded-lg hover:bg-sky-50 transition-all whitespace-nowrap"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={12} className="opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                    <div className="bg-white rounded-xl shadow-2xl shadow-slate-900/15 border border-gray-100 py-1.5 min-w-[250px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-[13px] text-gray-600 hover:text-[#111827] hover:bg-sky-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 shadow-md hover:opacity-90"
              style={{ background: "#55b7e5" }}
            >
              <Phone size={13} /> Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-0.5 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="flex-1 px-3 py-2.5 text-[13px] font-medium text-gray-700 hover:text-[#111827] hover:bg-sky-50 rounded-lg transition-colors block"
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                          className="p-2 text-gray-400"
                        >
                          <ChevronDown size={14} className={`transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {link.children && mobileExpanded === link.label && (
                      <div className="pl-4 pb-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-[12px] text-gray-500 hover:text-[#111827] hover:bg-sky-50 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-100 mt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 text-white py-3 rounded-lg text-[13px] font-semibold w-full"
                    style={{ background: "#55b7e5" }}
                  >
                    <Phone size={14} /> Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
