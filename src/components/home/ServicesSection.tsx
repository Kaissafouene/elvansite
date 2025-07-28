import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Car, Shield, Award } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "BASIC WASH",
      description: "Lavage complet avec attention aux détails",
      price: "À partir de 40 TND",
      icon: <Sparkles className="h-8 w-8 text-elvan-navy" />,
      image: "/lovable-uploads/2bec6365-cb77-4825-b999-98b4779f68db.png",
      features: ["Lavage extérieur", "Nettoyage vitres", "Aspiration rapide"],
    },
    {
      title: "EXTERIOR DETAILING",
      description: "Lavage, préparation et protection détaillés",
      price: "À partir de 100 TND",
      icon: <Shield className="h-8 w-8 text-elvan-navy" />,
      image: "/lovable-uploads/7b33f87f-1de1-4780-8178-e04244ba7ab6.png",
      features: ["Lavage à la main", "Clay bar", "Protection cire"],
    },
    {
      title: "INTERIOR DETAILING",
      description: "Nettoyage détaillé de l'intérieur",
      price: "À partir de 80 TND",
      icon: <Car className="h-8 w-8 text-elvan-navy" />,
      image: "/lovable-uploads/d31dab29-1f98-4459-b4ed-22f7b617cb03.png",
      features: ["Aspiration détaillée", "Extraction sièges", "Protection cuir"],
    },
    {
      title: "FULL DETAILING",
      description: "Service complet intérieur et extérieur",
      price: "À partir de 160 TND",
      icon: <Award className="h-8 w-8 text-elvan-navy" />,
      image: "/lovable-uploads/38adaee4-788a-417b-b0bf-2cbae2f71dff.png",
      features: [
        "Tous services inclus",
        "Garantie satisfaction",
        "Protection longue durée",
      ],
    },
    {
      title: "MAINTENANCE MENSUELLE",
      description: "Entretien régulier appliqué après full detailing",
      price: "À partir de 80 TND",
      icon: <Sparkles className="h-8 w-8 text-elvan-navy" />,
      image: "/lovable-uploads/1febd69e-e251-4e5b-af1a-2dce4a51d6ba.png",
      features: [
        "Lavage de maintien",
        "Retouche protection",
        "Conseils d'entretien",
      ],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-elvan-white via-elvan-light-gray/30 to-elvan-white relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(33, 41, 60, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-elvan-navy/10 backdrop-blur-sm rounded-full px-8 py-4 text-elvan-navy font-medium mb-8 hover:bg-elvan-navy/20 transition-all duration-500">
            <Award className="h-5 w-5 mr-3" />
            Nos Services Premium
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-elvan-black mb-8 leading-tight">
            Excellence en
            <span className="text-elvan-navy block md:inline"> Detailing</span>
          </h2>
          <p className="text-xl text-elvan-gray max-w-3xl mx-auto leading-relaxed">
            Des services de detailing automobile professionnels adaptés à tous
            vos besoins, avec des techniques de pointe et des produits premium.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-elvan-white to-elvan-light-gray/50 hover:from-elvan-light-gray/30 hover:to-elvan-white flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elvan-black/70 via-elvan-black/30 to-transparent group-hover:from-elvan-navy/70 transition-all duration-500"></div>

                {/* Icône flottante */}
                <div className="absolute top-4 right-4 p-4 backdrop-blur-sm rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 bg-gray-100">
                  <div className="group-hover:text-elvan-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Badge de prix */}
                <div className="absolute bottom-4 left-4 bg-elvan-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-elvan-navy font-bold text-sm">
                    {service.price}
                  </span>
                </div>
              </div>

              <CardContent className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-elvan-black mb-4 group-hover:text-elvan-navy transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-elvan-gray mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-elvan-gray"
                    >
                      <div className="w-2 h-2 bg-elvan-navy rounded-full mr-3 group-hover:bg-elvan-black transition-colors"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="elvan-outline"
                  className="w-full group-hover:bg-elvan-navy group-hover:text-elvan-white group-hover:shadow-lg transition-all duration-500 transform group-hover:scale-105 mt-auto"
                  asChild
                >
                  <Link to="/services">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;