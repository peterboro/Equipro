import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "PLC & Automation | Equipro Services", description: "PLC and automation systems for instant monitoring and control of industrial refrigeration and HVAC systems. SCADA integration and remote supervision in Kenya." };
export default function Page() {
  return <ServiceDetail
    title="PLC & Automation Systems"
    subtitle="Instant monitoring and precision control of all parameters in your refrigeration and HVAC systems."
    breadcrumbLabel="PLC & Automation"
    heroImage="/images/gallery/equipro-project-14.jpg"
    sideImage="/images/gallery/equipro-project-59.jpg"
    icon="🖥️"
    intro="PLC (Programmable Logic Controller) and automation systems provide instant monitoring of all data in the refrigeration system. They ensure the measurement of all measurable parameters and the correct operation of the system with parameter relationships — giving you complete visibility and control."
    body={[
      "Equipro designs, installs and commissions PLC and SCADA automation systems for industrial refrigeration and HVAC applications. Our automation solutions integrate compressor control, evaporator management, condenser control, liquid level regulation, oil systems monitoring and safety system management into a single, unified supervisory platform.",
      "Remote monitoring capability allows our engineers and your operations team to view system status, receive alarms and make adjustments from anywhere. This is particularly valuable for facilities operating outside of standard business hours or located remotely from engineering support teams.",
      "We also offer optimisation services for existing automation systems — acquiring and evaluating measurement data, identifying inefficiencies, and tuning control parameters to achieve target energy values. This can deliver significant energy savings on existing refrigeration plant without major capital investment.",
    ]}
    features={[
      "PLC-based control for all refrigeration system components",
      "SCADA integration with full supervisory overview",
      "Remote monitoring and remote control capability",
      "Compressor, evaporator and condenser management",
      "Liquid level regulation systems (HP LLRS and LP LLRS)",
      "Oil system monitoring and protection",
      "Safety system integration and alarm management",
      "Data acquisition, logging and historical reporting",
      "Energy optimisation and target value tuning",
    ]}
    specs={[
      { label: "PLC Platforms", value: "Siemens, Allen-Bradley, Schneider, GEA Omni" },
      { label: "SCADA", value: "Full supervisory computer integration" },
      { label: "Remote Access", value: "Ethernet / VPN / Cellular (SIM)" },
      { label: "Data Logging", value: "Continuous, with historical analysis" },
      { label: "Alarm System", value: "Multi-level alarms with SMS/email notification" },
      { label: "Safety Integration", value: "EN 13136 compliant safety system integration" },
      { label: "Optimisation", value: "Target energy value tuning available" },
      { label: "Support", value: "Remote diagnostics and supervision" },
    ]}
  />;
}
