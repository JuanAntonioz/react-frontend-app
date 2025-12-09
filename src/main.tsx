import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRoutes } from './core/router/app-router';
import { AuthProvider } from './core/auth';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>,
);
