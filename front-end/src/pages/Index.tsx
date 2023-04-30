import { motion } from 'framer-motion';
import Starter from '../components/Index/Starter';
import HeroBanner from '../components/Index/HeroBanner';
import Concept from '../components/Index/Concept';
import TransitionTitle from '../components/TransitionTitle';
import Dessert from '../components/Index/Dessert';
import BookNow from '../components/Index/BookNow';
import MainCourse from '../components/Index/MainCourse';
import Team from '../components/Index/Team';
import PracticalInformations from '../components/Index/PracticalInformations';
import FeaturedIn from '../components/Index/FeaturedIn';
const Index = () => {
	return (
		<motion.div className='banner-bg fade-in-home'>
			<HeroBanner />
			<TransitionTitle title='Concept' position='right' />
			<Concept />
			<TransitionTitle title='Menu' position='left' />
			<Starter />
			<MainCourse />
			<Dessert />
			<BookNow />
			<TransitionTitle title='Meet the team' position='right' />
			<Team />
			<TransitionTitle title='Informations' position='left' />
			<PracticalInformations />
			<TransitionTitle title='As featured in' position='right' />
			<FeaturedIn />
		</motion.div>
	);
};

export default Index;
