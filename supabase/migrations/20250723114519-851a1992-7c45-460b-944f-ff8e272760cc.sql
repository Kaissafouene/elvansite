
-- Créer la table des demandes de contact
CREATE TABLE public.demandes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT NOT NULL,
  type_service TEXT,
  message TEXT,
  date_reception TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  statut TEXT NOT NULL DEFAULT 'non traité'
);

-- Créer un index pour optimiser les requêtes par date
CREATE INDEX idx_demandes_date_reception ON public.demandes(date_reception DESC);

-- Créer un index pour optimiser les requêtes par statut
CREATE INDEX idx_demandes_statut ON public.demandes(statut);
