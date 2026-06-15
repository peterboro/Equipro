import type { Metadata } from "next";
import SeoLandingPage from "@/components/ui/SeoLandingPage";

export const metadata: Metadata = {
  title: "Stainless Steel Water Tanks in Kenya | Elevated & Industrial Tanks",
  description:
    "Stainless steel water tanks Kenya, elevated water tanks, tower tanks, industrial water tanks and commercial water storage systems with pipework integration.",
  alternates: {
    canonical: "/products/stainless-steel-water-tanks-kenya",
  },
};

export default function StainlessSteelWaterTanksKenyaPage() {
  return (
    <SeoLandingPage
      title="Stainless Steel Water Tanks in Kenya"
      subtitle="Ground-mounted, elevated tower and industrial water storage systems for commercial and utility applications."
      heroImage="/images/stainless-steel-water-tower-tanks.jpeg"
      intro="Equipro supplies and installs stainless steel water tanks in Kenya for commercial, industrial and utility water storage requirements."
      paragraphs={[
        "Water storage systems must be durable, hygienic and practical to maintain. We support ground-mounted tanks, elevated water tanks, tower tanks and industrial water tanks depending on site conditions, demand profile and available space.",
        "For commercial and industrial facilities, stainless steel water tanks can support process water, domestic water, utility water and backup storage. We help clients align tank capacity, support structures and access requirements with operational needs.",
        "Elevated tower tanks require careful coordination between tank fabrication, structural support, ladders, platforms, pipework and safety access. Equipro also integrates pumps, valves and pipework where the broader utility system requires it.",
        "Our team can link water tank projects with mechanical, electrical and facility services, giving clients a single engineering partner for installation coordination and future maintenance support.",
      ]}
      features={[
        "Stainless steel water tanks for commercial and industrial sites",
        "Ground-mounted and elevated tower tank options",
        "Utility, process and domestic water storage support",
        "Pump, pipework and valve integration",
        "Installation coordination and maintenance support",
      ]}
      relatedLinks={[
        { label: "Water Tanks Product Page", href: "/products/stainless-steel-water-tanks" },
        { label: "Facility Maintenance", href: "/services/facility-maintenance" },
        { label: "Electrical Services", href: "/services/electrical-services" },
        { label: "Contact Equipro", href: "/contact" },
      ]}
    />
  );
}
