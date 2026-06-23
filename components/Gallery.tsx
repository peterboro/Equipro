"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, Pause, Play } from "lucide-react";

const slides = [
  {
    src: "/images/gallery/equipro-project-56.jpg",
    title: "Industrial Refrigeration Plant",
    caption: "Pipework, vessels and refrigeration infrastructure for large-scale cooling operations.",
  },
  {
    src: "/images/gallery/equipro-project-58.jpg",
    title: "Turnkey Plant Room",
    caption: "Installed refrigeration systems with access platforms, insulated pipework and controls.",
  },
  {
    src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-yoghurt-room-evaporator.jpeg",
    title: "Arusha Bonite, Tanzania",
    caption: "Ongoing cold room and evaporator installation works for Glacier Products Ltd.",
  },
  {
    src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-01.jpeg",
    title: "Ivory Coast Cold Storage",
    caption: "Ongoing industrial cold storage installation progress for SBI Impianti.",
  },
  {
    src: "/images/gallery/equipro-project-10.jpg",
    title: "Cold Storage Loading Hall",
    caption: "Clean cold-chain loading environments with dock doors and protected circulation zones.",
  },
  {
    src: "/images/gallery/equipro-project-52.jpg",
    title: "High-Bay Cold Room",
    caption: "Racked cold storage spaces built for efficient handling, access and temperature control.",
  },
  {
    src: "/images/gallery/equipro-project-14.jpg",
    title: "Chilled-Water Pump System",
    caption: "Mechanical services with pumps, blue pipework and serviceable plant layouts.",
  },
  {
    src: "/images/gallery/equipro-project-34.jpg",
    title: "Rooftop HVAC Systems",
    caption: "Outdoor ducting, pipework and air-handling equipment coordinated with building services.",
  },
  {
    src: "/images/gallery/equipro-project-51.jpg",
    title: "Cold Room Evaporators",
    caption: "Ceiling-mounted evaporators and insulated wall systems for controlled environments.",
  },
  {
    src: "/images/gallery/equipro-project-62.jpg",
    title: "Overhead Process Pipework",
    caption: "Insulated process lines routed through industrial plant areas with service access in mind.",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const current = slides[active];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const previewSlides = useMemo(() => slides.slice(0, 5), []);
  const goToPrevious = () => setActive((index) => (index - 1 + slides.length) % slides.length);
  const goToNext = () => setActive((index) => (index + 1) % slides.length);

  return (
    <section id="gallery" className="py-24 bg-[#f4f6f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Project Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Recent Site Work
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            A rotating look at refrigeration plants, cold rooms, HVAC systems, ducting and pipework across recent industrial projects.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 items-stretch"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative min-h-[360px] md:min-h-[560px] overflow-hidden rounded-xl bg-[#050505] shadow-2xl shadow-slate-900/20">
            {slides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                  index === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/90 via-[#061024]/15 to-transparent" />

            <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
              <span className="rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-[#111827]">
                {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <a
                href={current.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111827] transition-colors hover:bg-white"
                aria-label="Open current project photo"
              >
                <Maximize2 size={15} />
              </a>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sky-200">Featured Project Photo</p>
              <h3 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {current.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-200">{current.caption}</p>
            </div>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-lg transition-colors hover:bg-white md:inline-flex"
              aria-label="Previous project photo"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-lg transition-colors hover:bg-white md:inline-flex"
              aria-label="Next project photo"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#111827]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Site Highlights
                </h3>
                <button
                  type="button"
                  onClick={() => setIsPlaying((value) => !value)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f6f8] text-[#111827] transition-colors hover:bg-sky-50"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>

              <div className="space-y-3">
                {previewSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`grid w-full grid-cols-[86px_1fr] gap-3 rounded-lg border p-2 text-left transition-colors ${
                      active === index ? "border-[#55b7e5] bg-sky-50" : "border-gray-100 hover:bg-[#f4f6f8]"
                    }`}
                  >
                    <img src={slide.src} alt="" className="h-16 w-full rounded-md object-cover" loading="lazy" />
                    <span className="self-center">
                      <span className="block text-sm font-bold text-[#111827]">{slide.title}</span>
                      <span className="mt-1 block text-xs leading-snug text-gray-500">{slide.caption}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-4 flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`h-2 flex-1 rounded-full transition-colors ${active === index ? "bg-[#55b7e5]" : "bg-gray-200"}`}
                    aria-label={`Show ${slide.title}`}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 md:hidden">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 text-sm font-semibold text-[#111827]"
                >
                  <ArrowLeft size={15} /> Previous
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#111827] py-3 text-sm font-semibold text-white"
                >
                  Next <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
