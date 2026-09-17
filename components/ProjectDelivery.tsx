import Link from "next/link";
const stages = [
  ["01", "Design", "Define the system around your facility and operating requirements."],
  ["02", "Supply", "Coordinate the equipment and components for your installation."],
  ["03", "Installation", "Integrate refrigeration, HVAC, pipework and controls on site."],
  ["04", "Commissioning", "Test the installation and prepare the system for operation."],
  ["05", "Maintenance", "Support performance with planned servicing and repairs."],
];
export default function ProjectDelivery() {
  return <section className="bg-[#111827] py-20 text-white"><div className="max-w-7xl mx-auto px-6">
    <p className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">From concept to ongoing care</p>
    <h2 className="text-3xl md:text-5xl font-bold mb-5">One team. Complete project delivery.</h2>
    <p className="max-w-2xl text-slate-300 mb-10">Refrigeration and HVAC support through every stage of your project, with a clear route to maintenance after handover.</p>
    <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">{stages.map(([number,title,description]) => <li key={number} className="border-t border-slate-600 pt-5"><span className="text-sky-300 text-sm">{number}</span><h3 className="text-xl font-semibold mt-3 mb-2">{title}</h3><p className="text-sm text-slate-300 leading-relaxed">{description}</p></li>)}</ol>
    <Link href="/contact" className="inline-block mt-10 rounded-lg bg-[#55b7e5] px-6 py-3 font-semibold text-[#111827]">Discuss Your Project</Link>
  </div></section>;
}
