import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const PrivateRoute = () => {
  const { isInitInProgress, isAuthenticated } = useAuth();
  const hasAccessToken = localStorage.getItem('access_token');

  if (isInitInProgress) return <p>Initializing...</p>;

  if (isAuthenticated && hasAccessToken) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
