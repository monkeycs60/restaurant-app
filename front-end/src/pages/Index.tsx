import { motion } from 'framer-motion';
import Starter from '../components/Index/Starter';
import HeroBanner from '../components/Index/HeroBanner';
import Concept from '../components/Index/Concept';
import TransitionTitle from '../components/TransitionTitle';
import Dessert from '../components/Index/Dessert';
import BookNow from '../components/Index/BookNow';
import MainCourse from '../components/Index/MainCourse';
const Index = () => {
	return (
		<motion.div className='banner-bg'>
			<HeroBanner />
			<TransitionTitle title='Concept' position='right' />
			<Concept />
			<TransitionTitle title='Menu' position='left' />
			<Starter />
			<MainCourse />
			<Dessert />
			<BookNow />
		</motion.div>
	);
};

export default Index;
