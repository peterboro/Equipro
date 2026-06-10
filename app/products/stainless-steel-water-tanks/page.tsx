import ProductDetail from "@/components/ui/ProductDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stainless Steel Water Tanks | Equipro Products",
  description: "Stainless steel water tanks, elevated tower tanks and fabricated storage solutions for industrial and commercial utility water systems in Kenya.",
};

export default function Page() {
  return (
    <ProductDetail
      title="Stainless Steel Water Tanks"
      subtitle="Fabricated stainless steel water storage tanks and elevated tower tank systems for reliable facility utilities."
      breadcrumbLabel="Stainless Steel Water Tanks"
      heroImage="/images/stainless-steel-water-tower-tanks.jpeg"
      icon=""
      intro="Equipro supplies and installs stainless steel water tanks for commercial, industrial and institutional facilities that require dependable utility water storage. Our solutions cover ground-mounted tanks, elevated tower tanks and associated support structures."
      body={[
        "Stainless steel water tanks provide a durable, hygienic and low-maintenance storage option for process water, domestic water and facility utility systems. They are well suited to demanding environments where corrosion resistance and long service life are important.",
        "We support projects from tank selection and sizing through fabrication coordination, structural support, installation and commissioning. Elevated tower tank systems can be integrated with pumps, pipework and controls to maintain consistent water availability across a facility.",
        "Our team works with the site conditions, usage requirements and operating environment to recommend appropriate tank configuration, platform height, access provisions and connection details.",
      ]}
      features={[
        "Stainless steel water storage tanks for industrial and commercial applications",
        "Elevated tower tank structures with access platforms and ladders",
        "Corrosion-resistant, hygienic storage for long service life",
        "Ground-mounted and elevated configurations",
        "Integration with pumps, pipework and utility systems",
        "Project support from sizing to installation and commissioning",
      ]}
      specs={[
        { label: "Tank Type", value: "Stainless steel panel or fabricated tanks" },
        { label: "Applications", value: "Utility water, process water, domestic water storage" },
        { label: "Mounting", value: "Ground-mounted or elevated tower structures" },
        { label: "Accessories", value: "Ladders, access platforms, pipe connections" },
        { label: "Support", value: "Sizing, supply, installation and commissioning" },
      ]}
      images={[
        "/images/stainless-steel-water-tanks.jpeg",
        "/images/stainless-steel-water-tanks-1.jpeg",
        "/images/stainless-steel-water-tanks-2.jpeg",
        "/images/stainless-steel-water-tower-tanks.jpeg",
      ]}
      variants={[
        { name: "Ground-Mounted Water Tanks", desc: "Durable stainless steel tanks for facility utility water storage, process support and domestic water systems." },
        { name: "Elevated Tower Tanks", desc: "Stainless steel tanks mounted on structural towers with access provisions for sites that need gravity-assisted storage." },
        { name: "Integrated Water Systems", desc: "Tank installations coordinated with pipework, pumps, valves and controls for dependable facility water distribution." },
      ]}
    />
  );
}
