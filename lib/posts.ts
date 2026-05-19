export const posts = [
  {
    title: "Natural Refrigerants: NH3 & CO2 — The Future of Industrial Cooling",
    slug: "natural-refrigerants-nh3-co2",
    excerpt:
      "Ammonia (R-717) and CO2 (R-744) offer zero ozone depletion potential, near-zero global warming potential, and superior thermodynamic efficiency. We explore why natural refrigerants are the smart choice for new industrial refrigeration projects.",
    date: "15 March 2024",
    category: "Technology",
    readTime: "7 min read",
    image: "/images/ammonia.jpg",
    featured: true,
    content: [
      "Natural refrigerants such as ammonia and CO2 are gaining renewed interest due to their low environmental impact and excellent heat transfer properties.",
      "Ammonia (NH3) has outstanding thermodynamic performance for large industrial systems, but requires disciplined safety and detection systems because of its toxicity. CO2 (R-744) excels in cascade and transcritical systems where its physical properties are leveraged for efficiency.",
      "In designing with natural refrigerants, engineers must consider material compatibility, pressure levels, and local codes. When implemented correctly, the result is a robust, energy-efficient system with a reduced carbon footprint.",
    ],
  },
  {
    title: "Turnkey Cold Storage: From Project Design to Commissioning",
    slug: "turnkey-cold-storage-design-commissioning",
    excerpt:
      "Equipro has built a strong reputation delivering successful turnkey refrigeration projects. We walk through the full project lifecycle — from initial energy and capacity analysis through to commissioning and handover.",
    date: "20 January 2024",
    category: "Projects",
    readTime: "6 min read",
    image: "/images/co2-nh3-cascade.jpg",
    featured: false,
    content: [
      "Delivering a turnkey cold storage facility requires close collaboration between owners, designers and contractors to align performance, budget and schedule.",
      "Key stages include load calculations, refrigeration plant selection, insulation and panel specification, and control strategy development. Thorough FAT and SAT processes ensure equipment meets contract performance before handover.",
      "We prioritise maintainability and operational training so owners can reliably operate and troubleshoot their systems after commissioning.",
    ],
  },
  {
    title: "Floor Heating for Cold Storage — Preventing Structural Damage",
    slug: "floor-heating-cold-storage",
    excerpt:
      "Floor heating systems prevent floors from freezing and icing in cold storage facilities. We explain the technology, types (wired and mat systems), installation process and maintenance requirements.",
    date: "5 November 2023",
    category: "Products",
    readTime: "5 min read",
    image: "/images/floor-heating.png",
    featured: false,
    content: [
      "Cold-store floors are vulnerable to frost heave and ice build-up which can damage finishes and block pallet movement. Embedded heating prevents these issues by keeping the slab above freezing.",
      "Both electric mat systems and hydronic piping provide reliable results — selection depends on project scale and integration with existing services.",
      "Proper insulation beneath the slab and correct control strategies are essential to maximise efficiency and minimise running costs.",
    ],
  },
  {
    title: "PLC & Automation: Smarter Control for Industrial Refrigeration",
    slug: "plc-automation-refrigeration",
    excerpt:
      "PLC and SCADA systems provide instant monitoring of all measurable parameters in a refrigeration system. We explain how automation improves efficiency, safety and uptime for cold storage operators.",
    date: "18 September 2023",
    category: "Technology",
    readTime: "8 min read",
    image: "/images/glycol.jpg",
    featured: false,
    content: [
      "Automation allows precise control of compressors, condensers and fans to maintain temperatures while optimising energy use.",
      "Remote monitoring and alarm escalation reduce downtime and enable proactive maintenance, while data logging supports continuous improvement and regulatory compliance.",
      "When designing PLC systems, focus on clear HMI screens, robust I/O wiring and fail-safe defaults to protect stored product integrity.",
    ],
  },
  {
    title: "Ammonia (NH3) Refrigeration: Advantages & Safety Considerations",
    slug: "ammonia-refrigeration-advantages",
    excerpt:
      "Ammonia has been used as a refrigerant for over 100 years. Classified under ASHRAE as R-717, it has ODP and GWP ratings of zero. We explore its thermodynamic advantages and the safety systems required for compliant operation.",
    date: "4 July 2023",
    category: "Industry",
    readTime: "9 min read",
    image: "/images/co2.jpg",
    featured: false,
    content: [
      "Ammonia's thermophysical properties make it extremely efficient in large-scale refrigeration, offering lower mass flow rates and smaller heat exchangers for equivalent duty.",
      "Safety considerations include gas detection, ventilation, relief systems and trained personnel. Modern standards and engineered controls mitigate risk when systems are correctly designed and maintained.",
      "Owners should evaluate lifecycle costs — ammonia systems can be very economical where safety and regulatory requirements are met.",
    ],
  },
  {
    title: "HACCP Compliance in Cold Storage Facility Design",
    slug: "haccp-compliance-cold-storage",
    excerpt:
      "HACCP (Hazard Analysis and Critical Control Points) quality assurance is a cornerstone of food safety in cold storage operations. We explain how Equipro integrates HACCP requirements into refrigeration system design, installation and commissioning.",
    date: "12 April 2023",
    category: "Industry",
    readTime: "6 min read",
    image: "/images/fgas.jpg",
    featured: false,
    content: [
      "HACCP planning identifies critical control points such as temperature control, cleaning regimes and physical segregation to prevent cross-contamination.",
      "Design choices — including door types, airflow patterns and temperature zoning — directly affect product safety and traceability.",
      "Effective commissioning and operator training embed HACCP principles into day-to-day operations, ensuring long-term compliance.",
    ],
  },
];

export const categories = ["All", "Technology", "Projects", "Products", "Industry"];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
