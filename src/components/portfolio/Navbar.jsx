import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/", section: null },
  { label: "About Me", path: "/#about", section: "about" },
  { label: "Experience", path: "/#experience", section: "experience" },
  { label: "Projects", path: "/#projects", section: "projects" },
  { label: "Publications", path: "/#publications", section: "publications" },
  { label: "Certificates", path: "/#certificates", section: "certificates" },
  { label: "Skills", path: "/#skills", section: "skills" },
];

export default function Navbar({ solid = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(solid);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (solid) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [solid]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = navLinks.map(l => l.section).filter(Boolean);
    const handleActiveSection = () => {
      if (window.scrollY < 100) { setActiveSection(null); return; }
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection(null);
    };
    window.addEventListener("scroll", handleActiveSection, { passive: true });
    handleActiveSection();
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.includes("#")) {
      const id = path.split("#")[1];
      if (location.pathname !== "/") {
        window.location.href = path;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-card/80 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-semibold text-foreground tracking-tight">
          A<span className="text-primary">.</span>J
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.section ? activeSection === link.section : activeSection === null && location.pathname === "/";
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.path)}
                className={`relative text-sm font-body font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = link.section ? activeSection === link.section : activeSection === null && location.pathname === "/";
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.path)}
                    className={`block w-full text-left text-sm font-body font-medium transition-colors ${isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}