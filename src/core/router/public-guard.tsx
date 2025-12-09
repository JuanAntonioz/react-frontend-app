import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../auth/hooks/use-auth';
import { RoutePath } from './routes-path';

export const PublicGuard = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={RoutePath.USERS_SCREEN} replace />;
  }
  return <Outlet />;
};
