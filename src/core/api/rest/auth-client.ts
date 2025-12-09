import { createHttpClient } from './factory';

export const authApi = createHttpClient({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
  useAuthInterceptor: false,
});
