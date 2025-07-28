
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useDemandesAdmin } from '@/hooks/useDemandesAdmin';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { LogOut, RefreshCw } from 'lucide-react';

interface DashboardContentProps {
  onLogout: () => void;
}

const DashboardContent = ({ onLogout }: DashboardContentProps) => {
  const { demandes, loading, fetchDemandes, updateStatut } = useDemandesAdmin();

  const getStatutBadge = (statut: string) => {
    return statut === 'traité' ? (
      <Badge variant="default" className="bg-green-500 hover:bg-green-600">
        Traité
      </Badge>
    ) : (
      <Badge variant="destructive">
        Non traité
      </Badge>
    );
  };

  const handleMarquerTraite = (id: string) => {
    updateStatut(id, 'traité');
  };

  const handleMarquerNonTraite = (id: string) => {
    updateStatut(id, 'non traité');
  };

  return (
    <div className="min-h-screen bg-elvan-light-gray">
      <div className="bg-elvan-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-elvan-black">
              Dashboard ELVAN
            </h1>
            <div className="flex items-center space-x-4">
              <Button
                variant="elvan-outline"
                onClick={fetchDemandes}
                disabled={loading}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Actualiser
              </Button>
              <Button variant="elvan-outline" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Se déconnecter
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-elvan-black">
              Demandes de contact ({demandes.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-elvan-navy mx-auto"></div>
                <p className="mt-2 text-elvan-gray">Chargement...</p>
              </div>
            ) : demandes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-elvan-gray">Aucune demande pour le moment</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Nom</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Téléphone</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {demandes.map((demande) => (
                      <TableRow key={demande.id}>
                        <TableCell>
                          {format(new Date(demande.date_reception), 'dd/MM/yyyy HH:mm', { locale: fr })}
                        </TableCell>
                        <TableCell className="font-medium">{demande.nom}</TableCell>
                        <TableCell>{demande.email}</TableCell>
                        <TableCell>{demande.telephone}</TableCell>
                        <TableCell>{demande.type_service || '-'}</TableCell>
                        <TableCell className="max-w-xs truncate" title={demande.message || ''}>
                          {demande.message || '-'}
                        </TableCell>
                        <TableCell>
                          {getStatutBadge(demande.statut)}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {demande.statut === 'non traité' ? (
                              <Button
                                size="sm"
                                variant="default"
                                onClick={() => handleMarquerTraite(demande.id)}
                                className="bg-green-500 hover:bg-green-600"
                              >
                                Marquer traité
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleMarquerNonTraite(demande.id)}
                              >
                                Marquer non traité
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
