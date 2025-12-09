import { Navigate, Outlet } from 'react-router';
import { useAuth } from '@/core/auth';
import { RoutePath } from './routes-path';

export const PrivateGuard = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={RoutePath.LOGIN_SCREEN} replace />;
  }

  return <Outlet />;
};
