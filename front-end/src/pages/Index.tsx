import { motion } from 'framer-motion';
import ChefPresentation from '../components/Index/ChefPresentation';
import HeroBanner from '../components/Index/HeroBanner';
import Concept from '../components/Index/Concept';
import TransitionTitle from '../components/TransitionTitle';
const Index = () => {
	return (
		<motion.div className='banner-bg'>
			<HeroBanner />
			<TransitionTitle title='Concept' position='right' />
			<Concept />
			<TransitionTitle title='Le Chef' position='left' />
			<ChefPresentation />
		</motion.div>
	);
};

export default Index;
