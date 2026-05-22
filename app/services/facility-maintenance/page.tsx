import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Facility Maintenance | Equipro Services", description: "Comprehensive mechanical and electrical facility maintenance services in Kenya — boilers, kitchen equipment, generators and full engineering support." };
export default function Page() {
  return <ServiceDetail
    title="Facility Maintenance"
    subtitle="Comprehensive mechanical and electrical facility maintenance — keeping your operations running smoothly."
    breadcrumbLabel="Facility Maintenance"
    heroImage="/images/gallery/equipro-project-56.jpg"
    sideImage="/images/gallery/equipro-project-57.jpg"
    icon="🔧"
    intro="Equipro provides comprehensive mechanical and electrical facility maintenance services for industrial, commercial and institutional clients across Kenya. Our professional approach ensures successful project completion on time and within budget."
    body={[
      "We take great care to understand our clients' operational requirements and design maintenance programmes that minimise disruption while maximising uptime. Our client-focused attitude, supported by proven experience, ensures that facilities remain safe, compliant and efficient.",
      "Our facility maintenance scope covers boiler and steam line installation and maintenance, kitchen equipment installation and maintenance, cold rooms supply, installation and maintenance, generator installations and maintenance, and general mechanical and electrical engineering services.",
      "Equipro's maintenance philosophy is built around the operating principles of fostering teamwork, assuring the safety of all employees, constantly pursuing quality in both the way we do business and the service we render, and taking a long-term approach to operating performance.",
    ]}
    features={[
      "Boiler and steam line installation and maintenance",
      "Kitchen equipment installation and maintenance service",
      "Cold rooms supply, installation and maintenance",
      "Generator installations and maintenance",
      "Electrical panel and wiring maintenance",
      "Planned preventive maintenance programmes",
      "Emergency breakdown and repair response",
      "Full mechanical and electrical engineering support",
    ]}
    specs={[
      { label: "Service Scope", value: "Mechanical, electrical, HVAC, refrigeration" },
      { label: "Sectors Served", value: "Industrial, commercial, food service, government" },
      { label: "PPM Frequency", value: "Monthly, quarterly, annual (agreed per contract)" },
      { label: "Response", value: "24/7 emergency support available" },
      { label: "Standards", value: "NCA Grade 5 (Refrigeration, Electrical)" },
      { label: "Reporting", value: "Full service reports after every visit" },
      { label: "Contract Options", value: "Full maintenance, labour-only, reactive" },
      { label: "Coverage", value: "Nairobi and surrounding regions" },
    ]}
  />;
}
