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
import HeroPage from './Sections/HeroPage';
import ConceptPage from './Sections/ConceptPage';
const Index = () => {
	return (
		<motion.div className='banner-bg fade-in-home'>
			<HeroPage />
			<ConceptPage />
			<Starter />
			<MainCourse />
			<Dessert />
			<BookNow />
			<Team />
			<PracticalInformations />
			<FeaturedIn />
		</motion.div>
	);
};

export default Index;
