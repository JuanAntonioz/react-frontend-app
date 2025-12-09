import { BrowserRouter, Routes, Route } from 'react-router';
import { Users } from '../../modules/users/pages/users-page';
import { PrivateGuard } from './private-guard';

import { PublicGuard } from './public-guard';
import { RoutePath } from './routes-path';
import { LoginPage } from '@/modules/auth/pages/login-page';
import { LandingPage } from '@/modules/landing/pages/landing-page';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        /* Public zone */
        <Route path={RoutePath.MAIN} element={<LandingPage />} />
        /* Login zone */
        <Route element={<PublicGuard />}>
          <Route path={RoutePath.LOGIN_SCREEN} element={<LoginPage />} />
        </Route>
        /* Private Zone */
        <Route element={<PrivateGuard />}>
          <Route path={RoutePath.USERS_SCREEN} element={<Users />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
