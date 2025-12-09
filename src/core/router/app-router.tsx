import { BrowserRouter, Routes, Route } from 'react-router';
import { Users } from '../../modules/users/pages/users-page';
import { RoutePath } from './routes-path';
import { LoginPage } from '@/modules/auth/pages/login-page';
import { LandingPage } from '@/modules/landing/pages/landing-page';
import { LandingLayout } from '../ui/layout/landing-layout/landing-layout';
import { AuthLayout } from '../ui/layout/auth-layout/auth-layout';
import { DashboardLayout } from '../ui/layout/dashboard-layout/dashboard-layout';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path={RoutePath.MAIN} element={<LandingPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={RoutePath.LOGIN_SCREEN} element={<LoginPage />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path={RoutePath.USERS_SCREEN} element={<Users />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
