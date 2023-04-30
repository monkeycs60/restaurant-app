import { motion } from 'framer-motion';

const Loader = () => {
	const animateLetters = (text: string) => {
		const duration = 0.3; // Durée de l'animation en secondes
		const delay = 0.11; // Délai entre les animations en secondes
		const colorVariants = {
			initial: { color: 'black' },
			animate: (i: number) => ({
				color: 'white',
				textShadow: '1px 1px 4px rgba(255, 255, 255, 0.5)',
				transition: { duration, delay: i * delay },
			}),
		};

		return text.split('').map((letter, i) => (
			<motion.span
				key={i}
				variants={colorVariants}
				initial='initial'
				animate={`animate`}
				custom={i}
			>
				{letter}
			</motion.span>
		));
	};
	return (
		<div className='loader-bg flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-red-500 text-3xl text-white'>
			<h1 className='font-handwriting text-6xl xl:text-8xl'>
				{animateLetters('chiaroscuro')}
			</h1>
		</div>
	);
};

export default Loader;
