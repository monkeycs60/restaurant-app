import blindfold from '../../assets/blindfold2.png';
import logo from '../../assets/logo2.png';
import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
const HeroBanner = () => {
	return (
		<div className='banner-bg relative h-[100vh] w-full p-4'>
			<div className='m-8 flex items-center justify-between'>
				<div className='mt-8 flex flex-col'>
					<h1 className='font-secondary font-handwriting text-9xl text-gray-300'>
						chiaroscuro
					</h1>
					<div className='flex justify-end'>
						<h2 className='font-classic text-xl text-amber-400'>
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
					<motion.p
						className={clsx(
							'firstElement border-hero-text font-classic rounded-lg bg-amber-500/30 p-8 text-2xl leading-relaxed tracking-wide text-white',
						)}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 5 }}
						transition={{ duration: 2.3 }}
					>
						Une expérience unique à vivre au moins une fois dans sa vie,
						êtes-vous prêts à sauter à l'aventure ?
					</motion.p>
					<motion.p
						className={clsx(
							'border-hero-text font-classic translate-x-2 rounded-lg p-8 text-2xl leading-relaxed tracking-wide text-white',
						)}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: -15 }}
						transition={{ duration: 1.7 }}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci a vitae, excepturi soluta sed esse?
					</motion.p>
					<motion.p
						className={clsx(
							'border-hero-text font-classic translate-x-8 rounded-lg p-8 text-2xl leading-relaxed tracking-wide text-white',
						)}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 35 }}
						transition={{ duration: 2.1 }}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci a vitae, excepturi soluta sed esse?
					</motion.p>
					<motion.p
						className={clsx(
							'border-hero-text font-classic -translate-x-8 rounded-lg  p-8 text-2xl leading-relaxed tracking-wide text-white hover:opacity-100',
						)}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 5 }}
						transition={{ duration: 1.8 }}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci a vitae, excepturi soluta sed esse?
					</motion.p>
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
