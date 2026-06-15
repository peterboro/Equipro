import type { Metadata } from "next";
import SeoLandingPage from "@/components/ui/SeoLandingPage";

export const metadata: Metadata = {
  title: "Freon Refrigeration Systems in Kenya | Installation & Maintenance",
  description:
    "Freon refrigeration systems, Freon gas support, R134a, R404A, R407C, R410A and R449A refrigerant guidance for HVAC, cold rooms and industrial cooling in Kenya.",
  alternates: {
    canonical: "/services/freon-refrigeration-systems-kenya",
  },
};

export default function FreonRefrigerationSystemsPage() {
  return (
    <SeoLandingPage
      title="Freon Refrigeration Systems in Kenya"
      subtitle="Installation, servicing and refrigerant support for HVAC, cold room and industrial cooling systems."
      heroImage="/images/freon-refrigeration-system.png"
      intro="Equipro provides Freon systems support for commercial HVAC, cold rooms and selected industrial refrigeration applications across Kenya."
      paragraphs={[
        "Freon refrigeration systems remain common in many HVAC and cooling installations, especially where equipment compatibility, serviceability and project scale make synthetic refrigerants practical. We help clients assess the correct refrigerant path for existing and new systems.",
        "Our support covers refrigerant selection, system compatibility checks, charging guidance, leak-related service work, maintenance and component coordination. Common refrigerants include R134a, R404A, R407C, R410A, R422D and R449A depending on the equipment and operating conditions.",
        "For cold room Freon systems, our team considers cooling duty, evaporator performance, condenser sizing, controls and energy use. For HVAC Freon systems, we support commercial air conditioning, VRF/VRV equipment and plant rooms where professional handling is required.",
        "Equipro also supplies Freon gases and related refrigeration product support, helping maintenance teams source the right refrigerant while protecting equipment reliability and safety.",
      ]}
      features={[
        "Freon refrigeration system installation and maintenance support",
        "R134a, R404A, R407C, R410A, R422D and R449A guidance",
        "Cold room, HVAC and commercial cooling applications",
        "Refrigerant charging, compatibility and service coordination",
        "Internal product support for Freon refrigerant gases",
      ]}
      relatedLinks={[
        { label: "Freon Gases", href: "/products/freon-gases" },
        { label: "Refrigeration Technologies", href: "/products/refrigeration-technologies" },
        { label: "Cold Room Equipment", href: "/products/cold-room-equipment" },
        { label: "Contact Equipro", href: "/contact" },
      ]}
    />
  );
}
