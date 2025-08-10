import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-secondary/95 backdrop-blur-sm' : 'bg-bg-secondary/95 backdrop-blur-sm'
      } border-b border-fiery-primary/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-fiery-primary rounded-full flex items-center justify-center fiery-glow">
                <span className="text-white font-bold text-lg">KV</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="nav-link text-text-primary hover:text-fiery-accent px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="nav-link text-text-primary hover:text-fiery-accent px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="nav-link text-text-primary hover:text-fiery-accent px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="nav-link text-text-primary hover:text-fiery-accent px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="nav-link text-text-primary hover:text-fiery-accent px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-primary hover:text-fiery-accent p-2"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-bg-secondary z-50 md:hidden ${
        isMobileMenuOpen ? 'open' : ''
      }`}>
        <div className="p-4">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-text-primary hover:text-fiery-accent mb-8"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link text-text-primary hover:text-fiery-accent py-2 text-lg font-medium text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-text-primary hover:text-fiery-accent py-2 text-lg font-medium text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="nav-link text-text-primary hover:text-fiery-accent py-2 text-lg font-medium text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-link text-text-primary hover:text-fiery-accent py-2 text-lg font-medium text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-text-primary hover:text-fiery-accent py-2 text-lg font-medium text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
