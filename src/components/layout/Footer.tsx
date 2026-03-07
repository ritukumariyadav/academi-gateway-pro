import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-gold" />
            <span className="font-display text-xl font-bold">Preston Academy</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Empowering minds since 1976. A premier institution committed to academic excellence, character building, and holistic development.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4 text-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About Us", path: "/about" },
              { label: "Courses", path: "/courses" },
              { label: "Admission", path: "/admission" },
              { label: "Notice Board", path: "/notices" },
              { label: "Events", path: "/events" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}><Link to={l.path} className="text-primary-foreground/70 hover:text-gold transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Portals */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4 text-gold">Portals</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Student Login", path: "/login" },
              { label: "Teacher Login", path: "/login" },
              { label: "Admin Login", path: "/login" },
              { label: "Apply Online", path: "/apply-online" },
              { label: "Academic Calendar", path: "/academic-calendar" },
            ].map((l) => (
              <li key={l.label}><Link to={l.path} className="text-primary-foreground/70 hover:text-gold transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4 text-gold">Contact Us</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />123 Academic Avenue, Knowledge City, ST 45678</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" />+1 (555) 123-4567</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" />info@prestonacademy.edu</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50">
        <span>© 2026 Preston Academy. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-gold">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
