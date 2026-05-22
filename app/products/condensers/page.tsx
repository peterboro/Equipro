import ProductDetail from "@/components/ui/ProductDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Condensers | Equipro Products", description: "Air-cooled and water-cooled condensers for industrial and commercial refrigeration systems. Supply and installation in Kenya by Equipro." };
export default function Page() {
  return <ProductDetail
    title="Condensers"
    subtitle="Heat exchanger devices dispersing refrigeration system heat to ambient air or water — essential for efficient operation."
    breadcrumbLabel="Condensers"
    heroImage="/images/gallery/equipro-project-05.jpg"
    icon="🌡️"
    intro="A condenser is a heat exchanger device that utilises coils to transfer heat from the refrigerant flowing inside it to the air or water flowing over it. Controlling the condenser is essential for efficient refrigeration system operation."
    body={[
      "Equipro supplies and installs condensers for all refrigerant types and system sizes. Our engineers select the most appropriate condenser type and size based on the refrigerant, system capacity, available space, water availability and local climatic conditions.",
      "For CO2 and NH3 systems, condenser selection is particularly important. CO2 gas coolers operate above the critical point at high ambient temperatures and require careful selection to maintain system efficiency in Kenya's tropical climate. Equipro's engineering expertise ensures the right solution is specified for local conditions.",
      "Condenser control is integrated into our PLC and automation systems, enabling variable-speed fan control, head pressure optimisation and energy-saving floating head pressure control — all contributing to reduced running costs.",
    ]}
    features={[
      "Air-cooled condensers for all refrigerant types",
      "Water-cooled condensers and evaporative condensers (BAC)",
      "CO2 gas coolers for transcritical CO2 systems",
      "Variable-speed fan control for energy efficiency",
      "Floating head pressure control integration",
      "Designed for Kenya's high-ambient tropical conditions",
      "Stainless steel and copper coil options for longevity",
      "Full installation and commissioning support",
    ]}
    specs={[
      { label: "Condenser Types", value: "Air-cooled, water-cooled, evaporative" },
      { label: "Refrigerant Compatibility", value: "NH3, CO2, all HFC/HFO Freon types" },
      { label: "CO2 Options", value: "Gas coolers for transcritical CO2 systems" },
      { label: "Fan Drive", value: "Fixed speed or variable speed (EC motors)" },
      { label: "Coil Materials", value: "Copper, stainless steel, aluminium" },
      { label: "Control Integration", value: "PLC/SCADA compatible" },
      { label: "Ambient Design", value: "Rated for tropical high-ambient conditions" },
      { label: "Brands", value: "BAC, GEA, Güntner and equivalents" },
    ]}
    images={[
      "/images/gallery/equipro-project-34.jpg",
      "/images/gallery/equipro-project-59.jpg",
    ]}
  />;
}
