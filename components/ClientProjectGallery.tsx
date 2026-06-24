"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  client: string;
  project: string;
  status: string;
  summary: string;
  cover: string;
  images: ProjectImage[];
};

type ClientProjectGalleryProps = {
  projects: Project[];
};

export default function ClientProjectGallery({ projects }: ClientProjectGalleryProps) {
  const [activeIndexes, setActiveIndexes] = useState(() => projects.map(() => 0));

  const updateActive = (projectIndex: number, nextIndex: number) => {
    setActiveIndexes((current) =>
      current.map((value, index) => (index === projectIndex ? nextIndex : value))
    );
  };

  const move = (projectIndex: number, direction: -1 | 1) => {
    const project = projects[projectIndex];
    const current = activeIndexes[projectIndex] ?? 0;
    const nextIndex = (current + direction + project.images.length) % project.images.length;
    updateActive(projectIndex, nextIndex);
  };

  return (
    <div className="space-y-8">
      {projects.map((project, projectIndex) => {
        const activeIndex = activeIndexes[projectIndex] ?? 0;
        const activeImage = project.images[activeIndex] ?? project.images[0];

        return (
          <article key={project.project} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_420px]">
              <div className="relative min-h-[360px] overflow-hidden bg-[#111827] md:min-h-[520px]">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                  loading={projectIndex === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/80 via-[#061024]/10 to-transparent" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#111827]">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                  </span>
                  <a
                    href={activeImage.src}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111827] transition-colors hover:bg-white"
                    aria-label="Open current project photo"
                  >
                    <Maximize2 size={15} />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => move(projectIndex, -1)}
                  className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-lg transition-colors hover:bg-white"
                  aria-label={`Previous image for ${project.project}`}
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => move(projectIndex, 1)}
                  className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-lg transition-colors hover:bg-white"
                  aria-label={`Next image for ${project.project}`}
                >
                  <ArrowRight size={18} />
                </button>

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="mb-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#111827]">
                    {project.status}
                  </span>
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {project.project}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-sky-100">{project.client}</p>
                </div>
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#111827]">
                    Client Project
                  </span>
                  <span className="rounded-full bg-[#111827] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {project.status}
                  </span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">{project.summary}</p>

                <div className="mb-5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => move(projectIndex, -1)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#111827] transition-colors hover:border-[#55b7e5] hover:bg-sky-50"
                  >
                    <ArrowLeft size={15} /> Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => move(projectIndex, 1)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#111827] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#55b7e5]"
                  >
                    Next <ArrowRight size={15} />
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {project.images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => updateActive(projectIndex, index)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-md border transition-colors ${
                        activeIndex === index ? "border-[#55b7e5] ring-2 ring-sky-100" : "border-transparent hover:border-gray-300"
                      }`}
                      aria-label={`Show image ${index + 1} for ${project.project}`}
                    >
                      <img src={image.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
