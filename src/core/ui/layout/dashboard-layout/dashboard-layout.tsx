import { Outlet, useNavigate } from 'react-router';

import { Button } from '@/core/ui/primitives/button';
import { useAuth } from '@/core/auth';
import { RoutePath } from '@/core/router/routes-path';
import { AppHeader } from '@/core/ui/layout/app-header/app-header';

export const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(RoutePath.LOGIN_SCREEN);
  };

  return (
    <div className="min-h-screen flex flex-col items-stretch bg-gray-50 px-6 pt-8 pb-16 lg:px-12">
      <AppHeader
        actions={
          <Button onClick={handleLogout} variant="ghost">
            Logout
          </Button>
        }
      />
      <main className="flex-1 w-full max-w-[1200px] mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
};
