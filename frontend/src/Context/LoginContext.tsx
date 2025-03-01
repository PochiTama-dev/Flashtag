/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState,  ReactNode } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: any;  
}

interface AuthContextProps {
  state: AuthState;
  login: (user: any) => void;
  logout: () => void;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? { isAuthenticated: true, user: JSON.parse(storedUser) } : initialState;
  });

  const login = (user: any) => {
    console.log('Usuario logueado:', user);  
    sessionStorage.setItem('user', JSON.stringify(user));
    setState({
      isAuthenticated: true,
      user,
    });
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setState(initialState);
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};