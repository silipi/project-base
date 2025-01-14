import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const hasAccessToken = localStorage.getItem('access_token');

  if (!hasAccessToken) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default PublicRoute;
