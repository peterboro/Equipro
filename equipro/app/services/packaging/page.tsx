import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Packaging Line Services | Equipro Services", description: "Packaging materials, packaging equipment supply, installation and maintenance. Inkjet systems and seed packaging services in Kenya." };
export default function Page() {
  return <ServiceDetail
    title="Packaging Line Services"
    subtitle="Packaging materials, equipment supply, installation and maintenance — keeping your production line running."
    breadcrumbLabel="Packaging Line Services"
    heroImage="/images/freon-refrigeration-system.png"
    sideImage="/images/floor-heating.png"
    icon="📦"
    intro="Equipro Investments (K) Ltd provides packaging materials, packaging equipment and associated inkjet coding systems supply, installation and maintenance services. We support food processing, agricultural and manufacturing companies to keep their production and packaging lines running efficiently."
    body={[
      "Our packaging line services are delivered to some of Kenya's most prominent food and agricultural companies, including NAS (Ennsvalley Bakery), Norbrook Kenya, Trufoods, Interconsumer Products and Simlaw Seeds. This track record demonstrates our ability to understand and support the specific requirements of food-grade and agricultural packaging operations.",
      "Inkjet coding and marking systems are critical to product traceability and regulatory compliance. Equipro supplies, installs and maintains inkjet systems for date coding, batch marking and variable data printing on packaging lines — ensuring continuous, reliable operation and minimising costly production stoppages.",
      "For agricultural clients, we provide seed packaging materials and machinery supply, installation and maintenance. Our team understands the specific requirements of seed processing and packaging operations, including the precision and hygiene standards required for certified seed products.",
    ]}
    features={[
      "Packaging equipment supply, installation and commissioning",
      "Packaging line maintenance — planned and reactive",
      "Inkjet coding and marking system supply and maintenance",
      "Seed packaging materials and machine supply",
      "Production line engineering support",
      "Spare parts supply and stock management",
      "Operator training on equipment use",
      "Emergency breakdown response for production-critical equipment",
    ]}
    specs={[
      { label: "Equipment Types", value: "Form-fill-seal, flow wrap, check-weighers, coders" },
      { label: "Inkjet Systems", value: "CIJ, TIJ, laser coding systems" },
      { label: "Industries Served", value: "Food, beverages, agriculture, FMCG" },
      { label: "Maintenance Type", value: "PPM and reactive support contracts" },
      { label: "Spare Parts", value: "Stocked for fast turnaround" },
      { label: "Response", value: "Priority response for production-critical systems" },
      { label: "Training", value: "Operator and technician training available" },
      { label: "Coverage", value: "Nairobi and nationwide" },
    ]}
  />;
}
