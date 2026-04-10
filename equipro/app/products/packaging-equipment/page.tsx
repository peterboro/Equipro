import ProductDetail from "@/components/ui/ProductDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Packaging Equipment | Equipro Products", description: "Packaging equipment, inkjet coding systems and packaging materials for food processing and agricultural operations in Kenya." };
export default function Page() {
  return <ProductDetail
    title="Packaging Equipment"
    subtitle="Packaging machinery, inkjet coding systems and materials for food processing and agricultural production lines."
    breadcrumbLabel="Packaging Equipment"
    heroImage="/images/cooling-technologies-bg.jpg"
    icon="📦"
    intro="Equipro supplies packaging equipment, coding and marking systems, and packaging materials for food processing, agricultural and FMCG production operations in Kenya. Our packaging line services have been delivered to some of Kenya's leading companies."
    body={[
      "Reliable packaging line operation is critical to production output and product quality. Equipro's packaging line services cover equipment supply, installation, commissioning and ongoing maintenance — ensuring your production lines remain productive with minimal downtime.",
      "Inkjet coding and marking systems are essential for product traceability, regulatory compliance and brand protection. We supply, install and maintain continuous inkjet (CIJ), thermal inkjet (TIJ) and laser coding systems for date coding, batch marking and variable data printing on a wide range of packaging substrates.",
      "For agricultural clients, we provide specialised seed packaging materials and machinery. Our experience with companies such as Kibo Seed Company Ltd and Simlaw Seeds demonstrates our understanding of the specific requirements of certified seed processing, including the precision and quality standards required for planting-grade seed products.",
    ]}
    features={[
      "Packaging equipment supply, installation and commissioning",
      "Planned and reactive maintenance for packaging lines",
      "Continuous inkjet (CIJ) coding system supply and maintenance",
      "Thermal inkjet (TIJ) and laser marking systems",
      "Seed packaging machinery for agricultural operators",
      "Packaging materials and consumables supply",
      "Operator and technician training on all equipment",
      "Genuine spare parts supply and stockholding",
    ]}
    specs={[
      { label: "Equipment Types", value: "Flow wrap, form-fill-seal, check-weighers" },
      { label: "Coding Systems", value: "CIJ, TIJ, laser (date, batch, variable data)" },
      { label: "Substrates", value: "Flexible film, carton, glass, metal, plastic" },
      { label: "Industries", value: "Food, beverages, agriculture, FMCG, pharma" },
      { label: "Maintenance", value: "PPM contracts and reactive support" },
      { label: "Response", value: "Priority response for production-critical systems" },
      { label: "Parts", value: "Genuine consumables and spares in stock" },
      { label: "Training", value: "On-site operator and technician training" },
    ]}
    images={[
      "/images/freon-refrigeration-system.png",
      "/images/glycol.jpg",
    ]}
  />;
}
