export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#1e88e5] text-xs font-bold tracking-widest uppercase mb-3">
      {children}
    </span>
  );
}
