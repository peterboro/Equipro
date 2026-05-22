export default function Divider({ center = true }: { center?: boolean }) {
  return (
    <div className={`w-12 h-1 bg-gradient-to-r from-[#55b7e5] to-[#111827] rounded-full mt-4 ${center ? "mx-auto" : ""}`} />
  );
}
