import { motion } from 'framer-motion';
import PracticalInformations from './Sections/PracticalInformations';
import HeroPage from './Sections/HeroPage';
import ConceptPage from './Sections/ConceptPage';
import MenuPresentation from './Sections/MenuPresentation';
import ChefCommitment from './Sections/ChefCommitment';
const Index = () => {
	return (
		<motion.div className='banner-bg fade-in-home max-w-[100%] lg:max-w-none'>
			<HeroPage />
			<ConceptPage />
			<MenuPresentation />
			<ChefCommitment />
			<PracticalInformations />
		</motion.div>
	);
};

export default Index;
