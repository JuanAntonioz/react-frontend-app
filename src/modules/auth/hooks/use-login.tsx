import { useState } from 'react';

import { useAuth } from '@/core/auth';
import { AUTH_ENDPOINTS } from '@/core/auth/endpoints';
import { authApi } from '@/core/api/rest';

export const useLogin = () => {
  const { login: persistSession, logout } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await authApi.post(AUTH_ENDPOINTS.LOGIN, {
        username,
        password,
        expiresInMins: 30,
      });

      persistSession(data.accessToken, username);
    } catch (err) {
      setError('Error');
    } finally {
      setLoading(false);
    }
  };

  return { login, logout, loading, error };
};
