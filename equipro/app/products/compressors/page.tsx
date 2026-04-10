import ProductDetail from "@/components/ui/ProductDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Compressors | Equipro Products", description: "Industrial refrigeration compressors — piston, screw and hermetic types for NH3, CO2 and Freon refrigeration systems in Kenya." };
export default function Page() {
  return <ProductDetail
    title="Compressors"
    subtitle="Industrial-grade refrigeration compressors — piston, screw and hermetic types for all refrigerant systems."
    breadcrumbLabel="Compressors"
    heroImage="/images/cooling-technologies-bg.jpg"
    icon="⚙️"
    intro="In a refrigeration system, the compressor is the mechanical heart of the plant — converting low-pressure, low-temperature refrigerant gas into high-temperature, high-pressure refrigerant gas that can then be condensed and used to absorb heat in the evaporator."
    body={[
      "Equipro supplies and installs compressors from leading manufacturers for use with NH3, CO2 and Freon refrigerant systems. Our engineers select the most appropriate compressor type and capacity for each application, considering refrigerant type, temperature range, capacity range and duty cycle.",
      "Industrial refrigeration compressors are lubricated with oil forced by an oil pump or by the pressure difference between high and low-pressure sides to the moving parts — bearings, rotors and cylinder walls. Proper oil temperature and pressure control is critical to reliable, efficient compressor operation. Equipro's automation systems monitor and control both parameters continuously.",
      "We also offer compressor maintenance and overhaul services, ensuring your existing plant continues to operate reliably. Our engineers are qualified to work on leading brands and can provide genuine spare parts, seals, valves and bearings.",
    ]}
    features={[
      "Piston (reciprocating) compressors for NH3 and Freon applications",
      "Screw compressors for high-capacity NH3 and CO2 systems",
      "Hermetic compressors for smaller Freon installations",
      "Variable-speed (inverter-driven) compressors for energy efficiency",
      "Oil system monitoring and protection as standard",
      "Compatible with all major refrigerant types",
      "Available with intelligent control system integration",
      "Full installation, commissioning and warranty support",
    ]}
    specs={[
      { label: "Compressor Types", value: "Piston, screw, hermetic, semi-hermetic" },
      { label: "Refrigerants", value: "NH3, CO2, R404A, R449A, R410A, R290" },
      { label: "Capacity Range", value: "1 kW to 1,000+ kW cooling capacity" },
      { label: "Drive Options", value: "Fixed speed or variable speed (inverter)" },
      { label: "Oil System", value: "Integrated oil separator and return" },
      { label: "Control", value: "Electronic with PLC/SCADA integration" },
      { label: "Warranty", value: "Manufacturer warranty plus Equipro support" },
      { label: "Brands", value: "MYCOM, Bitzer, GEA, Grasso and equivalents" },
    ]}
    images={[
      "/images/compressors.png",
      "/images/cooling-technologies-bg.jpg",
    ]}
    variants={[
      { name: "Piston Compressor", desc: "Reciprocating compressor ideal for NH3 systems. Available in single and multi-cylinder configurations. Proven reliability for heavy industrial duty." },
      { name: "Screw Compressor", desc: "Rotary screw type for high-capacity systems. Smooth, continuous compression. Preferred for large NH3 and CO2 central plant." },
      { name: "Hermetic / Semi-Hermetic", desc: "Fully or partially sealed units for Freon systems. Compact and quiet. Suitable for commercial refrigeration and HVAC applications." },
    ]}
  />;
}
