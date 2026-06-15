import type { Metadata } from "next";
import SeoLandingPage from "@/components/ui/SeoLandingPage";

export const metadata: Metadata = {
  title: "HVAC Systems in Kenya | Commercial & Industrial HVAC Contractors",
  description:
    "HVAC systems Kenya, commercial HVAC, industrial ventilation, VRF/VRV systems, air handling units, server room cooling and preventive maintenance.",
  alternates: {
    canonical: "/services/hvac-systems-kenya",
  },
};

export default function HvacSystemsKenyaPage() {
  return (
    <SeoLandingPage
      title="HVAC Systems in Kenya"
      subtitle="Commercial and industrial HVAC installation, ventilation, air handling and maintenance support."
      heroImage="/images/site-guntner-evaporator.jpg"
      intro="Equipro provides HVAC systems in Kenya for commercial, industrial and specialist technical spaces that need stable temperature, ventilation and air quality."
      paragraphs={[
        "As HVAC contractors in Nairobi, we support projects from concept and equipment selection through installation, commissioning and preventive maintenance. Our work includes commercial HVAC, industrial HVAC systems, ventilation systems, air handling units and VRF/VRV systems.",
        "We design around the actual operating conditions of the building. This includes heat loads, occupancy, process heat, fresh air requirements, equipment access, controls and energy efficiency targets. For server rooms and critical spaces, we also consider redundancy and reliability.",
        "Industrial ventilation and air handling systems require disciplined coordination with electrical, controls and mechanical services. Equipro helps ensure ducting, fans, AHUs, pipework and controls are installed with the rest of the facility in mind.",
        "Preventive maintenance is central to long-term performance. Our team supports inspection, cleaning, diagnostics, repairs and performance checks so systems continue to deliver comfort, process cooling and efficient operation.",
      ]}
      features={[
        "Commercial and industrial HVAC installation",
        "VRF/VRV systems and air handling units",
        "Ventilation systems for technical and industrial spaces",
        "Server room and process cooling support",
        "Preventive maintenance and energy-efficiency reviews",
      ]}
      relatedLinks={[
        { label: "HVAC Systems Service", href: "/services/hvac-systems" },
        { label: "Facility Maintenance", href: "/services/facility-maintenance" },
        { label: "Remote Monitoring", href: "/services/remote-monitoring" },
        { label: "Contact Equipro", href: "/contact" },
      ]}
    />
  );
}
