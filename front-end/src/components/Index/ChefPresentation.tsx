import { useCallback, useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import chef from '../../assets/chef2.png';
import bell from '../../assets/bell1.png';
import plate from '../../assets/plate1.png';

const ChefPresentation = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const scrollYProgress = useMotionValue(0);
	const translateYChef = useTransform(scrollYProgress, [0.6, 1], [0, 180]);
	const translateYPlate = useTransform(scrollYProgress, [0.6, 1], [0, 300]);

	const showText = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 0.7, 1]);

	const setRef = useCallback((node: any) => {
		if (node !== null) {
			containerRef.current = node;
		}
	}, []);

	useEffect(() => {
		if (!containerRef.current) return;
		const handleScroll = () => {
			if (!containerRef.current) return;

			const { top, height } = containerRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			if (top < windowHeight && top + height > 0) {
				const progress = 1 - top / windowHeight;
				scrollYProgress.set(progress);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [containerRef, scrollYProgress]);

	return (
		<motion.div ref={setRef} className='relative h-[100vh] w-full'>
			<motion.img
				src={bell}
				alt='cloche'
				width={340}
				className='absolute left-[36px] top-[12px] z-30'
			/>
			<motion.img
				src={chef}
				alt='chef'
				width={130}
				className='absolute left-[146px] top-[160px] z-10'
				style={{
					translateY: translateYChef,
				}}
			/>
			<motion.img
				src={plate}
				alt='plate'
				width={300}
				className='absolute left-[64px] top-[96px] z-20'
				style={{
					translateY: translateYPlate,
				}}
			/>
			{showText && (
				<motion.div
					className='absolute left-[584px] top-[346px] z-10 w-[400px] bg-red-800 p-4 text-left'
					style={{
						opacity: showText,
					}}
					initial={{ x: 100 }}
					animate={{ x: 0 }}
					transition={{ duration: 2 }}
				>
					<p className='font-classic text-lg'>
						Chef Alexandre Bucoli, artisan cuisinier depuis trois
						générations, vous accompagne dans cette expérience hors du
						commun.
					</p>
				</motion.div>
			)}
		</motion.div>
	);
};

export default ChefPresentation;
