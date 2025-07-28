import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Clock, Sparkles, Shield, Award, Heart, CheckCircle, TrendingUp, Users } from "lucide-react";
import { PageHead } from "@/components/seo/PageHead";
const Home = () => {
  const testimonials = [{
    name: "Ahmed Ben Ali",
    text: "Service exceptionnel ! Ma voiture n'a jamais été aussi propre. L'équipe ELVAN est vraiment professionnelle.",
    rating: 5,
    vehicle: "BMW Serie 3"
  }, {
    name: "Fatima Trabelsi",
    text: "Professionnalisme et qualité au rendez-vous. Je recommande vivement ! Résultat parfait.",
    rating: 5,
    vehicle: "Mercedes Classe A"
  }, {
    name: "Mohamed Gharbi",
    text: "Excellent travail, équipe très professionnelle. Ma voiture brille comme neuve !",
    rating: 5,
    vehicle: "Audi A4"
  }];
  const qualityFeatures = [{
    icon: <Shield className="h-8 w-8 text-elvan-navy" />,
    title: "Protection Durable",
    description: "Nos traitements protègent votre véhicule contre les agressions extérieures",
    image: "/lovable-uploads/ed1f71d4-bd20-49e1-8e99-58f69b464add.png"
  }, {
    icon: <Heart className="h-8 w-8 text-elvan-navy" />,
    title: "Soin Minutieux",
    description: "Chaque détail compte dans notre approche professionnelle",
    image: "/lovable-uploads/1e8606eb-551a-4fe3-91be-eeadc6a30c76.png"
  }, {
    icon: <Award className="h-8 w-8 text-elvan-navy" />,
    title: "Expertise Reconnue",
    description: "Des techniques avancées pour des résultats exceptionnels",
    image: "/lovable-uploads/7757b4ad-652d-44fb-9903-1ffbb95ff57b.png"
  }];
  const importancePoints = [{
    icon: <TrendingUp className="h-6 w-6 text-elvan-navy" />,
    title: "Préservation de la valeur",
    description: "Un entretien régulier maintient la valeur de revente de votre véhicule"
  }, {
    icon: <Shield className="h-6 w-6 text-elvan-navy" />,
    title: "Protection contre l'usure",
    description: "Nos traitements protègent la carrosserie et l'intérieur des agressions"
  }, {
    icon: <Star className="h-6 w-6 text-elvan-navy" />,
    title: "Esthétique impeccable",
    description: "Retrouvez l'éclat du neuf avec nos services professionnels"
  }, {
    icon: <Users className="h-6 w-6 text-elvan-navy" />,
    title: "Confort au quotidien",
    description: "Un intérieur propre et sain pour votre bien-être"
  }];
  return <div className="min-h-screen">
      <PageHead 
        title="ELVAN Detailing - Centre de Detailing Automobile Haut de Gamme à La Marsa, Tunisie"
        description="ELVAN Detailing - Centre professionnel de detailing automobile à La Marsa. Services premium : lavage, protection céramique, nettoyage intérieur. Devis gratuit +216 55 729 728"
        keywords="ELVAN detailing, detailing automobile La Marsa, lavage voiture Tunisie, protection céramique, nettoyage auto premium"
        canonicalUrl="https://elvan-detailing.com/"
      />
      {/* Section Hero */}
      <HeroSection />

      {/* Section Importance des Services */}
      <section className="py-32 bg-gradient-to-br from-elvan-white to-elvan-light-gray/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: "radial-gradient(circle, rgba(33, 41, 60, 0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-elvan-navy/10 backdrop-blur-sm rounded-full px-8 py-4 text-elvan-navy font-medium mb-8 hover:bg-elvan-navy/20 transition-all duration-500">
              <CheckCircle className="h-5 w-5 mr-3" />
              Pourquoi c'est important
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-elvan-black mb-8 leading-tight">
              L'importance du 
              <span className="text-elvan-navy block md:inline"> Detailing</span>
            </h2>
            <p className="text-xl text-elvan-gray max-w-3xl mx-auto leading-relaxed">
              Le detailing automobile n'est pas qu'une question d'esthétique. C'est un investissement 
              dans la durabilité, la valeur et votre satisfaction quotidienne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {importancePoints.map((point, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-elvan-white to-elvan-light-gray/30">
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 bg-gray-100">
                    <div className="group-hover:text-elvan-white transition-colors">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-elvan-black mb-4 group-hover:text-elvan-navy transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-elvan-gray leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Section Services */}
      <ServicesSection />

      {/* Section Qualité des Services avec nouvelles images */}
      <section className="py-32 bg-gradient-to-br from-elvan-black via-elvan-navy to-elvan-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-repeat animate-pulse" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px"
        }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-elvan-white/10 backdrop-blur-sm rounded-full px-8 py-4 text-elvan-white font-medium mb-8 hover:bg-elvan-white/20 transition-all duration-500">
              <Sparkles className="h-5 w-5 mr-3" />
              Notre Savoir-Faire
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-elvan-white mb-8 leading-tight">
              La Qualité 
              <span className="text-elvan-light-gray block md:inline"> ELVAN</span>
            </h2>
            <p className="text-xl text-elvan-light-gray max-w-3xl mx-auto leading-relaxed">
              Découvrez notre approche méthodique et professionnelle qui fait la différence. 
              Chaque geste compte pour un résultat parfait.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-elvan-white to-elvan-light-gray/50">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={`${feature.title} - ELVAN Detailing`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elvan-black/80 via-elvan-black/40 to-transparent group-hover:from-elvan-navy/80 transition-all duration-500"></div>
                  
                  <div className="absolute top-4 right-4 p-4 backdrop-blur-sm rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 bg-gray-100">
                    <div className="group-hover:text-elvan-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-elvan-black mb-4 group-hover:text-elvan-navy transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-elvan-gray leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <FeaturesSection />

      {/* Section Témoignages améliorée */}
      <section className="py-32 bg-elvan-white relative overflow-hidden">
        {/* Arrière-plan décoratif */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: "radial-gradient(circle, rgba(33, 41, 60, 0.03) 1px, transparent 1px)",
          backgroundSize: "100px 100px"
        }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-elvan-navy/10 backdrop-blur-sm rounded-full px-8 py-4 text-elvan-navy font-medium mb-8 hover:bg-elvan-navy/20 transition-all duration-500">
              <Star className="h-5 w-5 mr-3" />
              Témoignages clients
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-elvan-black mb-8 leading-tight">
              Ils nous font 
              <span className="text-elvan-navy block md:inline"> confiance</span>
            </h2>
            <p className="text-xl text-elvan-gray max-w-3xl mx-auto leading-relaxed">
              Découvrez ce que nos clients pensent de nos services de detailing automobile premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-elvan-white to-elvan-light-gray/30 hover:from-elvan-light-gray/20 hover:to-elvan-white overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Quote décoratif */}
                  <div className="absolute top-4 right-4 text-6xl text-elvan-navy/10 font-serif">"</div>
                  
                  {/* Étoiles */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{
                  transitionDelay: `${i * 100}ms`
                }} />)}
                  </div>
                  
                  {/* Témoignage */}
                  <p className="text-elvan-gray mb-8 leading-relaxed italic text-lg group-hover:text-elvan-black transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Informations client */}
                  <div className="border-t border-elvan-light-gray pt-6">
                    <div className="font-semibold text-elvan-black text-lg mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-elvan-navy text-sm font-medium">
                      {testimonial.vehicle}
                    </div>
                  </div>
                  
                  {/* Ligne décorative */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-elvan-navy to-elvan-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Section CTA améliorée */}
      <section className="py-32 bg-gradient-to-br from-elvan-navy via-elvan-black to-elvan-navy relative overflow-hidden">
        {/* Arrière-plan animé */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-repeat animate-pulse" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "120px 120px"
        }}></div>
        </div>
        
        {/* Formes géométriques flottantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-elvan-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-elvan-white/5 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-elvan-white/5 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center bg-elvan-white/10 backdrop-blur-sm rounded-full px-8 py-4 text-elvan-white font-medium mb-10 hover:bg-elvan-white/20 transition-all duration-500">
            <Clock className="h-5 w-5 mr-3" />
            Prêt à commencer ?
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-elvan-white mb-8 leading-tight">
            Transformez votre 
            <span className="block text-elvan-light-gray mt-2"> véhicule aujourd'hui</span>
          </h2>
          
          <p className="text-xl text-elvan-light-gray mb-16 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous dès maintenant pour un devis personnalisé et découvrez 
            la différence ELVAN pour votre véhicule. Excellence garantie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button variant="elvan" size="lg" className="text-xl px-16 py-8 bg-elvan-white text-elvan-navy hover:bg-elvan-light-gray shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-elvan-white/30" asChild>
              <Link to="/contact">
                <Sparkles className="h-6 w-6 mr-3" />
                Demander un devis
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button variant="elvan-outline" size="lg" className="text-xl px-16 py-8 border-2 border-elvan-white text-elvan-white hover:bg-elvan-white hover:text-elvan-navy backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-elvan-white/20" asChild>
              <a href="tel:+21655729728">
                +216 55 729 728
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;