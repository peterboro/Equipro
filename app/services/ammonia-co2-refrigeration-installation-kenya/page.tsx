import type { Metadata } from "next";
import SeoLandingPage from "@/components/ui/SeoLandingPage";

export const metadata: Metadata = {
  title: "Ammonia & CO2 Refrigeration Installation in Kenya | Equipro",
  description:
    "Ammonia CO2 installation, NH3 refrigeration, R744 refrigeration, cascade systems, industrial cold storage refrigeration, commissioning and maintenance in Kenya.",
  alternates: {
    canonical: "/services/ammonia-co2-refrigeration-installation-kenya",
  },
};

export default function AmmoniaCo2RefrigerationPage() {
  return (
    <SeoLandingPage
      title="Ammonia & CO2 Refrigeration Installation in Kenya"
      subtitle="Industrial NH3, CO2/R744 and cascade refrigeration systems for cold storage, processing and manufacturing facilities."
      heroImage="/images/co2-nh3-cascade.jpg"
      intro="Equipro supports ammonia CO2 installation projects for industrial facilities that need dependable, efficient and future-ready refrigeration systems in Kenya."
      paragraphs={[
        "Our engineering team works with ammonia/NH3 refrigeration, CO2/R744 refrigeration and NH3/CO2 cascade systems for cold storage, food processing, agriculture, manufacturing and pharmaceutical environments. Each project is planned around capacity, operating temperature, safety requirements and long-term maintainability.",
        "For industrial cold storage, natural refrigerants can deliver strong performance with responsible environmental impact. We help clients evaluate whether ammonia, CO2 or a cascade approach is the right fit for the refrigeration load, site layout, energy targets and operational team.",
        "Installation work covers equipment coordination, pipework, valves, insulation, controls, safety devices and commissioning support. We also factor in gas detection, ventilation, pressure relief, emergency procedures and access for future maintenance.",
        "After handover, Equipro provides service and maintenance support to keep the refrigeration plant stable, efficient and compliant. Our technicians assist with diagnostics, preventive maintenance and performance checks for mission-critical cold chain operations.",
      ]}
      features={[
        "NH3/ammonia refrigeration design and installation support",
        "CO2/R744 refrigeration and cascade system implementation",
        "Cold storage plant commissioning and maintenance",
        "Safety systems, controls, detection and ventilation coordination",
        "Support for food, agriculture, manufacturing and pharmaceutical sites",
      ]}
      relatedLinks={[
        { label: "Industrial Refrigeration", href: "/services/industrial-refrigeration" },
        { label: "Refrigeration Technologies", href: "/products/refrigeration-technologies" },
        { label: "Cold Room Installation", href: "/services/cold-room-installation-kenya" },
        { label: "Contact Equipro", href: "/contact" },
      ]}
    />
  );
}
