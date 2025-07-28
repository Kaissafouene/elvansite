
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Shield, Users, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHead } from "@/components/seo/PageHead";

const About = () => {
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-elvan-navy" />,
      title: "Expertise technique avancée",
      description: "Notre équipe maîtrise les dernières techniques de detailing automobile et utilise des méthodes éprouvées pour garantir des résultats exceptionnels."
    },
    {
      icon: <Star className="h-8 w-8 text-elvan-navy" />,
      title: "Produits écoresponsables",
      description: "Nous utilisons exclusivement des produits premium respectueux de l'environnement, sans compromettre la qualité du traitement."
    },
    {
      icon: <Shield className="h-8 w-8 text-elvan-navy" />,
      title: "Finitions brillantes garanties",
      description: "Chaque véhicule traité bénéficie de notre garantie satisfaction. Nous nous engageons sur la qualité de nos prestations."
    },
    {
      icon: <Users className="h-8 w-8 text-elvan-navy" />,
      title: "Service client à l'écoute",
      description: "Une approche personnalisée pour chaque client. Nous prenons le temps de comprendre vos besoins et attentes spécifiques."
    }
  ];

  return (
    <Layout>
      <PageHead 
        title="À Propos d'ELVAN Detailing - Centre Automobile Haut de Gamme | La Marsa"
        description="Découvrez ELVAN Detailing, centre de detailing automobile fondé en 2025 à La Marsa. Expertise, qualité et satisfaction client depuis notre création."
        keywords="à propos ELVAN, histoire detailing automobile, centre La Marsa, expertise automobile, qualité service"
        canonicalUrl="https://elvan-detailing.com/about"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 20, 38, 0.65), rgba(33, 41, 60, 0.70)), url('/lovable-uploads/05577b54-b1c7-4418-ac40-171a3ccd721b.png')`
              }}
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-elvan-white mb-6 animate-fade-in">
              À Propos d'ELVAN
            </h1>
            <p className="text-xl text-elvan-light-gray max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Centre de detailing automobile haut de gamme fondé en 2025 à La Marsa, 
              spécialisé dans l'excellence et la satisfaction client.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-elvan-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-elvan-black mb-6">
                Notre Histoire
              </h2>
              <div className="w-24 h-1 bg-elvan-navy mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-elvan-gray">
              <p className="text-xl leading-relaxed mb-8">
                ELVAN est né d'une passion pour l'automobile et d'un désir d'excellence. 
                Fondé en 2025 à La Marsa, notre centre de detailing automobile s'est rapidement 
                imposé comme une référence dans le domaine du soin automobile haut de gamme en Tunisie.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Notre philosophie repose sur trois piliers fondamentaux : la qualité irréprochable 
                de nos prestations, l'utilisation de produits premium respectueux de l'environnement, 
                et un service client personnalisé qui place la satisfaction de nos clients au cœur 
                de nos préoccupations.
              </p>

              <p className="text-lg leading-relaxed">
                Nous croyons que chaque véhicule mérite un traitement d'exception. C'est pourquoi 
                nous mettons tout notre savoir-faire et notre passion au service de votre automobile, 
                pour lui redonner tout son éclat et prolonger sa durée de vie.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-elvan-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-elvan-black mb-6">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-xl text-elvan-gray max-w-2xl mx-auto">
                Découvrez les raisons qui font d'ELVAN votre partenaire de confiance 
                pour l'entretien de votre véhicule
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-elvan-light-gray p-3 rounded-full">
                        {reason.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-elvan-black mb-3">
                          {reason.title}
                        </h3>
                        <p className="text-elvan-gray leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-elvan-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-elvan-black mb-6">
                Informations Pratiques
              </h2>
              <div className="w-24 h-1 bg-elvan-navy mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <MapPin className="h-8 w-8 text-elvan-navy mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-elvan-black mb-3">Adresse</h3>
                  <p className="text-elvan-gray">
                    N° 42 Espace Perle Bleu<br />
                    2ème étage, B4<br />
                    La Marsa, Tunisie
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <Phone className="h-8 w-8 text-elvan-navy mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-elvan-black mb-3">Téléphone</h3>
                  <a 
                    href="tel:+21655729728" 
                    className="text-elvan-navy hover:text-elvan-black transition-colors font-medium"
                  >
                    +216 55 729 728
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <Mail className="h-8 w-8 text-elvan-navy mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-elvan-black mb-3">Email</h3>
                  <a 
                    href="mailto:elvandetailing@gmail.com" 
                    className="text-elvan-navy hover:text-elvan-black transition-colors font-medium"
                  >
                    elvandetailing@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-elvan-navy to-elvan-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-elvan-white mb-6">
              Prêt à découvrir nos services ?
            </h2>
            <p className="text-xl text-elvan-light-gray mb-8">
              Faites confiance à ELVAN pour redonner à votre véhicule tout son éclat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="elvan" size="lg" className="bg-elvan-white text-elvan-navy hover:bg-elvan-light-gray" asChild>
                <Link to="/services">Découvrir nos services</Link>
              </Button>
              <Button variant="elvan-outline" size="lg" className="border-elvan-white text-elvan-white" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
