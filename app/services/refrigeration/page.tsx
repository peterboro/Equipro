import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = {"title": "Commercial & Industrial Refrigeration | Equipro", "description": "Complete refrigeration solutions, from design and supply to installation, commissioning and maintenance.", "alternates": {"canonical": "/services/refrigeration"}};
export default function Page() { return <ServiceDetail
title={"Commercial & Industrial Refrigeration"}
subtitle={"Complete refrigeration solutions, from design and supply to installation, commissioning and maintenance."}
intro={"Equipro designs, supplies, installs and maintains refrigeration systems for commercial and industrial facilities. From individual equipment requirements to complete refrigeration plants, we coordinate the full process around your operating and storage needs."}
body={["Our work covers cold rooms, chiller rooms, freezer rooms, blast freezing and industrial refrigeration. We assess the application and required temperature conditions before defining the system and equipment scope.", "Our refrigeration capabilities include Freon, ammonia (NH3) and carbon dioxide (CO2) systems, with compressors, condensers, evaporators, pipework and controls integrated into the installation.", "We support your system beyond installation through commissioning, planned maintenance, repairs and monitoring. Our team works with your facility to plan servicing and minimise disruption."]}
features={["Commercial refrigeration systems", "Industrial refrigeration plants", "Cold rooms, chiller rooms and freezer rooms", "Blast freezer installation", "Refrigeration equipment and refrigerant supply", "System design, installation and commissioning", "Integrated controls and temperature monitoring", "Planned maintenance and repairs"]}
breadcrumbLabel={"Commercial & Industrial Refrigeration"}
heroImage={"/images/gallery/equipro-project-56.jpg"}
sideImage={"/images/projects/dairyland-ultra-modern-facility/dairyland-01.jpeg"}
icon={"\u2744"}
/>; }
