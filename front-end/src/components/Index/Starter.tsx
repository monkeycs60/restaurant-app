import { useCallback, useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useInView } from 'framer-motion';
import hammer from '../../assets/hammer.png';
import snorkel from '../../assets/snorkel.png';

const Starter = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	const containerRef = useRef<HTMLElement | null>(null);
	const scrollYProgress = useMotionValue(0);
	const translateYTeddy = useTransform(scrollYProgress, [0.5, 1], [0, 170]);
	const rotateY = useTransform(scrollYProgress, [0.5, 1], [0, 60]);
	const translateX = useTransform(scrollYProgress, [0.5, 1], [0, 100]);

	const showText = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 0.3, 1]);

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
		<motion.div className='relative h-[135vh] w-full p-8'>
			<h3 className='font-classic w-full text-center text-xl text-amber-400'>
				Our clients are unique, and so is our menu.
			</h3>
			<div className='mt-[20vh] flex h-full w-full'>
				<div className='relative h-full w-1/2' ref={setRef}>
					<motion.img
						src={hammer}
						alt='chef'
						width={90}
						className='absolute left-[40px] top-[100px] z-10'
						style={{
							translateX: translateX,
							translateY: translateYTeddy,
							rotateZ: rotateY,
						}}
					/>
					<motion.img
						src={snorkel}
						alt='cloche'
						width={200}
						className='absolute left-[200px] top-[340px] z-30'
					/>
				</div>
				<div className='relative h-full w-1/2' ref={viewRef}>
					{showText && (
						<motion.div className=''>
							<motion.h3
								className='font-handwriting absolute top-[240px] text-4xl text-amber-500'
								style={{
									opacity: showText,
								}}
							>
								Starter
							</motion.h3>
							<motion.h4
								className='font-classic absolute top-[400px] text-xl text-white'
								style={{
									opacity: showText,
								}}
								initial={{ x: 100 }}
								animate={isInView ? { x: 0 } : { x: 100 }}
								transition={{ duration: 2 }}
							>
								Philosophizing with a snorkel
							</motion.h4>
							<motion.p
								className='font-classic absolute top-[430px] text-sm text-white'
								style={{
									opacity: showText,
								}}
								initial={{ x: 100 }}
								animate={isInView ? { x: 0 } : { x: 100 }}
								transition={{ duration: 2 }}
							>
								Deconstructed exploration of a marine ecosystem. Snorkel
								included.
							</motion.p>
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Starter;
