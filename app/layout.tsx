import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://equiprogroup.com";
const siteDescription =
  "Equipro Investments (K) Ltd provides HVAC systems, cold room installation, industrial refrigeration, ammonia/NH3, CO2/R744 and Freon refrigeration systems, facility maintenance, mechanical/electrical services and stainless steel water tanks in Kenya.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Equipro Group | HVAC, Cold Room & Industrial Refrigeration Contractors Kenya",
    template: "%s | Equipro Group",
  },
  description: siteDescription,
  keywords:
    "HVAC systems Kenya, HVAC contractors Nairobi, cold room installation Kenya, coldrooms Kenya, industrial refrigeration Kenya, ammonia refrigeration Kenya, CO2 refrigeration Kenya, Freon systems Kenya, Freon gases Kenya, stainless steel water tanks Kenya, refrigeration contractor Nairobi, Equipro Group",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Equipro Group | HVAC, Cold Room & Industrial Refrigeration Contractors Kenya",
    description: siteDescription,
    url: siteUrl,
    siteName: "Equipro Group",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Equipro Group logo",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipro Group | HVAC, Cold Room & Industrial Refrigeration Contractors Kenya",
    description: siteDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness"],
  name: "Equipro Investments (K) Ltd",
  alternateName: "Equipro Group",
  url: siteUrl,
  image: `${siteUrl}/logo.png`,
  telephone: "+254722101946",
  email: "info@equiprogroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avon Center, Enterprise Road",
    postOfficeBoxNumber: "P.O. Box 12636-00400",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254722101946",
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["en", "sw"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+254722514226",
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["en", "sw"],
    },
  ],
  knowsAbout: [
    "HVAC systems",
    "industrial refrigeration",
    "cold room installation",
    "ammonia refrigeration",
    "CO2 refrigeration",
    "Freon refrigeration systems",
    "facility maintenance",
    "electrical services",
    "mechanical services",
    "stainless steel water tanks",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
