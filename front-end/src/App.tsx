import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Index from './pages/Index';
import useCleanStorageOnLoad from './hooks/useCleanStorageOnLoad';

function App() {
	useCleanStorageOnLoad();
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
