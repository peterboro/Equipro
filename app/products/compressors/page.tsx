import ProductDetail from "@/components/ui/ProductDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Compressors | Equipro Products", description: "GEA industrial refrigeration compressors — piston and screw types for NH3, CO2 and Freon refrigeration systems in Kenya." };
export default function Page() {
  return <ProductDetail
    title="Compressors"
    subtitle="Industrial-grade GEA refrigeration compressors — piston and screw types for all refrigerant systems."
    breadcrumbLabel="Compressors"
    heroImage="/images/gallery/equipro-project-57.jpg"
    icon="⚙️"
    intro="In a refrigeration system, the compressor is the mechanical heart of the plant — converting low-pressure, low-temperature refrigerant gas into high-temperature, high-pressure refrigerant gas that can then be condensed and used to absorb heat in the evaporator. Equipro is a specialist in GEA compressors for industrial refrigeration applications."
    body={[
      "Equipro supplies and installs GEA compressors for use with NH3, CO2 and Freon refrigerant systems. GEA is a world-leading manufacturer of industrial refrigeration compressors, renowned for reliability, efficiency and longevity in the most demanding cold storage and industrial refrigeration plants. Our engineers select the most appropriate compressor type and capacity for each application, considering refrigerant type, temperature range, capacity range and duty cycle.",
      "Industrial refrigeration compressors are lubricated with oil forced by an oil pump or by the pressure difference between high and low-pressure sides to the moving parts — bearings, rotors and cylinder walls. Proper oil temperature and pressure control is critical to reliable, efficient compressor operation. Equipro's automation systems monitor and control both parameters continuously.",
      "We also offer compressor maintenance and overhaul services for GEA and other leading brands, ensuring your existing plant continues to operate reliably. Our engineers are factory-trained and can provide genuine GEA spare parts, seals, valves and bearings.",
    ]}
    features={[
      "GEA piston (reciprocating) compressors for NH3 and Freon applications",
      "GEA screw compressors for high-capacity NH3 and CO2 systems",
      "Variable-speed (inverter-driven) compressors for energy efficiency",
      "Oil system monitoring and protection as standard",
      "Compatible with all major refrigerant types: NH3, CO2, R404A, R449A",
      "Available with intelligent PLC/SCADA control system integration",
      "Full installation, commissioning and warranty support",
      "Ongoing maintenance contracts and genuine GEA spare parts",
    ]}
    specs={[
      { label: "Primary Brand", value: "GEA (global leader in industrial refrigeration)" },
      { label: "Compressor Types", value: "Piston (reciprocating) and screw" },
      { label: "Refrigerants", value: "NH3, CO2, R404A, R449A, R410A, R290" },
      { label: "Capacity Range", value: "1 kW to 1,000+ kW cooling capacity" },
      { label: "Drive Options", value: "Fixed speed or variable speed (inverter)" },
      { label: "Oil System", value: "Integrated oil separator and return" },
      { label: "Control", value: "Electronic with PLC/SCADA integration" },
      { label: "Warranty", value: "Manufacturer warranty plus Equipro support" },
    ]}
    images={[
      "/images/gallery/equipro-project-57.jpg",
      "/images/gallery/equipro-project-58.jpg",
    ]}
    variants={[
      { name: "GEA Piston Compressor", desc: "Reciprocating compressor ideal for NH3 systems. Available in single and multi-cylinder configurations. Proven GEA reliability for heavy industrial duty." },
      { name: "GEA Screw Compressor", desc: "Rotary screw type for high-capacity systems. Smooth, continuous compression. Preferred for large NH3 and CO2 central plant." },
      { name: "Variable Speed Drive", desc: "Inverter-driven compressors for energy efficiency. Matches capacity to demand, reducing electricity consumption. Ideal for plants with variable loads." },
    ]}
  />;
}
