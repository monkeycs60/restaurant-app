import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			{/* <Navbar /> */}
			<main className='h-full w-full bg-pink-600'> {children} </main>
			<Footer />
		</>
	);
};

export default Layout;
