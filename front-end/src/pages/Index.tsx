import { motion } from 'framer-motion';
import ChefPresentation from '../components/Index/ChefPresentation';
import HeroBanner from '../components/Index/HeroBanner';
const Index = () => {
	return (
		<motion.div className='bg-red-300'>
			<HeroBanner />
			<ChefPresentation />
		</motion.div>
	);
};

export default Index;
