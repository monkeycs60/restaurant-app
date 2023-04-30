import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Auth from './pages/Auth';
import CreateRecipes from './pages/CreateRecipes';
import SavedRecipes from './pages/SavedRecipes';
import Layout from './components/Layout/Layout';
import Index from './pages/Index';
import Loader from './components/Loader';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1300);

		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className='fadeOut'>
					<Layout>
						<Routes>
							<Route path='/' element={<Index />} />
							<Route path='/homepage' element={<HomePage />} />
							<Route path='/auth' element={<Auth />} />
							<Route
								path='/create-recipes'
								element={<CreateRecipes />}
							/>
							<Route path='/saved-recipes' element={<SavedRecipes />} />
						</Routes>
					</Layout>
				</div>
			)}
		</>
	);
}
export default App;
