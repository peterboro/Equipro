import type { Metadata } from "next";
import SeoLandingPage from "@/components/ui/SeoLandingPage";

export const metadata: Metadata = {
  title: "Cold Room Installation in Kenya | Cold Storage Contractors",
  description:
    "Cold room installation Kenya, coldrooms, freezer rooms, insulated panels, doors, XPS floor insulation, floor heating and refrigeration plant support.",
  alternates: {
    canonical: "/services/cold-room-installation-kenya",
  },
};

export default function ColdRoomInstallationPage() {
  return (
    <SeoLandingPage
      title="Cold Room Installation in Kenya"
      subtitle="Cold storage design, insulated rooms, freezer rooms and refrigeration plant installation for commercial and industrial sites."
      heroImage="/images/site-cold-room-wide.jpg"
      intro="Equipro delivers cold room installation support for businesses that need reliable coldrooms, freezer rooms and cold storage facilities in Nairobi and across Kenya."
      paragraphs={[
        "A successful cold room project starts with careful design. We review storage temperature, product type, room size, door traffic, insulation requirements, equipment access and operating workflow before specifying the right cold storage solution.",
        "Our cold room installation scope can include insulated panels, cold room doors, XPS floor insulation, floor heating systems, evaporators, condensers, compressors, controls and pipework. The goal is a complete room that maintains temperature while remaining practical to operate and service.",
        "For freezer room installation, floor insulation and floor heating are especially important because they help prevent frost heave and structural damage. We coordinate these elements with the refrigeration plant so the room works as one integrated system.",
        "Equipro also assists with commissioning, maintenance and repairs. After installation, we help clients keep temperature performance stable through planned service, diagnostics and corrective work when required.",
      ]}
      features={[
        "Cold room and freezer room design support",
        "Insulated panels, doors and XPS floor insulation",
        "Floor heating systems for freezer applications",
        "Refrigeration plant installation and commissioning",
        "Preventive maintenance and cold storage service support",
      ]}
      relatedLinks={[
        { label: "Cold Room Equipment", href: "/products/cold-room-equipment" },
        { label: "Industrial Refrigeration", href: "/services/industrial-refrigeration" },
        { label: "Freon Refrigeration Systems", href: "/services/freon-refrigeration-systems-kenya" },
        { label: "Contact Equipro", href: "/contact" },
      ]}
    />
  );
}
