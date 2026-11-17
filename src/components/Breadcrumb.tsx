import { scrollBehavior } from "@/lib/motion";
import { ChevronRight, Home } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { canonicalUrl, normalizeInternalPath } from "@/lib/publicUrls";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

const Breadcrumb = ({ items, variant = "light" }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const handleClick = (href?: string) => {
    if (href) {
      if (href.startsWith("/#")) {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(href.replace("/#", ""));
          element?.scrollIntoView({ behavior: scrollBehavior() });
        }, 100);
      } else {
        navigate(href);
      }
    }
  };

  const textColor = variant === "dark" ? "text-[#c5c9ce]" : "text-muted-foreground";
  const activeColor = variant === "dark" ? "text-[#ede7e4]" : "text-foreground";
  const hoverColor = variant === "dark" ? "hover:text-[#a38b58]" : "hover:text-primary";
  const iconColor = variant === "dark" ? "text-[#a38b58]" : "text-primary";

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{label:"Início",href:"/"}, ...items].map((item,index) => ({ "@type":"ListItem",position:index+1,name:item.label,item:canonicalUrl(item.href ?? window.location.pathname) })) }) }} />
      <Link
        to="/"
        className={`flex items-center gap-1 ${textColor} ${hoverColor} transition-colors`}
        aria-label="Ir para página inicial"
      >
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Início</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className={`w-4 h-4 ${iconColor}`} />
          {item.href ? (
            <Link
              to={normalizeInternalPath(item.href)}
              onClick={event => { if (item.href?.startsWith("/#")) { event.preventDefault(); handleClick(item.href); } }}
              className={`${textColor} ${hoverColor} transition-colors`}
            >
              {item.label}
            </Link>
          ) : (
            <span className={`${activeColor} font-medium`}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
