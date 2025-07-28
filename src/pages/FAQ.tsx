
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHead } from "@/components/seo/PageHead";

const FAQ = () => {
  const faqItems = [
    {
      question: "Quels sont vos tarifs pour un detailing complet ?",
      answer: "Nos tarifs varient selon le type de véhicule : Sedan 160 TND, SUV 220 TND pour un full detailing. Nous proposons également des services à la carte : Basic Wash (40-45 TND), Exterior Detailing (100-140 TND), Interior Detailing (80-120 TND)."
    },
    {
      question: "Combien de temps prend un service de detailing ?",
      answer: "Les durées varient selon le service : Basic Wash (2-3h), Interior/Exterior Detailing (3-6h), Full Detailing (1-2 jours), Maintenance mensuelle (2h). Nous vous communiquons un délai précis lors de votre réservation."
    },
    {
      question: "Utilisez-vous des produits écologiques ?",
      answer: "Oui, nous utilisons exclusivement des produits premium respectueux de l'environnement. Nos produits sont biodégradables et ne contiennent pas de substances nocives pour l'environnement."
    },
    {
      question: "Proposez-vous une garantie sur vos services ?",
      answer: "Oui, nous offrons une garantie satisfaction sur tous nos services. Pour le full detailing, nous proposons une garantie de 6 mois sur les traitements de protection."
    },
    {
      question: "Comment puis-je réserver un service ?",
      answer: "Vous pouvez réserver par téléphone au +216 55 729 728, par email à elvandetailing@gmail.com, ou via notre formulaire de contact en ligne. Nous vous répondrons sous 24h avec un devis personnalisé."
    },
    {
      question: "Acceptez-vous tous types de véhicules ?",
      answer: "Oui, nous traitons tous types de véhicules : berlines, SUV, hatchbacks, coupés, breaks, et véhicules de luxe. Nos techniques s'adaptent à chaque type de carrosserie et matériau."
    },
    {
      question: "Où êtes-vous situés ?",
      answer: "Nous sommes situés au N° 42 Espace Perle Bleu, 2ème étage, B4, La Marsa, Tunisie. Parking disponible sur place."
    },
    {
      question: "Que comprend le service de maintenance mensuelle ?",
      answer: "Le service maintenance mensuelle (80-100 TND) comprend : lavage de maintien, retouche des protections, nettoyage léger intérieur, vérification générale et conseils d'entretien. Ce service est appliqué après un full detailing."
    }
  ];

  return (
    <Layout>
      <PageHead 
        title="FAQ - Questions Fréquentes | ELVAN Detailing La Marsa"
        description="Trouvez les réponses à vos questions sur nos services de detailing automobile : tarifs, durées, garanties, produits écologiques. ELVAN Detailing FAQ."
        keywords="FAQ detailing automobile, questions fréquentes, tarifs services, garantie detailing, produits écologiques"
        canonicalUrl="https://elvan-detailing.com/faq"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 20, 38, 0.65), rgba(33, 41, 60, 0.70)), url('/lovable-uploads/f090b3b2-fbf2-49fb-9b1d-fd927f7229b7.png')`
              }}
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-elvan-white mb-6 animate-fade-in">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-elvan-light-gray max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Trouvez les réponses à vos questions sur nos services de detailing automobile
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-elvan-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-elvan-navy/10 rounded-full px-6 py-3 text-elvan-navy font-medium mb-6">
                <HelpCircle className="h-5 w-5 mr-2" />
                FAQ
              </div>
              <h2 className="text-4xl font-bold text-elvan-black mb-6">
                Tout ce que vous devez savoir
              </h2>
              <p className="text-xl text-elvan-gray max-w-2xl mx-auto">
                Nous avons rassemblé les questions les plus fréquentes pour vous aider à mieux comprendre nos services.
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-semibold text-elvan-black hover:text-elvan-navy">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-elvan-gray leading-relaxed pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-elvan-light-gray">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-elvan-black mb-6">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl text-elvan-gray mb-8">
              Notre équipe est là pour répondre à toutes vos questions spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="elvan" 
                size="lg" 
                className="bg-elvan-navy hover:bg-elvan-black" 
                asChild
              >
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Nous contacter
                </Link>
              </Button>
              <Button 
                variant="elvan-outline" 
                size="lg" 
                className="border-elvan-navy text-elvan-navy hover:bg-elvan-navy hover:text-elvan-white" 
                asChild
              >
                <a href="tel:+21655729728">
                  <Phone className="mr-2 h-5 w-5" />
                  +216 55 729 728
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
