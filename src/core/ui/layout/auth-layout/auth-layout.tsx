import { Link, Navigate, Outlet } from 'react-router';

import { AppHeader } from '@/core/ui/layout/app-header/app-header';
import { Button } from '@/core/ui/primitives/button';
import { RoutePath } from '@/core/router/routes-path';
import { useAuth } from '@/core/auth/hooks/use-auth';

export const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={RoutePath.USERS_SCREEN} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-stretch px-6 pt-8 pb-16 bg-gray-50 lg:px-12">
      <AppHeader
        actions={
          <Button as={Link} to={RoutePath.MAIN}>
            Volver
          </Button>
        }
      />
      <main className="flex-1 w-full max-w-[600px] mx-auto flex items-center justify-center py-6 lg:py-10">
        <Outlet />
      </main>
    </div>
  );
};
