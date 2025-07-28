
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { PageHead } from "@/components/seo/PageHead";

const Contact = () => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <Layout>
      <PageHead 
        title="Contact ELVAN Detailing - Devis Gratuit | +216 55 729 728 | La Marsa"
        description="Contactez ELVAN Detailing pour un devis gratuit. Téléphone: +216 55 729 728, Email: elvandetailing@gmail.com. Adresse: N°42 Espace Perle Bleu, La Marsa."
        keywords="contact ELVAN detailing, devis gratuit, téléphone, email, adresse La Marsa, rendez-vous detailing"
        canonicalUrl="https://elvan-detailing.com/contact"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 20, 38, 0.65), rgba(33, 41, 60, 0.70)), url('/lovable-uploads/bf8a6206-e1b7-40ed-99a9-b819f83342a3.png')`
              }}
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-elvan-white mb-6 animate-fade-in">
              Contactez-nous
            </h1>
            <p className="text-xl text-elvan-light-gray max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Obtenez votre devis personnalisé ou posez-nous vos questions. 
              Notre équipe vous répond rapidement.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-elvan-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-elvan-black mb-8">
                    Demander un devis
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nom">Nom complet *</Label>
                        <Input 
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input 
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="vehicule">Type de véhicule *</Label>
                        <Select name="vehicule" value={formData.vehicule} onValueChange={(value) => handleChange({ target: { name: 'vehicule', value } })}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Sélectionnez votre véhicule" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="hatchback">Hatchback</SelectItem>
                            <SelectItem value="coupe">Coupé</SelectItem>
                            <SelectItem value="break">Break</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="service">Service souhaité *</Label>
                        <Select name="service" value={formData.service} onValueChange={(value) => handleChange({ target: { name: 'service', value } })}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Choisir un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic-wash">Basic Wash</SelectItem>
                            <SelectItem value="exterior-detailing">Exterior Detailing</SelectItem>
                            <SelectItem value="interior-detailing">Interior Detailing</SelectItem>
                            <SelectItem value="full-detailing">Full Detailing</SelectItem>
                            <SelectItem value="maintenance">Maintenance Mensuelle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2"
                        placeholder="Décrivez vos besoins spécifiques..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-elvan-navy hover:bg-elvan-black transition-colors py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Envoyer la demande
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-elvan-black mb-6">
                      Informations de contact
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-elvan-navy mt-1" />
                        <div>
                          <h4 className="font-semibold text-elvan-black">Adresse</h4>
                          <p className="text-elvan-gray">
                            N° 42 Espace Perle Bleu<br />
                            2ème étage, B4<br />
                            La Marsa, Tunisie
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-elvan-navy mt-1" />
                        <div>
                          <h4 className="font-semibold text-elvan-black">Téléphone</h4>
                          <a 
                            href="tel:+21655729728" 
                            className="text-elvan-navy hover:text-elvan-black transition-colors"
                          >
                            +216 55 729 728
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-elvan-navy mt-1" />
                        <div>
                          <h4 className="font-semibold text-elvan-black">Email</h4>
                          <a 
                            href="mailto:elvandetailing@gmail.com" 
                            className="text-elvan-navy hover:text-elvan-black transition-colors"
                          >
                            elvandetailing@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-elvan-navy mt-1" />
                        <div>
                          <h4 className="font-semibold text-elvan-black">Horaires</h4>
                          <p className="text-elvan-gray">
                            Lundi - Vendredi: 8h00 - 18h00<br />
                            Samedi: 8h00 - 16h00<br />
                            Dimanche: Fermé
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-elvan-light-gray">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-elvan-black mb-4">
                      Pourquoi nous choisir ?
                    </h3>
                    <ul className="space-y-3 text-elvan-gray">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-elvan-navy rounded-full mr-3"></div>
                        Devis gratuit sous 24h
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-elvan-navy rounded-full mr-3"></div>
                        Équipe certifiée et expérimentée
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-elvan-navy rounded-full mr-3"></div>
                        Produits premium écologiques
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-elvan-navy rounded-full mr-3"></div>
                        Satisfaction garantie
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
