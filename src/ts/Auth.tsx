// Auth.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!Cookies.get('jwtToken'));

	const nav = useNavigate();

	const login = () => {
		setIsLoggedIn(!!Cookies.get('jwtToken'));
	};

	const logout = () => {
		setIsLoggedIn(false);
		Cookies.remove('jwtToken');
		nav('/');
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
