import { useState, useContext } from 'react';
import axiosInstance from '../../server/HostHandler';
import Cookies from 'js-cookie';

// Auth
import { AuthContext } from '../Auth';

function useAuthentication(openModal?: (type: string) => void) {
    const [ error, setError ] = useState<string>('');
    const [ errorId, setErrorId ] = useState<string>('');
    const [ userName, setUserName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');

	const authContext = useContext<any>(AuthContext);

    const { logout, login } = authContext;

    async function handleRegister() {
		try {
			const response = await axiosInstance.post(
				'/register', 
				{
					user: userName,
					email: email,
					password: password,
					confirm_password: confirmPassword
				}
			);
			setError(response.data.error);
			setErrorId(response.data.id);

			if (response.data.success) {
				if (openModal)
					openModal('success');
			}
		} catch (error) {
			
		}
    }

    async function handleLogin() {
		try {
			const response = await axiosInstance.post(
				'/login', 
				{
					user: userName,
					password: password
				}
			);

			setError(response.data.error);

			if (response.data.success) {
				Cookies.set(
					'jwtToken',
					response.data.token,
					{ expires: 1 / 24 }
				);

				if (openModal) {
					openModal('Success');
				}

				login();
			}
		} catch (error) {
			
		}
    }

	async function handleLogout() {
		logout();
	}

    return {
        error,
        errorId,
        userName,
        email,
        password,
        confirmPassword,
        setUserName,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleRegister,
        handleLogin,
		handleLogout
    };
}

export default useAuthentication;