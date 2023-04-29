import { useCallback, useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useInView } from 'framer-motion';
import pastryCover from '../../assets/pastry-cover.png';
import ardoise from '../../assets/ardoise.png';
import cacao from '../../assets/cacao2.png';

const Dessert = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	const containerRef = useRef<HTMLElement | null>(null);
	const scrollYProgress = useMotionValue(0);
	const translateYTeddy = useTransform(scrollYProgress, [0.5, 1], [0, 140]);
	const translateYChildrenPlate = useTransform(
		scrollYProgress,
		[0.5, 1],
		[0, 300],
	);

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
		<motion.div className='relative h-[140vh] w-full p-8'>
			<h3 className='font-classic w-full text-center text-xl text-amber-400'>
				The grand finale!
			</h3>
			<div className='mt-[20vh] flex h-full w-full'>
				<div className='relative h-full w-1/2' ref={setRef}>
					<motion.img
						src={pastryCover}
						alt='cloche'
						width={230}
						className='absolute left-[200px] top-[10px] z-30'
					/>
					<motion.img
						src={cacao}
						alt='chef'
						width={50}
						className='absolute left-[290px] top-[100px] z-40'
						style={{
							translateY: translateYTeddy,
						}}
					/>
					<motion.img
						src={ardoise}
						alt='plate'
						width={300}
						className='absolute left-[180px] top-[50px] z-20'
						style={{
							translateY: translateYChildrenPlate,
						}}
					/>
				</div>
				<div className='relative h-full w-1/2' ref={viewRef}>
					{showText && (
						<motion.div className=''>
							<motion.h3
								className='font-handwriting absolute top-[40px] text-4xl text-amber-500'
								style={{
									opacity: showText,
								}}
							>
								Dessert
							</motion.h3>
							<motion.h4
								className='font-classic absolute top-[200px] text-xl text-white'
								style={{
									opacity: showText,
								}}
								initial={{ x: 100 }}
								animate={isInView ? { x: 0 } : { x: 100 }}
								transition={{ duration: 2 }}
							>
								Ca-Chaos
							</motion.h4>
							<motion.p
								className='font-classic absolute top-[230px] text-sm text-white'
								style={{
									opacity: showText,
								}}
								initial={{ x: 100 }}
								animate={isInView ? { x: 0 } : { x: 100 }}
								transition={{ duration: 2 }}
							>
								Naivety, innocence, wonder, nostalgia, laughter,
								cherished memories and Brussels sprouts.
							</motion.p>
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Dessert;
