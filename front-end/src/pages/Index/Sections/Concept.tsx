import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import QuestionMarkGrid from '../../../components/QuestionMarkGrid';
import Pitch from '../../../components/Pitch';

export type isInViewProps = {
	isInView: boolean;
};
const Concept = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<>
			<motion.div
				className='relative flex w-[100vw] flex-col p-8 xl:h-[100vh] '
				ref={ref}
			>
				<div className='flex h-full w-full flex-col items-center justify-between xl:flex-row'>
					<QuestionMarkGrid isInView={isInView} />
					<Pitch isInView={isInView} />
				</div>
			</motion.div>
		</>
	);
};

export default Concept;
