import { useEffect, useState } from "react";
import { MenuIcon, PawPrint, X } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Scroll handling for nav bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = ["hero", "services", "stats", "cta"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection && activeSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full bg-gradient-to-b to-[#383125] from-[#1D1E0B] p-4 z-40 transition-all duration-300
	  `}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 italic group cursor-pointer">
          <PawPrint
            size={48}
            className="text-accent-500 mr-2 transition-transform group-hover:rotate-12"
          />
          <span className="text-white text-xl font-bold">PawPartner</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {["hero", "services", "stats", "cta"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-white font-medium hover:text-accent-500 transition-colors relative
			  ${activeSection === section ? "text-accent-500" : ""}
			`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent-500" />
              )}
            </button>
          ))}
          <button className="bg-accent-500 text-white px-6 py-2 rounded-full hover:bg-accent-600 transform hover:scale-105 transition-all">
            Book Now
          </button>
        </div>

        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#383125] transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-4">
          {["hero", "services", "stats", "cta"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="w-full text-left text-white py-2 px-4 hover:bg-white/10 rounded-lg transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button className="w-full bg-accent-500 text-white py-3 rounded-lg hover:bg-accent-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
