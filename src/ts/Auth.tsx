// Auth.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));

	const login = () => {
		setIsLoggedIn(!!localStorage.getItem('token'));
	};

	const logout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem('token');
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
