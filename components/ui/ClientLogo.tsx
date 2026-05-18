"use client";
import { useState } from "react";
import Image from "next/image";

interface ClientLogoProps {
  domain?: string;
  localLogo?: string;   // path like /images/logos/norbrook.png
  name: string;
  initials: string;
}

export default function ClientLogo({ domain, localLogo, name, initials }: ClientLogoProps) {
  const [failed, setFailed] = useState(false);

  const fallback = (
    <div
      className="w-full h-full flex items-center justify-center rounded-lg text-white font-bold text-sm"
      style={{ background: "linear-gradient(135deg, #0d2561, #1a3a8c)" }}
      title={name}
    >
      {initials}
    </div>
  );

  if (failed) return fallback;

  // Use local logo if provided
  if (localLogo) {
    return (
      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-1">
        <Image
          src={localLogo}
          alt={`${name} logo`}
          width={80}
          height={56}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
          title={name}
        />
      </div>
    );
  }

  // Fall back to Google favicon service
  if (domain) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={`${name} logo`}
        className="w-10 h-10 object-contain"
        onError={() => setFailed(true)}
        title={name}
      />
    );
  }

  return fallback;
}
