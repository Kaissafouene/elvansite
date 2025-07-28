
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHead } from "@/components/seo/PageHead";

const Services = () => {
  const services = [
    {
      title: "BASIC WASH",
      priceSedan: "40 TND",
      priceSUV: "45 TND", 
      duration: "2-3 heures",
      image: "/lovable-uploads/2bec6365-cb77-4825-b999-98b4779f68db.png",
      description: "Lavage complet de votre véhicule avec attention aux détails",
      features: [
        "Lavage extérieur de la carrosserie",
        "Nettoyage des vitres extérieures",
        "Aspiration rapide de l'intérieur",
        "Nettoyage des jantes"
      ]
    },
    {
      title: "EXTERIOR DETAILING",
      priceSedan: "100 TND",
      priceSUV: "140 TND",
      duration: "4-6 heures",
      image: "/lovable-uploads/7b33f87f-1de1-4780-8178-e04244ba7ab6.png",
      description: "Lavage, préparation et protection détaillés",
      features: [
        "Lavage à la main détaillé + bain moussant",
        "Éclaboussures d'insectes nettoyées",
        "Clay bar",
        "Décontamination chimique des particules de fer",
        "Nettoyage en profondeur des roues et jantes",
        "Protection à base de cire",
        "Habillage de pneu de qualité supérieure",
        "Traitement de cuir et garniture en plastique"
      ]
    },
    {
      title: "INTERIOR DETAILING",
      priceSedan: "80 TND",
      priceSUV: "120 TND",
      duration: "3-4 heures",
      image: "/lovable-uploads/d31dab29-1f98-4459-b4ed-22f7b617cb03.png",
      description: "Nettoyage détaillé de l'intérieur",
      features: [
        "Aspiration détaillée",
        "Nettoyage détaillé de toutes les fissures et crevasses",
        "Extraction siège et tapis de sol",
        "Ciel de toit et volant détaillé en profondeur",
        "Cuir traité et vitres nettoyées",
        "Montants de porte et garniture",
        "Coffre nettoyé",
        "Désodorisant (sur demande)",
        "Protecteur SiO2 appliqué sur le cuir (protection 8 mois)",
        "Protecteur UV appliqué sur le tableau de bord",
        "Protection antitache pour tissu et tapis"
      ]
    },
    {
      title: "FULL DETAILING",
      priceSedan: "160 TND",
      priceSUV: "220 TND",
      duration: "1-2 jours",
      image: "/lovable-uploads/38adaee4-788a-417b-b0bf-2cbae2f71dff.png",
      description: "Service complet intérieur et extérieur",
      features: [
        "Tous les services Interior + Exterior",
        "Lavage à la main détaillé + bain moussant",
        "Clay bar et décontamination chimique",
        "Nettoyage en profondeur des roues et jantes",
        "Protection à base de cire",
        "Aspiration et nettoyage détaillé intérieur",
        "Extraction siège et tapis de sol",
        "Protecteur SiO2 sur cuir (8 mois)",
        "Protection UV tableau de bord",
        "Garantie satisfaction"
      ]
    },
    {
      title: "MAINTENANCE MENSUELLE",
      priceSedan: "80 TND",
      priceSUV: "100 TND",
      duration: "2 heures",
      image: "/lovable-uploads/1febd69e-e251-4e5b-af1a-2dce4a51d6ba.png",
      description: "Entretien régulier appliqué après full detailing",
      features: [
        "Lavage de maintien",
        "Retouche protection",
        "Nettoyage léger intérieur",
        "Vérification générale",
        "Conseils d'entretien"
      ]
    }
  ];

  return (
    <Layout>
      <PageHead 
        title="Services de Detailing Automobile - ELVAN | La Marsa, Tunisie"
        description="Découvrez nos services de detailing automobile premium : Basic Wash, Exterior/Interior Detailing, Full Detailing. Tarifs de 40 à 220 TND. Devis gratuit +216 55 729 728"
        keywords="services detailing automobile, basic wash, exterior detailing, interior detailing, full detailing, maintenance voiture, La Marsa"
        canonicalUrl="https://elvan-detailing.com/services"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 20, 38, 0.65), rgba(33, 41, 60, 0.70)), url('/lovable-uploads/ffbb2447-362a-4f90-904c-6abb09f3766f.png')`
              }}
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-elvan-white mb-6 animate-fade-in">
              Nos Services
            </h1>
            <p className="text-xl text-elvan-light-gray max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Découvrez notre gamme complète de services de detailing automobile 
              pour redonner à votre véhicule tout son éclat
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-elvan-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.title} - Service de detailing automobile ELVAN`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elvan-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-end mb-2">
                        <div className="text-elvan-white">
                          <div className="text-sm opacity-80">Sedan</div>
                          <span className="text-2xl font-bold">{service.priceSedan}</span>
                          <div className="text-sm opacity-80 mt-1">SUV</div>
                          <span className="text-2xl font-bold">{service.priceSUV}</span>
                        </div>
                        <div className="flex items-center text-elvan-light-gray">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-elvan-black mb-3 group-hover:text-elvan-navy transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-elvan-gray mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Sparkles className="h-4 w-4 text-elvan-navy mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-elvan-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-elvan-navy hover:bg-elvan-black transition-colors mt-auto" 
                      asChild
                    >
                      <Link to="/contact">
                        Réserver maintenant
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-elvan-light-gray">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-elvan-black mb-12">
              Pourquoi choisir ELVAN ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-elvan-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-elvan-navy" />
                </div>
                <h3 className="text-xl font-semibold text-elvan-black mb-2">Expertise</h3>
                <p className="text-elvan-gray">Techniques professionnelles et matériel de pointe</p>
              </div>
              <div className="text-center">
                <div className="bg-elvan-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-elvan-navy" />
                </div>
                <h3 className="text-xl font-semibold text-elvan-black mb-2">Garantie</h3>
                <p className="text-elvan-gray">Satisfaction garantie sur tous nos services</p>
              </div>
              <div className="text-center">
                <div className="bg-elvan-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-elvan-navy" />
                </div>
                <h3 className="text-xl font-semibold text-elvan-black mb-2">Qualité</h3>
                <p className="text-elvan-gray">Produits premium respectueux de l'environnement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-elvan-navy to-elvan-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-elvan-white mb-6">
              Prêt à transformer votre véhicule ?
            </h2>
            <p className="text-xl text-elvan-light-gray mb-8">
              Contactez-nous dès aujourd'hui pour une consultation gratuite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="elvan" size="lg" className="bg-elvan-white text-elvan-navy hover:bg-elvan-light-gray" asChild>
                <Link to="/contact">Réserver maintenant</Link>
              </Button>
              <Button variant="elvan-outline" size="lg" className="border-elvan-white text-elvan-white" asChild>
                <a href="tel:+21655729728">Appeler maintenant</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
