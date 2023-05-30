import { useMutation } from '@tanstack/react-query';
import { authenticate } from '../services/api';

const useAuth = <Tipo,>(endpoint: string) => {
	// Use the useMutation hook with the authenticate function
	const authMutation = useMutation((credentials: Tipo) =>
		authenticate(endpoint, credentials),
	);

	// Return the authMutation object from the custom hook
	return authMutation;
};

export default useAuth;
