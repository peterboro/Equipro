import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HVAC Systems in Kenya | Commercial & Industrial HVAC Contractors",
  description: "HVAC systems, commercial HVAC, industrial ventilation, air handling units, VRF/VRV systems, installation and maintenance in Kenya.",
};
export default function Page() {
  return <ServiceDetail
    title="HVAC Systems"
    subtitle="Heating, Ventilation and Air Conditioning — System Air fans, Trane AHUs, Midea VRF/VRV — supply, installation and maintenance across Kenya."
    breadcrumbLabel="HVAC Systems"
    heroImage="/images/gallery/equipro-project-47.jpg"
    sideImage="/images/gallery/equipro-project-51.jpg"
    icon="🌬️"
    intro="As specialist HVAC contractors registered with NCA at Grade 5, Equipro Investments (K) Ltd provides complete heating, ventilation and air conditioning services for commercial, industrial and institutional facilities across Kenya. We partner with globally recognised brands — System Air, Trane and Midea — to deliver systems that match every application and budget."
    body={[
      "Our HVAC portfolio spans industrial ventilation using System Air industrial fans, large-scale air handling using Trane Air Handling Units (AHUs), and comfort and process cooling using Midea VRF/VRV systems. This breadth means Equipro can specify and install the most appropriate equipment for each environment — whether a factory floor, commercial office, server room or cold storage anteroom.",
      "System Air industrial fans are the benchmark for ventilation in demanding environments. Equipro supplies and installs System Air axial, centrifugal and mixed-flow fans for warehouse ventilation, production areas, plant rooms and fresh air make-up systems. Trane Air Handling Units offer precise temperature, humidity and air quality control for larger facilities requiring centralised HVAC.",
      "For multi-zone comfort cooling, Equipro installs Midea VRF (Variable Refrigerant Flow) and VRV (Variable Refrigerant Volume) systems — an energy-efficient solution that serves multiple indoor units from a single outdoor plant, with individual zone control. Our team handles the full project lifecycle from load calculation and design through to installation, commissioning and ongoing maintenance.",
    ]}
    features={[
      "System Air industrial fans — axial, centrifugal and mixed-flow",
      "Trane Air Handling Units (AHUs) for centralised HVAC",
      "Midea VRF/VRV multi-zone comfort cooling systems",
      "NCA 5 registered refrigeration and air conditioning contractor",
      "Server room precision air conditioning supply and maintenance",
      "Split and multi-split systems for smaller applications",
      "Inverter technology for energy efficiency",
      "Ventilation design and ducted system installation",
      "Planned preventive maintenance programmes",
      "Emergency breakdown response",
    ]}
    specs={[
      { label: "Fan Brands", value: "System Air (industrial fans — axial, centrifugal, mixed-flow)" },
      { label: "AHU Brand", value: "Trane Air Handling Units" },
      { label: "VRF/VRV Brand", value: "Midea VRF / VRV systems" },
      { label: "Other Systems", value: "Split, multi-split, cassette, centralised" },
      { label: "Applications", value: "Commercial, industrial, server rooms, cold storage antechambers" },
      { label: "Refrigerants", value: "R410A, R32, R290, R134a" },
      { label: "Capacity Range", value: "1 kW to 500+ kW" },
      { label: "Control", value: "Individual, zoned, BMS integration" },
      { label: "Compliance", value: "NCA Grade 5 registered" },
      { label: "Response Time", value: "24/7 emergency support available" },
    ]}
  />;
}
