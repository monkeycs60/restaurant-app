import { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { useCookies } from 'react-cookie';

interface UseCreateRecipe {
	createRecipe: (data: RecipeFormData) => Promise<void>;
	loading: boolean;
	error: string | null;
}
const recipeSchema = z.object({
	recipeName: z.string().nonempty({ message: 'Recipe name is required' }),
	ingredients: z.array(z.string().nonempty('Ingredient is required')),
	instructions: z.array(z.string().nonempty('Instruction is required')),
	image: z.string().nonempty('Image URL is required'),
	cookingTime: z.number().min(1, 'Cooking time should be at least 1 minute'),
	userOwner: z.string().nonempty('User owner ID is required'),
});

export type RecipeFormData = z.infer<typeof recipeSchema>;
const useCreateRecipe = (): UseCreateRecipe => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [cookie] = useCookies(['token']);

	const createRecipe = async (data: RecipeFormData): Promise<void> => {
		setLoading(true);
		setError(null);

		try {
			await axios.post('http://localhost:3001/recipes', data, {
				headers: {
					'Content-Type': 'application/json',
					authorization: cookie?.token,
				},
			});
		} catch (error: any) {
			setError(error.response?.data?.message || 'An error occurred');
		} finally {
			setLoading(false);
		}
	};

	return {
		createRecipe,
		loading,
		error,
	};
};

export default useCreateRecipe;
