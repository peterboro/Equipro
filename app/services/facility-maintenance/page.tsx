import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = {"title": "Refrigeration & HVAC Maintenance | Equipro", "description": "Planned servicing and repair support for commercial and industrial cooling systems.", "alternates": {"canonical": "/services/facility-maintenance"}};
export default function Page() { return <ServiceDetail
title={"Refrigeration & HVAC Maintenance"}
subtitle={"Planned servicing and repair support for commercial and industrial cooling systems."}
intro={"Equipro maintains refrigeration and HVAC systems for commercial and industrial customers. We help protect temperature control, equipment performance and continuity of operations through planned servicing and repair support."}
body={["Maintenance starts with understanding your equipment, operating conditions and production schedule. We agree a service scope suited to your installation and coordinate visits with your facility team.", "Our scope covers cold rooms, refrigeration equipment, air conditioning, ventilation and the controls that support these systems. Fault diagnosis and corrective work focus on restoring dependable operation.", "Our technical team also supports existing installations with monitoring and system assessments. Contact us to discuss a maintenance programme or an equipment fault."]}
features={["Cold room and freezer room maintenance", "Refrigeration equipment servicing", "HVAC and ventilation maintenance", "Cooling system controls and fault diagnosis", "Planned preventive maintenance", "Breakdown diagnosis and repairs", "Temperature monitoring support", "Service programmes agreed to suit your facility"]}
breadcrumbLabel={"Refrigeration & HVAC Maintenance"}
heroImage={"/images/gallery/equipro-project-56.jpg"}
sideImage={"/images/projects/dairyland-ultra-modern-facility/dairyland-01.jpeg"}
icon={"\u2744"}
/>; }
