import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Electrical Services | Equipro Services", description: "NCA 5 registered electrical contractor in Kenya. Generator installations, inverter maintenance, electrical panels, wiring and full electrical services." };
export default function Page() {
  return <ServiceDetail
    title="Electrical Services"
    subtitle="NCA 5 registered electrical contractor — installations, maintenance and repair for industrial and commercial facilities."
    breadcrumbLabel="Electrical Services"
    heroImage="/images/co2-nh3-cascade.jpg"
    sideImage="/images/co2-nh3-cascade.jpg"
    icon="⚡"
    intro="Equipro Investments (K) Ltd is fully registered with NCA as an Electrical contractor at Grade 5. Our qualified electrical engineers deliver safe, compliant and reliable electrical installations and maintenance services across Kenya."
    body={[
      "Our electrical services cover the full spectrum of commercial and industrial electrical works — from initial design and installation through to ongoing maintenance, fault finding and repair. We work on projects of all sizes, from single equipment installations to full facility electrical fit-outs.",
      "Key service areas include generator installations and maintenance, inverter maintenance and repair, server room air conditioning electrical work, electrical panel installation and maintenance, power distribution, lighting systems and all associated electrical works required for refrigeration and HVAC installations.",
      "All Equipro electrical work is carried out by qualified engineers in strict compliance with NCA standards and local electrical regulations. We provide full test and inspection certification on completion, giving our clients the confidence that their electrical systems are safe and compliant.",
    ]}
    features={[
      "NCA 5 registered electrical contractor",
      "Generator installation, commissioning and maintenance",
      "Inverter systems maintenance and repair",
      "Electrical panel installation and maintenance",
      "Power distribution and sub-mains installation",
      "Lighting systems design and installation",
      "Electrical works for HVAC and refrigeration systems",
      "Test, inspection and certification on completion",
    ]}
    specs={[
      { label: "NCA Registration", value: "Electrical Contractor — Grade 5" },
      { label: "Voltage Range", value: "Single phase 230V, Three phase 415V" },
      { label: "Generator Range", value: "5 kVA to 1,000+ kVA" },
      { label: "Standards", value: "IEE Wiring Regulations, local NCA codes" },
      { label: "Certification", value: "Test & inspection reports on completion" },
      { label: "Sectors", value: "Industrial, commercial, food processing, government" },
      { label: "Response", value: "Emergency electrical response available" },
      { label: "Coverage", value: "Nairobi and surrounding regions" },
    ]}
  />;
}
