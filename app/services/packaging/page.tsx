import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Packaging Line Services | Equipro Services", description: "Packaging materials, packaging equipment, Videojet inkjet coding systems — supply, installation and maintenance in Kenya." };
export default function Page() {
  return <ServiceDetail
    title="Packaging Line Services"
    subtitle="Packaging materials, equipment and Videojet inkjet coding systems — supply, installation and maintenance across Kenya."
    breadcrumbLabel="Packaging Line Services"
    heroImage="/images/freon-refrigeration-system.png"
    sideImage="/images/floor-heating.png"
    icon="📦"
    intro="Equipro Investments (K) Ltd provides packaging materials, packaging equipment and Videojet inkjet coding systems — supply, installation and maintenance services. We support food processing, pharmaceutical, agricultural and manufacturing companies to keep their production and packaging lines running efficiently and in compliance."
    body={[
      "Our packaging line services are delivered to some of Kenya's most prominent food and agricultural companies, including NAS (Ennsvalley Bakery), Norbrook Kenya, Trufoods, Interconsumer Products and Simlaw Seeds. This track record demonstrates our ability to understand and support the specific requirements of food-grade and agricultural packaging operations.",
      "For inkjet coding and marking, Equipro is a supplier and service partner for Videojet — one of the world's leading brands in continuous inkjet (CIJ) coding technology. Videojet systems are critical to product traceability and regulatory compliance, providing reliable date coding, batch marking and variable data printing on packaging lines. Our technicians are trained to install, maintain and service Videojet systems, minimising costly production stoppages.",
      "For agricultural clients, we provide seed packaging materials and machinery supply, installation and maintenance. Our team understands the specific requirements of seed processing and packaging operations, including the precision and hygiene standards required for certified seed products.",
    ]}
    features={[
      "Packaging equipment supply, installation and commissioning",
      "Packaging line maintenance — planned and reactive",
      "Videojet inkjet coding and marking systems — supply, installation and maintenance",
      "Date coding, batch marking and variable data printing",
      "Seed packaging materials and machine supply",
      "Production line engineering support",
      "Spare parts supply and stock management",
      "Operator training on Videojet and other equipment",
      "Emergency breakdown response for production-critical equipment",
    ]}
    specs={[
      { label: "Inkjet Brand", value: "Videojet (CIJ continuous inkjet coding systems)" },
      { label: "Coding Types", value: "Date coding, batch marking, variable data, barcodes" },
      { label: "Equipment Types", value: "Form-fill-seal, flow wrap, check-weighers, coders" },
      { label: "Industries Served", value: "Food, beverages, pharmaceuticals, agriculture, FMCG" },
      { label: "Maintenance Type", value: "PPM and reactive support contracts" },
      { label: "Spare Parts", value: "Videojet genuine consumables and parts stocked" },
      { label: "Response", value: "Priority response for production-critical systems" },
      { label: "Coverage", value: "Nairobi and nationwide" },
    ]}
  />;
}
