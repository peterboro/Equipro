import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }
interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  image?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, image }: PageHeroProps) {
  const bg = image || "/images/cooling-technologies-bg.jpg";
  return (
    <section className="relative h-[260px] md:h-[320px] flex items-center overflow-hidden">
      <img src={bg} alt={title} className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,18,50,0.92) 0%, rgba(13,37,97,0.78) 60%, rgba(8,18,50,0.65) 100%)" }} />
      {/* Red accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full" style={{ background: "linear-gradient(to left, rgba(200,16,46,0.12), transparent)" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-gray-600" />
              {crumb.href
                ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                : <span className="text-white font-medium">{crumb.label}</span>
              }
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {title}
        </h1>
        {subtitle && <p className="text-gray-300 text-sm max-w-xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
