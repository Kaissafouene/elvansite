
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MapPin, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" itemScope itemType="https://schema.org/Organization">
      {/* Background avec effet parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[20s] ease-out"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 20, 38, 0.65), rgba(33, 41, 60, 0.70)), url('/lovable-uploads/05587391-c5eb-4fcc-9b4e-88dc7a307666.png')`
          }}
        />
        
        {/* Overlay avec motifs animés */}
        <div className="absolute inset-0 bg-gradient-to-br from-elvan-black/70 via-elvan-navy/50 to-elvan-black/80"></div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-repeat animate-pulse" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px"
          }}></div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Badge de localisation avec animation */}
        <div className="mb-8 inline-flex items-center bg-elvan-white/10 backdrop-blur-sm rounded-full px-8 py-4 text-elvan-white border border-elvan-white/20 hover:bg-elvan-white/20 transition-all duration-500 group">
          <MapPin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
          <span className="font-medium">La Marsa, Tunisie</span>
          <div className="ml-3 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        
        {/* Titre principal avec animation */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold text-elvan-white mb-6 leading-tight tracking-tight" itemProp="name">
            <span className="inline-block animate-fade-in">ELVAN</span>
          </h1>
          <div className="text-4xl md:text-6xl font-light text-elvan-light-gray opacity-90 animate-fade-in animation-delay-300" itemProp="slogan">
            La gloire qui entoure votre voiture
          </div>
        </div>
        
        {/* Description avec animation */}
        <p className="text-xl md:text-2xl text-elvan-light-gray mb-12 max-w-4xl mx-auto leading-relaxed opacity-90 animate-fade-in animation-delay-600" itemProp="description">
          Service mobile de detailing automobile – Nettoyage intérieur et extérieur haut de gamme à domicile.
        </p>
        
        {/* Boutons d'action avec animations */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in animation-delay-900">
          <Button 
            variant="elvan" 
            size="lg" 
            className="text-lg px-12 py-6 bg-elvan-white text-elvan-navy hover:bg-elvan-light-gray shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-elvan-white/20" 
            asChild
          >
            <Link to="/contact">
              <Sparkles className="h-5 w-5 mr-2" />
              Réserver maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="elvan-outline" 
            size="lg" 
            className="text-lg px-12 py-6 border-2 border-elvan-white text-elvan-white hover:bg-elvan-white hover:text-elvan-navy backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-elvan-white/20" 
            asChild
          >
            <Link to="/services">Découvrir nos services</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator animé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-elvan-white rounded-full flex justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="w-1 h-4 bg-elvan-white rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
