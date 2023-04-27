import blindfold from '../../assets/blindfold3.png';
import logo from '../../assets/logo5.png';
import clsx from 'clsx';
import { motion } from 'framer-motion';
const HeroBanner = () => {
	return (
		<div className='banner-bg relative h-[100vh] w-full p-4'>
			<div className='m-8 flex items-center justify-between'>
				<div className='mt-8 flex flex-col'>
					<h1 className='font-handwriting text-9xl text-gray-300'>
						chiaroscuro
					</h1>
					<div className='flex justify-end'>
						<h2 className='font-classic text-xl text-amber-400'>
							Taste the experience, not just the food.
						</h2>
					</div>
				</div>
				<button className='fixed right-12 z-50 mr-8'>
					<img src={logo} alt='logo' className='w-40 cursor-pointer' />
				</button>
			</div>
			<div className='-mt-12 flex h-[60vh] items-center justify-around xl:-mt-24 2xl:-mt-4'>
				<div className='flex w-1/3 flex-col items-center justify-center gap-12 p-4'>
					<motion.p
						className={clsx(
							'firstElement border-hero-text font-classic rounded-lg bg-amber-500/40 p-8 text-4xl leading-relaxed tracking-wide text-white',
						)}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 160 }}
						transition={{ duration: 1.7 }}
					>
						Ready for the{' '}
						<span className='font-handwriting text-5xl'>
							extraordinary?
						</span>
					</motion.p>
					<motion.p
						className={clsx(
							'border-hero-text font-classic translate-x-2 rounded-lg bg-amber-500/30 p-8 text-2xl leading-relaxed tracking-wide text-white',
						)}
						initial={{
							opacity: 0,
							x: 100,
							backgroundColor: 'rgb(245 158 11 / 0.0)',
						}}
						animate={{
							opacity: 1,
							x: -15,
							backgroundColor: 'rgb(245 158 11 / 0.4)',
						}}
						transition={{ duration: 1.3 }}
					>
						Embark on an unprecedented{' '}
						<span className='font-classic text-4xl underline underline-offset-4'>
							culinary adventure
						</span>{' '}
						as you savor a meal in the captivating embrace of
					</motion.p>

					<motion.p
						className={clsx(
							'font-classic fade-in-text border-hero-text translate-x-8 rounded-lg  p-16 text-5xl font-bold uppercase leading-relaxed tracking-widest text-white',
						)}
					>
						total
						<span className='fade-in-span mx-6 text-6xl'>darkness</span>
					</motion.p>
				</div>
				<div className='relative flex h-auto w-1/3 flex-col'>
					<img
						src={blindfold}
						alt='femme yeux bandés'
						className='z-0 aspect-square'
					/>

					<button className='custom-animated-button font-handwriting z-20 -mt-20 w-full cursor-pointer rounded-lg  border-transparent px-[2vw] py-[2vh] text-4xl font-bold uppercase text-black shadow-md transition-all duration-300 ease-in-out hover:scale-105  hover:text-white hover:shadow-lg'>
						Embark on a sensory journey
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
