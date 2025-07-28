import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Accueil",
    href: "/"
  }, {
    name: "Nos Services",
    href: "/services"
  }, {
    name: "À Propos",
    href: "/about"
  }, {
    name: "Contact",
    href: "/contact"
  }, {
    name: "FAQ",
    href: "/faq"
  }];
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-elvan-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-elvan-light-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (MODIFIÉ) */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              {/* La classe a été changée pour une taille personnalisée de 72px */}
              <img 
                src="/lovable-uploads/05a477d1-3844-4ed9-aeb0-22816b7638c0.png" 
                alt="ELVAN Detailing - Centre de detailing automobile à La Marsa" 
                className="h-[72px] w-auto transition-transform duration-300 group-hover:scale-105" 
                width="72" 
                height="72" 
                loading="eager" 
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-elvan-navy/20 to-elvan-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md mx-0"></div>
            </div>
            <div className="ml-3 hidden sm:block">
              {/* Potentiel emplacement pour du texte à côté du logo */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-elvan-light-gray/50 ${isActive(item.href) ? "text-elvan-navy bg-elvan-light-gray/80" : "text-elvan-gray hover:text-elvan-navy"}`}
              >
                {item.name}
                {isActive(item.href) && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-elvan-navy rounded-full"></div>}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-elvan-light-gray/50 rounded-full px-4 py-2 hover:bg-elvan-light-gray transition-colors">
              <Phone className="h-4 w-4 text-elvan-navy mr-2" />
              <Link to="/contact" className="text-sm font-medium text-elvan-navy hover:text-elvan-black transition-colors">
                +216 55 729 728
              </Link>
            </div>
            <Button variant="elvan" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5" asChild>
              <Link to="/contact" className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Réserver
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-elvan-gray hover:text-elvan-navy hover:bg-elvan-light-gray/50 transition-all duration-300">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-elvan-light-gray/50 bg-elvan-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${isActive(item.href) ? "text-elvan-navy bg-elvan-light-gray/80" : "text-elvan-gray hover:text-elvan-navy hover:bg-elvan-light-gray/50"}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3 space-y-3 border-t border-elvan-light-gray/50 mt-3">
                <div className="flex items-center bg-elvan-light-gray/50 rounded-lg px-4 py-3">
                  <Phone className="h-4 w-4 text-elvan-navy mr-3" />
                  <Link to="/contact" className="text-sm font-medium text-elvan-navy">
                    +216 55 729 728
                  </Link>
                </div>
                <Button variant="elvan" className="w-full" asChild>
                  <Link to="/contact" className="flex items-center justify-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Réserver
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
