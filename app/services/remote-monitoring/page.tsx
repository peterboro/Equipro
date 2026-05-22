import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Remote Monitoring & Control | Equipro Services", description: "Remote monitoring and control systems for refrigeration and HVAC plant. Real-time data, alarms and diagnostics from anywhere in Kenya." };
export default function Page() {
  return <ServiceDetail
    title="Remote Monitoring & Control"
    subtitle="Real-time visibility and control of your refrigeration and HVAC systems from anywhere, at any time."
    breadcrumbLabel="Remote Monitoring & Control"
    heroImage="/images/gallery/equipro-project-58.jpg"
    sideImage="/images/gallery/equipro-project-14.jpg"
    icon="📡"
    intro="Equipro's remote monitoring and control systems give you and our engineering team instant, real-time visibility of your refrigeration and HVAC plant — enabling faster response to alarms, proactive fault detection and energy optimisation without the need for an on-site visit."
    body={[
      "Our remote monitoring solutions connect to your existing PLC and control systems via Ethernet, VPN or cellular connections, allowing authorised users to view live system data, receive alarm notifications and make control adjustments from any location using a PC, tablet or smartphone.",
      "Remote diagnostics allows our technical support team to investigate faults and, in many cases, resolve them without dispatching an engineer — reducing response times and minimising downtime. Where a site visit is required, our engineers arrive with a full understanding of the fault history, making diagnosis faster.",
      "We also provide temperature monitoring systems for cold storage facilities, providing continuous product temperature assurance with automated alarm notifications when temperatures deviate from set points. This is essential for HACCP compliance and product quality management.",
    ]}
    features={[
      "Real-time visibility of all system parameters",
      "Automated alarm notifications via SMS and email",
      "Remote control capability for authorised users",
      "Remote diagnostics by Equipro engineering team",
      "Continuous temperature monitoring for cold stores",
      "HACCP-compliant temperature data logging and reporting",
      "Historical data analysis for performance trending",
      "Proactive fault detection to prevent breakdowns",
    ]}
    specs={[
      { label: "Connectivity", value: "Ethernet, VPN, 4G/LTE cellular" },
      { label: "User Interface", value: "Web browser and mobile app" },
      { label: "Alarm Delivery", value: "SMS, email, in-app push notification" },
      { label: "Data Logging", value: "Continuous with configurable intervals" },
      { label: "Temperature Accuracy", value: "±0.5°C" },
      { label: "Data Retention", value: "Minimum 12 months historical data" },
      { label: "HACCP Compliance", value: "Automated reports available" },
      { label: "Support", value: "Equipro remote engineering support" },
    ]}
  />;
}
