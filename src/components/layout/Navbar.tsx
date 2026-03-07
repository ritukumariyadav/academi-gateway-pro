import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About", path: "/about", children: [
      { label: "About Us", path: "/about" },
      { label: "Principal's Message", path: "/message/principal" },
      { label: "Vision & Mission", path: "/vision-mission" },
    ],
  },
  { label: "Courses", path: "/courses" },
  { label: "Departments", path: "/departments" },
  { label: "Faculty", path: "/faculty" },
  { label: "Admission", path: "/admission" },
  {
    label: "Campus Life", path: "/events", children: [
      { label: "Events & News", path: "/events" },
      { label: "Notices", path: "/notices" },
      { label: "Gallery", path: "/gallery" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 flex items-center justify-between h-8 text-xs text-primary-foreground/80">
          <span>📞 +1 (555) 123-4567 &nbsp;|&nbsp; ✉ info@prestonacademy.edu</span>
          <div className="hidden md:flex gap-4">
            <Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link>
            <Link to="/testimonials" className="hover:text-primary-foreground transition-colors">Testimonials</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Preston Academy" className="h-10 w-10" />
          <div className="leading-tight">
            <span className="font-display text-lg font-bold text-foreground">Preston Academy</span>
            <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Est. 1976</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${isActive(item.path) ? "text-accent bg-accent/10" : "text-foreground hover:text-accent"}`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card border rounded-lg shadow-lg py-2 min-w-[180px] animate-fade-in">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/apply-online">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">Apply Now</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-card animate-slide-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive(item.path) ? "bg-accent/10 text-accent" : "text-foreground"}`}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-8 py-1.5 text-sm text-muted-foreground hover:text-accent"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex gap-2 mt-4">
              <Link to="/apply-online" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground">Apply Now</Button>
              </Link>
              <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
