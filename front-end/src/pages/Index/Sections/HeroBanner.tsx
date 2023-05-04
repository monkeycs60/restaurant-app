import blindfold from '../../../assets/blindfold3.png';
import logo from '../../../assets/logo5.png';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ModalBooking from '../../../components/ModalBooking';
const HeroBanner = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModalClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div className='relative h-[100vh] w-full p-4 xl:h-[100vh]'>
			<div
				className={clsx(
					'm-2 flex items-center justify-between',
					'xl:m-4',
					'3xl:m-8',
				)}
			>
				<div
					className={clsx(
						'mb-[10vh] mt-2 flex flex-col',
						'xl:mb-0 xl:mt-4',
						'3xl:mt-8',
					)}
				>
					<h1
						className={clsx(
							'font-handwriting text-6xl text-gray-300',
							'xl:text-8xl',
							'3xl:text-9xl',
						)}
					>
						chiaroscuro
					</h1>
					<div className='flex justify-end'>
						<h2
							className={clsx(
								'font-classic text-base text-amber-400',
								'xl:text-lg',
								'3xl:text-xl',
							)}
						>
							Taste the experience, not just the food.
						</h2>
					</div>
				</div>
				<button className='fixed right-12 z-50 mr-2 hidden xl:mr-8 xl:block'>
					<img
						src={logo}
						alt='logo'
						className={clsx('w-20 cursor-pointer', 'xl:w-32', '3xl:w-40')}
					/>
				</button>
			</div>
			<div
				className={clsx(
					'mt-16 flex flex-col items-center justify-around gap-14',
					'xl:-mt-4 xl:flex-row xl:gap-0',
					'3xl:-mt-4 3xl:w-[90%]',
				)}
			>
				<div
					className={clsx(
						' w-[90%] items-center justify-center bg-amber-500/30  p-3 xl:w-[40%]',
						'xl:mt-12 xl:flex xl:flex-col xl:gap-2 xl:p-5',
						'3xl:gap-6 3xl:py-8',
					)}
				>
					<motion.p
						className={clsx(
							'font-classic translate-x-2 rounded-lg text-lg leading-10 tracking-wide text-white',
							'xl:text-2xl',
							'3xl:text-3xl 3xl:p-8',
						)}
					>
						An unprecedented culinary adventure in{' '}
						<span
							className={clsx(
								'font-handwriting text-3xl font-bold text-black',
								'xl:hidden',
							)}
						>
							total darkness
						</span>
					</motion.p>
					<div
						className='font-handwriting hidden text-center text-2xl font-bold uppercase xl:block xl:text-left xl:text-5xl'
						style={{
							textShadow: '1px 1px 4px rgba(255, 255, 255, 0.5)',
						}}
					>
						total darkness
					</div>
				</div>
				<div
					className={clsx(
						'relative flex h-auto w-[90%] flex-col items-center gap-6 ',
						'xl:h-auto  xl:w-1/3 xl:items-start xl:gap-0',
						'3xl:mr-12',
					)}
				>
					<img
						src={blindfold}
						alt='femme yeux bandés'
						className={clsx('z-0 aspect-square w-[80%]', 'xl:w-full')}
					/>
					<button
						className={clsx(
							'custom-animated-button font-classic z-20 -mt-20 w-full cursor-pointer rounded-lg  border-transparent p-4 text-xl font-bold uppercase text-black shadow-md xl:px-[2vw] xl:py-[2vh]',
							'xl:text-2xl',
							'3xl:text-4xl',
							'transition-all duration-300 ease-in-out',
							'hover:scale-105  hover:text-white hover:shadow-lg',
						)}
						onClick={openModalClick}
					>
						Embark on a sensory journey
					</button>
					<ModalBooking
						isModalOpen={isModalOpen}
						closeModal={closeModal}
					/>
					;
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
