import blindfold from '../../assets/blindfold3.png';
import logo from '../../assets/logo5.png';
import clsx from 'clsx';
import { motion } from 'framer-motion';
const HeroBanner = () => {
	return (
		<div className='banner-bg relative h-[100vh] w-full p-4'>
			<div
				className={clsx(
					'm-2 flex items-center justify-between',
					'xl:m-4',
					'3xl:m-8',
				)}
			>
				<div className={clsx('mt-2 flex flex-col', 'xl:mt-4', '3xl:mt-8')}>
					<h1
						className={clsx(
							'font-handwriting text-5xl text-gray-300',
							'xl:text-8xl',
							'3xl:text-9xl',
						)}
					>
						chiaroscuro
					</h1>
					<div className='flex justify-end'>
						<h2
							className={clsx(
								'font-classic text-lg text-amber-400',
								'3xl:text-xl',
							)}
						>
							Taste the experience, not just the food.
						</h2>
					</div>
				</div>
				<button className='fixed right-12 z-50 mr-8'>
					<img
						src={logo}
						alt='logo'
						className={clsx('w-20 cursor-pointer', 'xl:w-32', '3xl:w-40')}
					/>
				</button>
			</div>
			<div
				className={clsx(
					'-mt-12 flex items-center justify-around',
					'xl:-mt-4',
					'3xl:-mt-4',
				)}
			>
				<div
					className={clsx(
						'flex w-1/3 flex-col items-center justify-center gap-4 p-4',
						'xl:mt-12 xl:gap-8',
						'3xl:gap-12 3xl:mt-6',
					)}
				>
					<motion.p
						className={clsx(
							'font-classic rounded-lg bg-amber-500/40 p-4 text-2xl leading-relaxed tracking-wide text-white',
							'xl:text-3xl',
							'3xl:p-8 3xl:text-4xl',
						)}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 160 }}
						transition={{ duration: 1.7 }}
					>
						Ready for the{' '}
						<span
							className={clsx(
								'font-handwriting text-3xl',
								'3xl:text-5xl',
							)}
						>
							extraordinary?
						</span>
					</motion.p>
					<motion.p
						className={clsx(
							'font-classic translate-x-2 rounded-lg bg-amber-500/30 p-6 text-2xl leading-relaxed tracking-wide text-white',
							'xl:text-xl',
							'3xl:text-2xl 3xl:p-8',
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
						<span
							className={clsx(
								'font-classic text-4xl underline underline-offset-0',
								'xl:text-2xl xl:underline-offset-2',
								'3xl:text-4xl 3xl:underline-offset-4',
							)}
						>
							culinary adventure
						</span>{' '}
						as you savor a meal in the captivating embrace of
					</motion.p>

					<motion.p
						className={clsx(
							'font-handwriting fade-in-text translate-x-8 rounded-lg  p-6 text-3xl font-bold uppercase leading-relaxed tracking-widest text-white',
							'xl:p-10 xl:text-4xl',
							'3xl:p-16 3xl:text-5xl',
						)}
					>
						total
						<span
							className={clsx(
								'fade-in-span mx-6 text-6xl',
								'xl:text-5xl',
								'3xl:text-6xl',
							)}
						>
							darkness
						</span>
					</motion.p>
				</div>
				<div className='relative flex h-auto w-1/3 flex-col'>
					<img
						src={blindfold}
						alt='femme yeux bandés'
						className={clsx('z-0 aspect-square w-[70%]', 'xl:w-full')}
					/>

					<button
						className={clsx(
							'custom-animated-button font-classic z-20 -mt-20 w-full cursor-pointer rounded-lg  border-transparent px-[2vw] py-[2vh] text-4xl font-bold uppercase text-black shadow-md',
							'xl:text-2xl',
							'3xl:text-4xl',
							'transition-all duration-300 ease-in-out',
							'hover:scale-105  hover:text-white hover:shadow-lg',
						)}
					>
						Embark on a sensory journey
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
