import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useGetRecipes = () => {
	const [cookies] = useCookies(['token']);
	const getRecipes = async () => {
		const response = await axios.get('http://localhost:3001/recipes', {
			headers: {
				authorization: cookies.token,
			},
		});
		return response.data;
	};

	const recipesQuery = useQuery(['recipeList'], getRecipes);

	return recipesQuery;
};

export default useGetRecipes;
