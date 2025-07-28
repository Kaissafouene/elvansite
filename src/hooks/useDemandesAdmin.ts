
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Demande {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  type_service: string | null;
  message: string | null;
  date_reception: string;
  statut: string;
}

export const useDemandesAdmin = () => {
  const [demandes, setDemandes] = useState<Demande[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchDemandes = async () => {
    try {
      const { data, error } = await supabase
        .from('demandes')
        .select('*')
        .order('date_reception', { ascending: false });

      if (error) {
        console.error('Erreur lors de la récupération des demandes:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les demandes",
          variant: "destructive",
        });
        return;
      }

      setDemandes(data || []);
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatut = async (id: string, newStatut: string) => {
    try {
      const { error } = await supabase
        .from('demandes')
        .update({ statut: newStatut })
        .eq('id', id);

      if (error) {
        console.error('Erreur lors de la mise à jour:', error);
        toast({
          title: "Erreur",
          description: "Impossible de mettre à jour le statut",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Succès",
        description: "Statut mis à jour avec succès",
      });

      // Rafraîchir la liste
      fetchDemandes();
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchDemandes();
  }, []);

  return {
    demandes,
    loading,
    fetchDemandes,
    updateStatut,
  };
};
