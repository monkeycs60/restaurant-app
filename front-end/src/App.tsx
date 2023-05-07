import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
							<Route
								path='/michel'
								element={
									<div className='new-banner flex h-screen w-screen items-center justify-center'>
										<h1 className='font-handwriting text-6xl'>
											
										</h1>
									</div>
								}
							/>
						</Routes>
					</Layout>
				</div>
			)}
		</>
	);
}
export default App;
