import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Index from './pages/Index';

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
			<Layout>
				<Routes>
					<Route path='/' element={<Index />} />
				</Routes>
			</Layout>
		</>
	);
}
export default App;
