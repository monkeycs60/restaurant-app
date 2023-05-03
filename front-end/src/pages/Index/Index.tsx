import { motion } from 'framer-motion';
import Starter from './Sections/Starter';
import HeroBanner from './Sections/HeroBanner';
import Concept from './Sections/Concept';
import TransitionTitle from '../../components/TransitionTitle';
import Dessert from './Sections/Dessert';
import BookNow from './Sections/BookNow';
import MainCourse from './Sections/MainCourse';
import Team from './Sections/Team';
import PracticalInformations from './Sections/PracticalInformations';
import FeaturedIn from './Sections/FeaturedIn';
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
			<TransitionTitle title='The team' position='right' />
			<Team />
			<TransitionTitle title='Informations' position='left' />
			<PracticalInformations />
			<TransitionTitle title='As featured in' position='right' />
			<FeaturedIn />
		</motion.div>
	);
};

export default Index;
