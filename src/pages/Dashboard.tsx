
import { useState, useEffect } from 'react';
import AdminAuth from '@/components/admin/AdminAuth';
import DashboardContent from '@/components/admin/DashboardContent';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté (sessionStorage)
    const isLoggedIn = sessionStorage.getItem('elvan_admin_logged_in');
    if (isLoggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('elvan_admin_logged_in', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('elvan_admin_logged_in');
  };

  if (!isAuthenticated) {
    return <AdminAuth onLogin={handleLogin} />;
  }

  return <DashboardContent onLogout={handleLogout} />;
};

export default Dashboard;
