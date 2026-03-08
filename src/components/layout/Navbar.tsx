import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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

        {/* Mobile Sheet */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
            <SheetHeader className="p-4 pb-2">
              <SheetTitle className="flex items-center gap-2">
                <img src={logo} alt="Preston Academy" className="h-8 w-8" />
                <div className="leading-tight text-left">
                  <span className="font-display text-base font-bold">Preston Academy</span>
                  <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Est. 1976</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Separator />
            <ScrollArea className="flex-1">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${isActive(item.path) ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"}`}
                        >
                          {item.label}
                          <ChevronRight className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-90" : ""}`} />
                        </button>
                        {mobileExpanded === item.label && (
                          <div className="bg-muted/50">
                            {item.children.map((child) => (
                              <SheetClose asChild key={child.path}>
                                <Link
                                  to={child.path}
                                  className={`block pl-8 pr-4 py-2.5 text-sm transition-colors ${isActive(child.path) ? "text-accent font-medium" : "text-muted-foreground hover:text-accent"}`}
                                >
                                  {child.label}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          to={item.path}
                          className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive(item.path) ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"}`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <div className="p-4 flex flex-col gap-2">
              <SheetClose asChild>
                <Link to="/apply-online">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">Apply Now</Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/login">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
