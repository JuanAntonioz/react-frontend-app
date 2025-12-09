import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from 'axios';

import { StorageAdapter, StorageKeys } from '@/core/storage';

interface ClientOptions {
  baseURL: string;
  useAuthInterceptor?: boolean;
}

export const createHttpClient = ({
  baseURL,
  useAuthInterceptor = false,
}: ClientOptions): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000,
  });

  if (useAuthInterceptor) {
    instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = StorageAdapter.getItem<string>(StorageKeys.AUTH_TOKEN);

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
  }
  return instance;
};
