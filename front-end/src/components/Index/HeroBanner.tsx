import blindfold from '../../assets/blindfold2.png';
import logo from '../../assets/logo2.png';
import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
const HeroBanner = () => {
	const [opacity, setOpacity] = useState(false);
	const [fadeIn, setFadeIn] = useState(false);
	const initialMousePosition = useRef({ x: 0, y: 0 });

	const distance = (point1: any, point2: any) => {
		return Math.sqrt(
			Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2),
		);
	};

	const handleMouseMove = (event: MouseEvent) => {
		const currentMousePosition = { x: event.clientX, y: event.clientY };
		let threshold = 700; // Seuil de distance en pixels
		if (window.innerWidth > 1700) {
			threshold = 1200;
		}
		console.log(
			'différence: ' +
				distance(initialMousePosition.current, currentMousePosition),
		);

		if (
			distance(initialMousePosition.current, currentMousePosition) >
			threshold
		) {
			setOpacity(true);
			setFadeIn(true);
		}
	};

	const handleMouseHover = () => {
		setOpacity(true);
		setFadeIn(true);
	};
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setOpacity(true);
			setFadeIn(true);
		}
	};

	useEffect(() => {
		const setInitialPosition = (event: MouseEvent) => {
			initialMousePosition.current = {
				x: event.clientX,
				y: event.clientY,
			};
		};

		window.addEventListener('mousemove', setInitialPosition, {
			once: true,
		});
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mousemove', setInitialPosition);
		};
	}, []);
	return (
		<div className='banner-bg relative h-[100vh] w-full p-4'>
			<div className='m-8 flex items-center justify-between'>
				<div className='mt-8 flex flex-col'>
					<h1 className='font-secondary font-handwriting text-9xl text-gray-300'>
						chiaroscuro
					</h1>
					<div className='flex justify-end'>
						<h2 className='font-classic text-lg text-amber-400'>
							Taste the experience, not just the food.
						</h2>
					</div>
				</div>
				<button className='fixed right-12 mr-8'>
					<img src={logo} alt='logo' className='w-24 cursor-pointer' />
				</button>
			</div>
			<div className='-mt-12 flex items-center justify-around xl:-mt-24 2xl:-mt-4'>
				<div className='flex w-1/3 flex-col items-center justify-center gap-8 p-4'>
					<p
						onMouseEnter={handleMouseHover}
						className={clsx(
							'firstElement border-hero-text font-classic rounded-lg bg-amber-500/30 p-8 text-2xl leading-relaxed tracking-wide text-white',
							{
								// 'opacity-100': !opacity,
								// 'opacity-0': opacity,
								'fade-out': opacity,
							},
						)}
					>
						Une expérience unique à vivre au moins une fois dans sa vie,
						êtes-vous prêts à sauter à l'aventure ?
					</p>
					<p
						className={clsx(
							'border-hero-text font-classic translate-x-2 rounded-lg bg-amber-500/30 p-8 text-2xl leading-relaxed tracking-wide text-white',
							{
								'opacity-100': opacity,
								'opacity-0': !opacity,
								'fade-in': fadeIn,
							},
						)}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci a vitae, excepturi soluta sed esse?
					</p>
					<p
						className={clsx(
							'border-hero-text font-classic translate-x-8 rounded-lg bg-amber-500/30 p-8 text-2xl leading-relaxed tracking-wide text-white',
							{
								'opacity-100': opacity,
								'opacity-0': !opacity,
								'fade-in-two': fadeIn,
							},
						)}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci a vitae, excepturi soluta sed esse?
					</p>
					<p
						className={clsx(
							'border-hero-text font-classic -translate-x-8 rounded-lg bg-amber-500/30 p-8 text-2xl leading-relaxed tracking-wide text-white hover:opacity-100',
							{
								'opacity-100': opacity,
								'opacity-0': !opacity,
								'fade-in-three': fadeIn,
							},
						)}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci a vitae, excepturi soluta sed esse?
					</p>
				</div>
				<div className='relative flex h-auto  w-1/3 flex-col'>
					<img
						src={blindfold}
						alt='femme yeux bandés'
						className='z-0 w-[100%]'
					/>
					<button className='font-handwriting z-20 -mt-16 cursor-pointer rounded-lg bg-white px-[2vw] py-[1.5vh] text-2xl font-bold text-black hover:bg-black hover:text-white'>
						Embark on a sensory journey
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
