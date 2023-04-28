import { useCallback, useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useInView } from 'framer-motion';
import hat from '../../assets/hat-party.png';
import teddy from '../../assets/teddy.png';
import childrenPlate from '../../assets/children-plate.png';

const MainCourse = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	const containerRef = useRef<HTMLElement | null>(null);
	const scrollYProgress = useMotionValue(0);
	const translateYTeddy = useTransform(scrollYProgress, [0.5, 1], [0, 180]);
	const translateYChildrenPlate = useTransform(
		scrollYProgress,
		[0.5, 1],
		[0, 380],
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
				Hungry for more?
			</h3>
			<div className='mt-[20vh] flex h-full w-full'>
				<div className='relative h-full w-1/2' ref={setRef}>
					<motion.img
						src={hat}
						alt='cloche'
						width={200}
						className='absolute left-[200px] top-[10px] z-30'
					/>
					<motion.img
						src={teddy}
						alt='chef'
						width={130}
						className='absolute left-[240px] top-[150px] z-10'
						style={{
							translateY: translateYTeddy,
						}}
					/>
					<motion.img
						src={childrenPlate}
						alt='plate'
						width={300}
						className='absolute left-[150px] top-[150px] z-20'
						style={{
							translateY: translateYChildrenPlate,
						}}
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
								Linear Regression
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

export default MainCourse;
