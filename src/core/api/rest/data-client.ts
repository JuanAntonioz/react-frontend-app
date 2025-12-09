import { createHttpClient } from './factory';

export const dataApi = createHttpClient({
  baseURL: import.meta.env.VITE_DATA_API_URL,
  useAuthInterceptor: true,
});
