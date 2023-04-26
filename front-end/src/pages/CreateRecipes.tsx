import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import clsx from 'clsx';
import useCreateRecipe from '../hooks/useCreateRecipe';
import { RecipeFormData } from '../hooks/useCreateRecipe';
import useGetUserID from '../hooks/useGetUserID';
import { useNavigate } from 'react-router-dom';
export const CreateRecipe = () => {
	const { createRecipe, loading, error } = useCreateRecipe();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecipeFormData>({ mode: 'onChange' });
	const [ingredientsList, setIngredientsList] = useState<string[]>([]);

	const addIngredient = () => {
		const newIngredient = (
			document.getElementById('ingredientInput') as HTMLInputElement
		).value;
		if (newIngredient) {
			setIngredientsList([...ingredientsList, newIngredient]);
			(
				document.getElementById('ingredientInput') as HTMLInputElement
			).value = '';
		}
	};

	const handleRemoveIngredient = (indexToRemove: number) => {
		setIngredientsList(
			ingredientsList.filter((_, index) => index !== indexToRemove),
		);
	};

	const mutation = useMutation(createRecipe);

	const onSubmit = (data: RecipeFormData) => {
		const updatedData = {
			...data,
			ingredients: ingredientsList,
		};
		console.log(updatedData);
		mutation.mutate(updatedData);
		navigate('/');
	};

	// On remplit le champ userOwner avec l'ID de l'utilisateur connecté
	const userID = useGetUserID();
	if (userID) {
		register('userOwner', { value: userID }); // Pré-remplir le champ userOwner
	}

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error}</div>}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx(
					'flex h-full w-full flex-col items-center justify-center gap-6 p-10',
					{
						'bg-gray-100': mutation.isLoading,
						'bg-red-200': mutation.isError,
						'bg-green-200': mutation.isSuccess,
					},
				)}
			>
				<h1
					className={clsx('mb-4 text-3xl font-bold', {
						'text-red-500': mutation.isError,
						'text-green-500': mutation.isSuccess,
					})}
				>
					Create Recipe
				</h1>

				{/* Name */}
				<div
					className={clsx('flex flex-col items-center justify-center', {
						'bg-red-200': errors.recipeName,
					})}
				>
					<label
						htmlFor='recipeName'
						className={clsx('rounded px-4 py-2 text-xl font-bold', {
							'bg-red-200': errors.recipeName,
						})}
					>
						Name
					</label>
					<input
						id='recipeName'
						{...register('recipeName')}
						className={clsx('rounded bg-white px-4 py-2', {
							'bg-red-200': errors.recipeName,
						})}
					/>
					{errors.recipeName && <span>{errors.recipeName.message}</span>}
				</div>

				{/* Ingredients */}
				<div
					className={clsx(
						'flex flex-col items-center justify-center gap-4',
						{
							'bg-red-200': errors.ingredients,
						},
					)}
				>
					<label
						htmlFor='ingredientInput'
						className={clsx('rounded px-4 py-2 text-xl font-bold', {
							'bg-red-200': errors.ingredients,
						})}
					>
						Ingredients
					</label>
					<input
						id='ingredientInput'
						type='text'
						placeholder='Enter ingredient and click Add'
						className={clsx('rounded bg-white px-4 py-2', {
							'bg-red-200': errors.ingredients,
						})}
					/>
					<button
						type='button'
						onClick={addIngredient}
						className={clsx(
							'rounded bg-blue-400 px-4 py-2 font-bold text-white hover:bg-blue-700',
							{
								'bg-red-500 hover:bg-red-700': errors.ingredients,
							},
						)}
					>
						Add
					</button>
					<div className='grid grid-cols-3 gap-4'>
						{ingredientsList.map((ingredient, index) => (
							<div
								key={index}
								className={clsx(
									'flex w-full items-center justify-between gap-8 rounded bg-gray-200 px-4 py-2',
									{
										'bg-red-200': errors.ingredients,
									},
								)}
							>
								{ingredient}
								<button
									className={clsx(
										'rounded bg-gray-200 p-1 text-2xl font-bold text-black',
										'hover:bg-white hover:text-red-600',
										{
											'bg-red-500 hover:bg-red-700':
												errors.ingredients,
										},
									)}
									onClick={() => handleRemoveIngredient(index)}
								>
									&times;
								</button>
							</div>
						))}
					</div>
					{errors.ingredients && (
						<span>{(errors.ingredients as any).message}</span>
					)}
				</div>

				{/* Instructions */}
				<div
					className={clsx('flex flex-col items-center justify-center', {
						'bg-red-200': errors.instructions,
					})}
				>
					<label
						htmlFor='instructions'
						className={clsx('rounded px-4 py-2 text-xl font-bold', {
							'bg-red-200': errors.instructions,
						})}
					>
						Instructions
					</label>
					<input
						id='instructions'
						{...register('instructions')}
						type='text'
						placeholder='instruction1,instruction2,instruction3'
						className={clsx('rounded bg-white px-4 py-2', {
							'bg-red-200': errors.instructions,
						})}
					/>
					{errors.instructions && (
						<span>{(errors.instructions as any).message}</span>
					)}
				</div>

				{/* Image */}
				<div
					className={clsx('flex flex-col items-center justify-center', {
						'bg-red-200': errors.image,
					})}
				>
					<label
						htmlFor='image'
						className={clsx('rounded px-4 py-2 text-xl font-bold', {
							'bg-red-200': errors.image,
						})}
					>
						Image URL
					</label>
					<input
						id='image'
						{...register('image')}
						type='url'
						className={clsx('rounded bg-white px-4 py-2', {
							'bg-red-200': errors.image,
						})}
					/>
					{errors.image && <span>{errors.image.message}</span>}
				</div>

				{/* Cooking Time */}
				<div
					className={clsx('flex flex-col items-center justify-center', {
						'bg-red-200': errors.cookingTime,
					})}
				>
					<label
						htmlFor='cookingTime'
						className={clsx('rounded px-4 py-2 text-xl font-bold', {
							'bg-red-200': errors.cookingTime,
						})}
					>
						Cooking Time (minutes)
					</label>
					<input
						id='cookingTime'
						{...register('cookingTime')}
						type='number'
						min='1'
						className={clsx('rounded bg-white px-4 py-2', {
							'bg-red-200': errors.cookingTime,
						})}
					/>
					{errors.cookingTime && <span>{errors.cookingTime.message}</span>}
				</div>

				<button
					type='submit'
					disabled={mutation.isLoading}
					className={clsx(
						'rounded bg-blue-500 px-6 py-4 font-bold text-white shadow-lg',
						'transition duration-200 hover:bg-blue-700 hover:shadow-none',
					)}
				>
					{mutation.isLoading ? 'Creating...' : 'Create Recipe'}
				</button>
			</form>
		</>
	);
};

export default CreateRecipe;
