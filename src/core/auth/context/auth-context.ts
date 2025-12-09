import { createContext } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  login: (token: string, email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
