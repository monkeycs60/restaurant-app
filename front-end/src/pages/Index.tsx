import { motion } from 'framer-motion';
import ChefPresentation from '../components/Index/ChefPresentation';
import HeroBanner from '../components/Index/HeroBanner';
import Concept from '../components/Index/Concept';
const Index = () => {
	return (
		<motion.div className='banner-bg'>
			<HeroBanner />
			<Concept />
			<ChefPresentation />
		</motion.div>
	);
};

export default Index;
