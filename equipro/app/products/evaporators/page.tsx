import ProductDetail from "@/components/ui/ProductDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Evaporators & Glycol Coolers | Equipro Products", description: "Air-cooling evaporators, glycol coolers and brine coolers for cold storage, process cooling and HVAC applications in Kenya." };
export default function Page() {
  return <ProductDetail
    title="Evaporators & Glycol Coolers"
    subtitle="Transferring heat from the media to be cooled to the refrigerant — the working end of every refrigeration system."
    breadcrumbLabel="Evaporators & Glycol Coolers"
    heroImage="/images/glycol.jpg"
    icon="💧"
    intro="An evaporator transfers heat from the air flowing over it to the cooler refrigerant flowing through it by utilising coils. It is the component that actually delivers the cooling effect — whether chilling air in a cold room, cooling brine in a process application, or providing chilled water for an air conditioning system."
    body={[
      "Equipro supplies and installs air-cooling unit coolers (evaporators) for cold rooms, blast freezers and process areas, as well as shell-and-tube and plate heat exchanger evaporators for glycol and brine secondary refrigeration loops. The right evaporator type depends on the application temperature, required air distribution, humidity management and defrost requirements.",
      "Glycol coolers use a secondary refrigerant — typically a water-glycol mixture — to transfer cooling from a central refrigeration plant to multiple end-user cooling points. This eliminates direct refrigerant pipework throughout a facility, reducing refrigerant charge, pipework costs and F-Gas regulatory burden.",
      "Equipro's evaporator installations include automatic defrost management as standard, using electric, hot gas or off-cycle defrost as appropriate. Defrost frequency and duration are optimised through our PLC control systems to minimise energy consumption while maintaining frost-free coil surfaces.",
    ]}
    features={[
      "Air-cooling unit coolers (Güntner and equivalents) for cold rooms and blast freezers",
      "Glycol coolers for secondary refrigerant loop applications",
      "Plate heat exchanger evaporators for process cooling",
      "High-humidity coil design to minimise product weight loss",
      "Automatic defrost management (electric, hot gas, off-cycle)",
      "Variable-speed EC fan motors for energy efficiency",
      "Compatible with NH3, CO2, Freon and glycol systems",
      "Stainless steel construction available for hygienic applications",
    ]}
    specs={[
      { label: "Evaporator Types", value: "Air cooler, plate HX, shell & tube" },
      { label: "Temperature Range", value: "−45°C to +15°C" },
      { label: "Refrigerants", value: "NH3, CO2, all HFC/HFO, glycol/brine" },
      { label: "Defrost Options", value: "Electric, hot gas, off-cycle" },
      { label: "Fan Type", value: "Axial, fixed speed or EC variable speed" },
      { label: "Construction", value: "Galvanised steel or stainless steel" },
      { label: "Control", value: "Electronic expansion valve, PLC compatible" },
      { label: "Brands", value: "Güntner, GEA, Alfa Laval and equivalents" },
    ]}
    images={[
      "/images/evaporators-glycol.png",
      "/images/glycol.jpg",
    ]}
  />;
}
