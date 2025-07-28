
import { CheckCircle, Award, Star, Shield, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-elvan-navy" />,
      title: "Expertise technique avancée",
      description: "Techniques professionnelles et savoir-faire spécialisé",
      color: "from-blue-400 to-elvan-navy"
    },
    {
      icon: <Star className="h-8 w-8 text-elvan-navy" />,
      title: "Produits écoresponsables",
      description: "Produits premium respectueux de l'environnement",
      color: "from-green-400 to-elvan-navy"
    },
    {
      icon: <Shield className="h-8 w-8 text-elvan-navy" />,
      title: "Finitions brillantes garanties",
      description: "Résultats impeccables avec garantie de satisfaction",
      color: "from-purple-400 to-elvan-navy"
    },
    {
      icon: <Users className="h-8 w-8 text-elvan-navy" />,
      title: "Service client à l'écoute",
      description: "Équipe dédiée et professionnelle à votre service",
      color: "from-orange-400 to-elvan-navy"
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-elvan-light-gray/50 to-elvan-white relative overflow-hidden">
      {/* Arrière-plan décoratif animé */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-repeat animate-pulse" style={{
          backgroundImage: "radial-gradient(circle, rgba(33, 41, 60, 0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-elvan-navy/10 backdrop-blur-sm rounded-full px-8 py-4 text-elvan-navy font-medium mb-8 hover:bg-elvan-navy/20 transition-all duration-500">
            <CheckCircle className="h-5 w-5 mr-3" />
            Pourquoi nous choisir
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-elvan-black mb-8 leading-tight">
            L'Excellence 
            <span className="text-elvan-navy block md:inline"> ELVAN</span>
          </h2>
          <p className="text-xl text-elvan-gray max-w-3xl mx-auto leading-relaxed">
            Notre engagement pour l'excellence et la satisfaction client nous distingue 
            dans le domaine du detailing automobile premium.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center hover:transform hover:-translate-y-2 transition-all duration-500">
              {/* Icône avec gradient animé */}
              <div className="relative mb-8">
                <div className={`bg-gradient-to-br ${feature.color} p-8 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Effet de lueur */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl w-24 h-24 mx-auto opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              </div>
              
              <h3 className="text-xl font-bold text-elvan-black mb-4 group-hover:text-elvan-navy transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-elvan-gray leading-relaxed group-hover:text-elvan-black transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Ligne décorative */}
              <div className="mt-6 w-12 h-0.5 bg-elvan-light-gray mx-auto group-hover:bg-elvan-navy group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
