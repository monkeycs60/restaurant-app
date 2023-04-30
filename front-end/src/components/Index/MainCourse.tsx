import { useCallback, useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useInView } from 'framer-motion';
import hat from '../../assets/hat-party.png';
import teddy from '../../assets/teddy.png';
import childrenPlate from '../../assets/children-plate.png';
import plane from '../../assets/plane.png';
import globe from '../../assets/globe.png';
import runway from '../../assets/runway.png';

const MainCourse = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	const containerRef = useRef<HTMLElement | null>(null);
	const scrollYProgress = useMotionValue(0);
	const translateYTeddy = useTransform(scrollYProgress, [0.5, 1], [0, 290]);
	const rotateZ = useTransform(scrollYProgress, [0.5, 1], [0, 160]);
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
			<div className='mt-[20vh] flex h-full w-full flex-row-reverse'>
				<div className='relative h-full w-1/2' ref={setRef}>
					<motion.img
						src={plane}
						alt='chef'
						width={250}
						className='absolute left-[175px] top-[0px] z-10'
						style={{
							translateY: translateYTeddy,
						}}
					/>
					<motion.img
						src={globe}
						alt='cloche'
						width={200}
						className='absolute left-[200px] top-[380px] z-30'
						style={{
							rotateZ: rotateZ,
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
								Main course
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
								Epicurean expedition to distant destinations
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
								A touch of spice, a zest of adventure, a hint of thrill,
								and an immense change of scenery.
							</motion.p>
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default MainCourse;
