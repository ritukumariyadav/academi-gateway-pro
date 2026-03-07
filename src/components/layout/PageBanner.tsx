import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumbs?: { label: string; path?: string }[];
}

const PageBanner = ({ title, breadcrumbs = [] }: PageBannerProps) => (
  <section className="bg-hero py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0wIDEyYzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0tMTItMTJjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
    <div className="container mx-auto px-4 relative">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{title}</h1>
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-1 mt-3 text-sm text-primary-foreground/70">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-primary-foreground">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
    </div>
  </section>
);

export default PageBanner;
