import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import useCleanStorageOnLoad from './hooks/useCleanStorageOnLoad';
import Index from './pages/Index/Index';

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
