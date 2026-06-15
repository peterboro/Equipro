import ServiceDetail from "@/components/ui/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Industrial Refrigeration in Kenya | Ammonia, CO2 & Freon Systems",
  description: "Industrial refrigeration installation, ammonia/NH3 refrigeration, CO2/R744 refrigeration, Freon systems, cold storage plants, commissioning and maintenance in Kenya.",
};
export default function Page() {
  return <ServiceDetail
    title="Industrial Refrigeration Solutions"
    subtitle="Complete turnkey refrigeration solutions from project design through to 24/7 maintenance and repair."
    breadcrumbLabel="Industrial Refrigeration"
    heroImage="/images/gallery/equipro-project-56.jpg"
    sideImage="/images/gallery/equipro-project-60.jpg"
    icon="❄️"
    intro="Equipro has proven its reputation with successful turnkey projects and refrigeration systems built over many years. We offer complete industrial refrigeration solutions — from initial project design through installation, commissioning and ongoing maintenance."
    body={[
      "Our refrigeration engineering solutions cover the full scope: we determine energy and capacity demand as well as additional needs, provide technical equipment support in each direction, and coordinate refrigeration installation with other HVAC equipment in the building. All work is carried out in accordance with energy saving regulations.",
      "We create refrigeration system installation plans, manage construction and coordinate work on the construction site, and provide cost and process monitoring throughout. After installation, we conduct technical inspection and operational control, provide renewal recommendations for existing systems, implement safety measures and commission systems.",
      "Equipro is ready to provide 24/7 maintenance and repair service support with its technical service team. We also offer remote diagnostics and remote supervision, optimisation according to target energy values, and HACCP quality assurance — ensuring your refrigeration plant continues to operate at peak performance throughout its service life.",
    ]}
    features={[
      "Turnkey project delivery — design through commissioning",
      "Freon, Ammonia (NH3) and CO2 (R744) refrigerant systems",
      "Energy demand analysis and capacity planning",
      "Coordination with existing HVAC systems",
      "Construction management and site coordination",
      "HACCP quality assurance compliance",
      "24/7 maintenance and repair service support",
      "Remote diagnostics and system supervision",
      "Optimisation to target energy values",
    ]}
    specs={[
      { label: "Refrigerant Options", value: "Freon, NH3 (R-717), CO2 (R-744)" },
      { label: "System Types", value: "Direct expansion, central, cascade" },
      { label: "Temperature Range", value: "-70°C to +15°C (application dependent)" },
      { label: "Compressor Types", value: "Piston, screw, hermetic" },
      { label: "Control System", value: "PLC / SCADA with remote access" },
      { label: "Service Support", value: "24/7 maintenance and emergency response" },
      { label: "Standards", value: "HACCP, EN 13136, energy saving regulations" },
      { label: "NCA Registration", value: "Refrigeration & AC — Grade 5" },
    ]}
  />;
}
