import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
	const fetchUserData = async (userID: string) => {
		try {
			const response = await axios.get(
				`http://localhost:3001/auth/profile`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				},
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	const { data, isLoading, isError } = useQuery(
		['user', 'userID'],
		() => fetchUserData('userID'),
		{
			enabled: !!'userID',
		},
	);

	return { data, isLoading, isError };
};

export default useGetUser;
