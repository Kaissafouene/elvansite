import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"; // Ajout de Facebook et Instagram

const Footer = () => {
  return (
    <footer className="bg-elvan-black text-elvan-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/lovable-uploads/05a477d1-3844-4ed9-aeb0-22816b7638c0.png"
                alt="ELVAN Detailing"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-elvan-light-gray text-sm leading-relaxed mb-6">
              ELVAN - Centre de detailing automobile haut de gamme à La Marsa.
              Spécialisé dans les finitions premium et la satisfaction client
              depuis 2025.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-elvan-white relative">
              Navigation
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-elvan-navy to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-elvan-light-gray hover:text-elvan-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-elvan-navy rounded-full mr-3 group-hover:bg-elvan-white transition-colors"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-elvan-light-gray hover:text-elvan-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-elvan-navy rounded-full mr-3 group-hover:bg-elvan-white transition-colors"></span>
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-elvan-light-gray hover:text-elvan-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-elvan-navy rounded-full mr-3 group-hover:bg-elvan-white transition-colors"></span>
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-elvan-light-gray hover:text-elvan-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-elvan-navy rounded-full mr-3 group-hover:bg-elvan-white transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-elvan-light-gray hover:text-elvan-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-elvan-navy rounded-full mr-3 group-hover:bg-elvan-white transition-colors text-gray-100 text-base"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-elvan-white relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-elvan-navy to-transparent"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="p-2 rounded-lg mr-3 transition-colors bg-stone-400">
                  <MapPin className="h-4 w-4 text-elvan-navy group-hover:text-elvan-white" />
                </div>
                <div className="text-sm text-elvan-light-gray">
                  <p className="font-medium text-elvan-white">
                    N° 42 Espace Perle Bleu
                  </p>
                  <p>2ème étage, B4</p>
                  <p>La Marsa, Tunisie</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="p-2 rounded-lg mr-3 transition-colors bg-stone-400">
                  <Phone className="h-4 w-4 text-elvan-navy group-hover:text-elvan-white" />
                </div>
                <a
                  href="tel:+21655729728"
                  className="text-sm text-elvan-light-gray hover:text-elvan-white transition-colors"
                >
                  +216 55 729 728
                </a>
              </div>
              <div className="flex items-center group">
                <div className="p-2 rounded-lg mr-3 transition-colors bg-stone-400">
                  <Mail className="h-4 w-4 text-elvan-navy group-hover:text-elvan-white" />
                </div>
                <a
                  href="mailto:elvandetailing@gmail.com"
                  className="text-sm text-elvan-light-gray hover:text-elvan-white transition-colors"
                >
                  elvandetailing@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-elvan-white relative">
              Horaires
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-elvan-navy to-transparent"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="p-2 rounded-lg mr-3 transition-colors bg-stone-400">
                  <Clock className="h-4 w-4 text-elvan-navy group-hover:text-elvan-white" />
                </div>
                <div className="text-sm text-elvan-light-gray">
                  <p className="font-medium text-elvan-white">Lun - Ven</p>
                  <p>8h00 - 19h00</p>
                </div>
              </div>
              <div className="flex items-start group ml-11">
                <div className="text-sm text-elvan-light-gray">
                  <p className="font-medium text-elvan-white">Samedi</p>
                  <p>9h00 - 17h00</p>
                </div>
              </div>
              <div className="bg-elvan-navy/10 p-3 rounded-lg border border-elvan-navy/20">
                <p className="text-xs text-elvan-light-gray">
                  <span className="text-elvan-white font-medium">
                    Dimanche:
                  </span>{" "}
                  Fermé
                </p>
              </div>
            </div>
          </div>

          {/* Suivez-nous */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-elvan-white relative">
              Suivez-nous
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-elvan-navy to-transparent"></div>
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572701564137"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-stone-400 hover:bg-elvan-navy transition-colors duration-300 group"
              >
                <Facebook className="h-5 w-5 text-elvan-navy group-hover:text-elvan-white" />
              </a>
              <a
                href="https://www.instagram.com/elvandetailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-stone-400 hover:bg-elvan-navy transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 text-elvan-navy group-hover:text-elvan-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-elvan-navy/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-elvan-light-gray">
              © 2025 ELVAN Detailing. Tous droits réservés. Développé par{" "}
              <a
                href="https://www.kmsolutions.tn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-elvan-white hover:text-elvan-navy transition-colors duration-300 font-medium underline underline-offset-2"
              >
                www.kmsolutions.tn
              </a>
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <p className="text-sm text-elvan-light-gray">
                Détailing automobile professionnel - La Marsa, Tunisie
              </p>
              <div className="w-8 h-8 bg-gradient-to-br from-elvan-navy to-elvan-black rounded-full flex items-center justify-center">
                <span className="text-elvan-white text-xs font-bold">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
