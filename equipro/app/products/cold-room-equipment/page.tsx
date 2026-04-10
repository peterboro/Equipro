import ProductDetail from "@/components/ui/ProductDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cold Room Equipment | Equipro Products", description: "Cold room insulated panels, doors and floor heating systems for complete cold storage facilities in Kenya. Supply and installation by Equipro." };
export default function Page() {
  return <ProductDetail
    title="Cold Room Equipment"
    subtitle="Insulated panels, access doors and floor heating systems for complete cold storage facility construction."
    breadcrumbLabel="Cold Room Equipment"
    heroImage="/images/cooling-technologies-bg.jpg"
    icon="🏗️"
    intro="Equipro supplies and installs the full range of cold room construction materials — insulated sandwich panels, access doors and floor heating systems. Whether constructing a new facility or expanding an existing one, we have the products and expertise to deliver."
    body={[
      "Cold room panels consist of two metal facings bonded to a rigid polyurethane (PU) or polyisocyanurate (PIR) insulating core. These sandwich panels form the thermal envelope of the cold room, and their quality directly determines the energy efficiency and service life of the facility.",
      "Floor heating systems for cold storage facilities are used to prevent floors from freezing and icing, thereby preventing structural damage and accidents. This system works by laying heating cables or mats under the floor — the cables or mats are heated by electricity and provide heat to the floor to maintain it above the frost point. Two system types are available: wired systems using heated cables secured on mesh, and mat systems using pre-assembled heating mats laid directly on the floor surface.",
      "Cold room doors are available in hinged, sliding, high-speed PVC and industrial traffic door configurations. All doors feature insulated panels, perimeter magnetic or inflatable seals and heated frames to prevent ice formation.",
    ]}
    features={[
      "PU and PIR insulated sandwich panels for walls, ceilings and floors",
      "Panel thicknesses from 80 mm to 200 mm for all temperature ranges",
      "Camlock panel jointing system for rapid, tool-free assembly",
      "Floor heating — electric cable (wired) and mat systems",
      "Prevents floor freezing, structural damage and accidents",
      "Hinged, sliding and high-speed PVC cold room doors",
      "Heated door frames to prevent ice build-up",
      "Anti-slip floor panel surfaces for forklift safety",
    ]}
    specs={[
      { label: "Panel Core", value: "PU foam or PIR foam" },
      { label: "Panel Thickness", value: "80 mm to 200 mm" },
      { label: "Panel Facing", value: "Galvanised steel, stainless, food-safe coated" },
      { label: "Temperature Range", value: "−45°C to +15°C (thickness dependent)" },
      { label: "Floor Heating", value: "Electric cable (wired) or mat systems" },
      { label: "Door Types", value: "Hinged, sliding, high-speed PVC, industrial" },
      { label: "Door Sealing", value: "Magnetic or inflatable perimeter seals" },
      { label: "Certification", value: "CE Mark EN 14509 / ISO 9001" },
    ]}
    images={[
      "/images/floor-heating.png",
      "/images/freon-refrigeration-system.png",
    ]}
    variants={[
      { name: "Insulated Panels", desc: "PU/PIR sandwich panels for walls, ceilings and floors. Camlock system for fast assembly. Multiple thicknesses for all temperature ranges from chill to blast freeze." },
      { name: "Cold Room Doors", desc: "Hinged, sliding, high-speed PVC and industrial traffic doors. Insulated panels, magnetic/inflatable seals, heated frames. Manual to fully automatic operation." },
      { name: "Floor Heating Systems", desc: "Electric cable or mat systems preventing floor freezing and structural damage in cold storage facilities. Wired and mat configurations." },
    ]}
  />;
}
