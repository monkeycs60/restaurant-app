import clsx from 'clsx';
import darkPeople from '../assets/people-dark.png';
import { motion } from 'framer-motion';
import { isInViewProps } from '../pages/Index/Sections/Concept';

const QuestionMarkGrid = ({ isInView }: isInViewProps) => {
	return (
		<div className='grid-container h-full w-[40%] p-[1vw] xl:p-[8vw]'>
			<motion.div
				initial={{
					opacity: 0,
					y: -100,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
				transition={{ duration: 1.7 }}
				className='relative col-start-1 row-start-3 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					x: -80,
				}}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
				transition={{ duration: 1.4 }}
				className='relative col-start-1 row-start-1 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: 50,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 1.6 }}
				className='relative col-start-2 row-start-1 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					x: -20,
				}}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
				transition={{ duration: 1.7 }}
				className='relative col-start-3 row-start-1 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
				transition={{ duration: 1.2 }}
				className='relative col-start-4 row-start-1 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: 60,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
				transition={{ duration: 1.9 }}
				className='relative col-start-1 row-start-2 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: 90,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
				transition={{ duration: 1.3 }}
				className='relative col-start-4 row-start-2 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					x: 70,
				}}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
				transition={{ duration: 1.8 }}
				className='relative col-start-4 row-start-3 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: -50,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
				transition={{ duration: 1.4 }}
				className='relative col-start-3 row-start-5 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					x: 30,
				}}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
				transition={{ duration: 1.8 }}
				className='relative col-start-4 row-start-4 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: 70,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
				transition={{ duration: 1.6 }}
				className='relative col-start-4 row-start-5 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					x: 80,
				}}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
				transition={{ duration: 1.4 }}
				className='relative col-start-2 row-start-5 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: -50,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
				transition={{ duration: 1.9 }}
				className='relative col-start-2 row-start-6 h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 1.5 }}
				className='grid-third-last-position relative h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					x: 40,
				}}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
				transition={{ duration: 1.7 }}
				className='grid-pre-last-position relative h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx('absolute inset-0 h-full w-full object-cover')}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: -100,
				}}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
				transition={{ duration: 2 }}
				className='grid-last-position relative h-full w-full'
			>
				<img
					src={darkPeople}
					alt='Concept Mystère'
					className={clsx(
						'absolute inset-0 h-full w-full rounded-full object-cover',
					)}
				/>
			</motion.div>
		</div>
	);
};

export default QuestionMarkGrid;
