import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "HVAC Systems | Equipro Services", description: "Heating, Refrigeration, Ventilation and Air Conditioning (HVAC) systems supply, installation and maintenance. NCA 5 registered contractors in Kenya." };
export default function Page() {
  return <ServiceDetail
    title="HVAC Systems"
    subtitle="Heating, Refrigeration, Ventilation and Air Conditioning — supply, installation and maintenance across Kenya."
    breadcrumbLabel="HVAC Systems"
    heroImage="/images/fgas.jpg"
    sideImage="/images/cooling-technologies-bg.jpg"
    icon="🌬️"
    intro="As specialist HVAC contractors registered with NCA at Grade 5, Equipro Investments (K) Ltd provides complete heating, refrigeration, ventilation and air conditioning services for commercial, industrial and institutional facilities across Kenya."
    body={[
      "From server room air conditioning to large-scale centralised HVAC systems, Equipro has the engineering expertise and site experience to deliver the right solution for any environment. We supply, install and commission systems from leading manufacturers, and provide ongoing maintenance contracts to protect your investment.",
      "Our HVAC team handles the full project lifecycle — from initial site assessment and load calculation through to design, equipment procurement, installation, commissioning and handover. We work closely with architects, engineers and building managers to ensure seamless integration with other building services.",
      "Equipro's maintenance programmes are designed to maximise system uptime and energy efficiency. Our technicians carry out planned preventive maintenance visits at agreed intervals, complemented by rapid response to breakdowns. All work is carried out by qualified engineers with full compliance to local NCA standards.",
    ]}
    features={[
      "NCA 5 registered refrigeration and air conditioning contractor",
      "Server room precision air conditioning supply and maintenance",
      "Split, VRF/VRV and centralised systems",
      "Inverter technology for energy efficiency",
      "Ventilation design and ducted system installation",
      "Planned preventive maintenance programmes",
      "Emergency breakdown response",
      "Energy efficiency audits and system optimisation",
    ]}
    specs={[
      { label: "System Types", value: "Split, multi-split, VRF, centralised, cassette" },
      { label: "Applications", value: "Commercial, industrial, server rooms, residential" },
      { label: "Refrigerants", value: "R410A, R32, R290, R134a" },
      { label: "Capacity Range", value: "1 kW to 500+ kW" },
      { label: "Control", value: "Individual, zoned, BMS integration" },
      { label: "Maintenance", value: "Planned PPM and reactive support" },
      { label: "Compliance", value: "NCA Grade 5 registered" },
      { label: "Response Time", value: "24/7 emergency support available" },
    ]}
  />;
}
