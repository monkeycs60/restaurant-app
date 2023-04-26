import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useAuth = <Tipo,>(endpoint: string) => {
	const API = axios.create({
		baseURL: 'http://localhost:3001',
	});
	// Define your authentication function
	const authenticate = async (credentials: Tipo) => {
		const response = await API.post(`/auth/${endpoint}`, credentials);
		return response.data;
	};

	// Use the useMutation hook with the authenticate function
	const authMutation = useMutation(authenticate);

	// Return the authMutation object from the custom hook
	return authMutation;
};

export default useAuth;
