import { motion } from 'framer-motion';
import BookNow from './Sections/BookNow';
import Team from './Sections/ChefCommitment';
import PracticalInformations from './Sections/PracticalInformations';
import FeaturedIn from './Sections/FeaturedIn';
import HeroPage from './Sections/HeroPage';
import ConceptPage from './Sections/ConceptPage';
import MenuPresentation from './Sections/MenuPresentation';
const Index = () => {
	return (
		<motion.div className='banner-bg fade-in-home'>
			<HeroPage />
			<ConceptPage />
			<MenuPresentation />
			<Team />
			<PracticalInformations />
		</motion.div>
	);
};

export default Index;
