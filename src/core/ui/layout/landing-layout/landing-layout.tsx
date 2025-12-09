import { Outlet, Link } from 'react-router';

import { AppHeader } from '@/core/ui/layout/app-header/app-header';
import { Button } from '@/core/ui/primitives/button';
import { RoutePath } from '@/core/router/routes-path';

export const LandingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-stretch px-6 pt-8 pb-16 lg:px-12">
      <AppHeader
        actions={
          <Button as={Link} to={RoutePath.LOGIN_SCREEN}>
            Login
          </Button>
        }
      />
      <main className="flex-1 w-full max-w-[1100px] mx-auto py-10 lg:py-14">
        <Outlet />
      </main>
    </div>
  );
};
