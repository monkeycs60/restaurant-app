import { motion } from 'framer-motion';
import Starter from '../components/Index/Starter';
import HeroBanner from '../components/Index/HeroBanner';
import Concept from '../components/Index/Concept';
import TransitionTitle from '../components/TransitionTitle';
import Dish from '../components/Index/MainCourse';
import Dessert from '../components/Index/Dessert';
const Index = () => {
	return (
		<motion.div className='banner-bg'>
			<HeroBanner />
			<TransitionTitle title='Concept' position='right' />
			<Concept />
			<TransitionTitle title='Menu' position='left' />
			<Starter />
			<Dish />
			<Dessert />
		</motion.div>
	);
};

export default Index;
