import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import QuestionMarkGrid from '../QuestionMarkGrid';
import Pitch from '../Pitch';

export type isInViewProps = {
	isInView: boolean;
};
const Concept = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<>
			<div className='mb-[10vh] mt-[16vh] flex h-[15vh] items-center justify-center'>
				<div className='concept-bg relative h-full w-full'>
					<h2 className='font-handwriting absolute -bottom-2 right-[10%] text-end text-8xl text-gray-300'>
						Concept
					</h2>
				</div>
			</div>
			<motion.div
				className='relative flex h-[100vh] w-[100vw] flex-col p-8 '
				ref={ref}
			>
				<div className='flex h-full w-full justify-between'>
					<QuestionMarkGrid isInView={isInView} />
					<Pitch isInView={isInView} />
				</div>
			</motion.div>
		</>
	);
};

export default Concept;
