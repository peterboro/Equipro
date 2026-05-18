export default function Divider({ center = true }: { center?: boolean }) {
  return (
    <div className={`w-12 h-1 bg-gradient-to-r from-[#1e88e5] to-[#0d47a1] rounded-full mt-4 ${center ? "mx-auto" : ""}`} />
  );
}
