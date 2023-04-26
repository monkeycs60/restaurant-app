import useGetRecipes from '../hooks/useGetRecipes';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import useGetUserID from '../hooks/useGetUserID';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

type RecipeDisplayed = {
	_id: string;
	recipeName: string;
	ingredients: string[];
	instructions: string[];
	image: string;
	cookingTime: number;
	userOwner: string;
	createdAt: string;
	updatedAt: string;
};

const HomePage = () => {
	const { data, isLoading, error } = useGetRecipes();
	const user = useGetUserID();
	const [cookies] = useCookies(['token']);
	const navigate = useNavigate();

	const getSavedRecipes = async (recipeID: string, userID: string | null) => {
		const response = await axios.put('http://localhost:3001/recipes', {
			recipeID,
			userID,
		});
		return response.data;
	};
	useEffect(() => {
		if (!cookies.token) {
			const timer = setTimeout(() => {
				navigate('/auth');
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [cookies.token, navigate]);

	if (!cookies.token) {
		return <div>Not logged in</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error</div>;
	}

	return (
		<div>
			<h1>Home Page</h1>
			{data?.map((recipe: RecipeDisplayed) => (
				<div key={recipe._id}>
					<h2 className='text-4xl'>{recipe.recipeName}</h2>
					<img src={recipe.image} alt='' />
					<div>
						{recipe.ingredients.map((ingredient, index) => (
							<p key={index}>{ingredient}</p>
						))}
					</div>
					<button
						className={clsx(
							'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700',
						)}
						onClick={() => {
							getSavedRecipes(recipe._id, user);
						}}
					>
						Sauvegarder
					</button>
					<p>{recipe.createdAt}</p>
				</div>
			))}
		</div>
	);
};

export default HomePage;
