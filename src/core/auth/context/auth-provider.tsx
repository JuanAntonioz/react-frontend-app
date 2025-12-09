import { useState, type ReactNode } from 'react';
import { AuthContext } from './auth-context';
import { StorageAdapter, StorageKeys } from '@/core/storage';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    StorageAdapter.getItem<string>(StorageKeys.AUTH_TOKEN),
  );

  const login = (newToken: string) => {
    StorageAdapter.setItem(StorageKeys.AUTH_TOKEN, newToken);
    setToken(newToken);
  };

  const logout = () => {
    StorageAdapter.removeItem(StorageKeys.AUTH_TOKEN);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!token, accessToken: token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
