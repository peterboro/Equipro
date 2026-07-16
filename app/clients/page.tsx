import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/ui/PageHero";
import ClientLogo from "@/components/ui/ClientLogo";
import ClientProjectGallery from "@/components/ClientProjectGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | Equipro Investments — Our Track Record",
  description: "Equipro's client portfolio spans food processing, pharmaceuticals, agriculture, government and cold storage sectors across Kenya, Nigeria, Tanzania, and Ivory Coast.",
};

const clients = [
  {
    name: "NAS (Ennsvalley Bakery Ltd)", initials: "NAS", sector: "Food & Bakery",
    localLogo: "/images/logos/ennsvalleybakery.jpg",
    services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet (Videojet) Supply, Installation & Maintenance"],
  },
  {
    name: "Norbrook Kenya Ltd", initials: "NBK", sector: "Pharmaceuticals",
    localLogo: "/images/logos/norbrook.png",
    services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet (Videojet) Supply, Installation & Maintenance"],
  },
  {
    name: "Trufoods Ltd", initials: "TRU", sector: "Food Processing",
    localLogo: "/images/logos/trufoods.png",
    services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet (Videojet) Supply, Installation & Maintenance"],
  },
  {
    name: "Interconsumer Products Ltd", initials: "ICP", sector: "FMCG",
    localLogo: "/images/logos/interconsumer.png",
    services: ["Engineering Services", "Packaging Line Maintenance", "Inkjet (Videojet) Supply, Installation & Maintenance"],
  },
  {
    name: "Kibo Seed Company Ltd", initials: "KSC", sector: "Agriculture",
    localLogo: "/images/logos/KiboSeed.jpg",
    services: ["Cold Rooms, Air Conditioners Supply, Installation & Maintenance", "Generator Installations & Maintenance", "Seed Packaging Machines Supply, Installation & Maintenance"],
  },
  {
    name: "Simlaw Seeds", initials: "SLS", sector: "Agriculture",
    localLogo: "/images/logos/simlawseeds.png",
    services: ["Air Conditioners Supply, Installation & Maintenance", "Packaging Line Supply, Installation & Maintenance", "Inkjet (Videojet) Supply, Installation & Maintenance"],
  },
  {
    name: "Crown Farms Ltd", initials: "CFL", sector: "Agriculture — Delta State, Nigeria",
    localLogo: "/images/logos/crownfarms.png",
    services: ["Installation of Blast Freezers", "Cold Storage Facility Installation & Maintenance"],
  },
  {
    name: "SBI Impianti (SARL)", initials: "SBI", sector: "Cold Storage — Ivory Coast (Ongoing)",
    localLogo: "/images/logos/sbimpianti.png",
    services: ["Cold Storage Facility Design & Installation", "Industrial Refrigeration Systems"],
  },
  {
    name: "Glacier Products Ltd (Dairyland)", initials: "GPL", sector: "Cold Storage — Tanzania & Kenya (Ongoing)",
    localLogo: "/images/logos/dairyland.png",
    services: ["Cold Rooms Installation", "Stainless Steel Tanks Supply & Installation", "HVAC System Installation", "Ammonia / CO2 Cascade Refrigeration System Installation"],
  },
  {
    name: "White Field Agroprocessing Ltd", initials: "WFA", sector: "Cold Storage — Kano State, Nigeria (Complete)",
    localLogo: "/images/logos/whitefield.jpg",
    services: ["Cold Storage Facility Installation", "Ammonia Refrigeration System for Onion Storage"],
  },
  {
    name: "KAPA Oil Refineries Ltd", initials: "KOR", sector: "HVAC / Air Conditioning",
    localLogo: "/images/logos/kapaoil.png",
    services: ["HVAC Systems Supply & Installation", "Air Conditioner Installation & Maintenance Services"],
  },
  {
    name: "Cold Solutions Kenya Ltd", initials: "CSK", sector: "Industrial Refrigeration",
    localLogo: "/images/logos/ColdSolutionsKenya.jpg",
    services: ["Ammonia Valve Stations Supply & Installation", "Evaporators & Condensers Supply, Installation & Maintenance", "Ongoing Maintenance & Services"],
  },
];

const sectorColorMap: Record<string, string> = {
  "Food & Bakery": "bg-slate-100 text-slate-700",
  "Pharmaceuticals": "bg-sky-100 text-slate-700",
  "Food Processing": "bg-slate-100 text-slate-700",
  "FMCG": "bg-slate-100 text-slate-700",
  "Technology": "bg-sky-100 text-slate-700",
  "Agriculture": "bg-lime-100 text-lime-800",
  "Government": "bg-gray-100 text-gray-800",
};

const ongoingProjects = [
  {
    client: "Glacier Products Ltd (Dairyland)",
    project: "Dairyland Ultra-Modern Refrigeration Facility",
    status: "Featured Client Project",
    summary:
      "An advanced industrial refrigeration installation for Dairyland, built around an ammonia (NH3) and carbon dioxide (CO2) cascade system. The integrated facility supports dependable temperature control across cold rooms, chiller rooms and freezer rooms, with serviceable plant layouts, insulated pipework and automated controls.",
    features: [
      "NH3 / CO2 Cascade System",
      "Cold Rooms",
      "Chiller Rooms",
      "Freezer Rooms",
      "Automated Controls",
      "Industrial Plant Room",
    ],
    cover: "/images/projects/dairyland-ultra-modern-facility/dairyland-01.jpeg",
    images: [
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-01.jpeg",
        alt: "Wide view of Dairyland's ultra-modern NH3 and CO2 cascade refrigeration plant",
      },
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-02.jpeg",
        alt: "Insulated refrigeration pipework and service infrastructure at the Dairyland facility",
      },
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-03.jpeg",
        alt: "Industrial pressure vessels and insulated pipework serving Dairyland's refrigeration system",
      },
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-04.jpeg",
        alt: "Ammonia and carbon dioxide cascade refrigeration vessels and equipment at Dairyland",
      },
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-05.jpeg",
        alt: "Industrial compressor line and overhead refrigeration services at the Dairyland plant",
      },
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-06.jpeg",
        alt: "Automated compressor package with operator control panel at Dairyland",
      },
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-07.jpeg",
        alt: "Insulated vessels and precision pipework within Dairyland's cascade refrigeration plant",
      },
      {
        src: "/images/projects/dairyland-ultra-modern-facility/dairyland-08.jpeg",
        alt: "Vertical view through the insulated pipework and steel structure of the Dairyland plant",
      },
    ],
  },
  {
    client: "Glacier Products Ltd (Dairyland)",
    project: "Arusha Bonite, Tanzania",
    status: "Ongoing Project",
    summary:
      "Cold room and refrigeration works for yoghurt and chocolate room areas, including panel works, evaporator installation and site progress.",
    cover: "/images/projects/arusha-bonite-tanzania/arusha-bonite-01.jpeg",
    images: [
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-01.jpeg",
        alt: "Cold room site preparation for Glacier Products in Tanzania",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-02.jpeg",
        alt: "Cold room panel installation progress at Arusha Bonite",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-03.jpeg",
        alt: "Insulated cold room panels stacked at the Tanzania site",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-04.jpeg",
        alt: "Refrigeration installation progress for Glacier Products Tanzania",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-05.jpeg",
        alt: "Cold room works ongoing for Arusha Bonite Tanzania",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-06.jpeg",
        alt: "Panel and refrigeration works at the Arusha Bonite project",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-07.jpeg",
        alt: "Site progress photo for Glacier Products Tanzania cold room works",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-08.jpeg",
        alt: "Cold room installation progress in Arusha Tanzania",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-09.jpeg",
        alt: "Refrigeration project works for Glacier Products Ltd",
      },
      {
        src: "/images/projects/arusha-bonite-tanzania/arusha-bonite-10.jpeg",
        alt: "Ongoing cold room and refrigeration installation at Arusha Bonite",
      },
    ],
  },
  {
    client: "SBI Impianti (SARL)",
    project: "Ivory Coast Cold Storage Project",
    status: "Ongoing Project",
    summary:
      "Industrial cold storage installation progress, covering process areas, stainless steel services, equipment supports and refrigeration infrastructure.",
    cover: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-01.jpeg",
    images: [
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-01.jpeg",
        alt: "Stainless steel processing line at the Ivory Coast cold storage project",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-02.jpeg",
        alt: "Cold storage installation progress for SBI Impianti in Ivory Coast",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-03.jpeg",
        alt: "Industrial refrigeration work area at the Ivory Coast project",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-04.jpeg",
        alt: "Cold storage project structure and service installation in Ivory Coast",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-05.jpeg",
        alt: "Equipment installation progress for the Ivory Coast cold storage project",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-06.jpeg",
        alt: "Industrial plant installation works for SBI Impianti Ivory Coast",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-07.jpeg",
        alt: "Refrigeration and cold storage services installation in Ivory Coast",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-08.jpeg",
        alt: "Ongoing cold storage facility works in Ivory Coast",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-09.jpeg",
        alt: "Cold storage project progress photo for SBI Impianti",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-10.jpeg",
        alt: "Ivory Coast industrial refrigeration project installation",
      },
      {
        src: "/images/projects/ivory-coast-cold-storage/ivory-coast-project-11.jpeg",
        alt: "Site progress photo from the Ivory Coast cold storage project",
      },
    ],
  },
];

function getSectorColor(sector: string): string {
  for (const [key, val] of Object.entries(sectorColorMap)) {
    if (sector.startsWith(key)) return val;
  }
  return "bg-sky-100 text-slate-700";
}

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Clients"
        subtitle="A proven track record across food processing, pharmaceuticals, agriculture, government and industrial cold storage — Kenya and beyond."
        breadcrumbs={[{ label: "Clients" }]}
        image="/images/gallery/equipro-project-10.jpg"
      />

      {/* Stats */}
      <section className="py-14 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "15+", label: "Major Clients" },
              { num: "16+", label: "Years Track Record" },
              { num: "Multi-sector", label: "Industry Coverage" },
              { num: "Regional Projects", label: "Work delivered across Kenya, Nigeria, Tanzania & Ivory Coast" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</div>
                <div className="text-sky-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Project Galleries */}
      <section className="py-20 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Client Installations</span>
              <h2 className="text-4xl font-bold text-[#111827]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Project Photos by Client
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-gray-500">
              Selected installations and current project progress, grouped by client so each facility can be reviewed clearly.
            </p>
          </div>

          <ClientProjectGallery projects={ongoingProjects} />
        </div>
      </section>

      {/* Client List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#55b7e5] text-xs font-bold tracking-widest uppercase mb-3">Trusted By</span>
            <h2 className="text-4xl font-bold text-[#111827]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Client Portfolio</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">A selection of our clients and the services we offer or have offered them.</p>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg, #55b7e5, #111827)" }} />
          </div>

          <div className="space-y-5">
            {clients.map((client, i) => (
              <div
                key={client.name}
                className={`flex flex-col md:flex-row gap-5 p-6 rounded-2xl border transition-shadow hover:shadow-lg ${i % 2 === 0 ? "bg-[#f4f6f8] border-gray-100" : "bg-white border-gray-100"}`}
              >
                {/* Logo box */}
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-16 rounded-xl bg-white border border-gray-150 shadow-sm overflow-hidden p-2">
                  <ClientLogo
                    domain={"domain" in client ? (client as { domain: string }).domain : undefined}
                    localLogo={"localLogo" in client ? (client as { localLogo: string }).localLogo : undefined}
                    name={client.name}
                    initials={client.initials}
                  />
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <h3 className="font-bold text-[#111827] text-lg leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{client.name}</h3>
                    <span className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ${getSectorColor(client.sector)}`}>
                      {client.sector}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((svc) => (
                      <span key={svc} className="inline-block bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-lg">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
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
