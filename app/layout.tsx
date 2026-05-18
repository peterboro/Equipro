import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equipro Group - Power You Can Trust | HVAC & Refrigeration Kenya",
  description: "Equipro Investments (K) Ltd — specialist in HVAC, industrial refrigeration, facility maintenance, mechanical & electrical services. NCA registered. Nairobi, Kenya.",
  keywords: "HVAC Kenya, refrigeration contractor Nairobi, air conditioning Kenya, cold room Kenya, industrial refrigeration, facility maintenance Kenya, Equipro",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
