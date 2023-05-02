import blindfold from '../../assets/blindfold3.png';
import logo from '../../assets/logo5.png';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from 'react-modal';
const HeroBanner = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className='relative h-[100vh] w-full p-4'>
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
					'mt-16 flex flex-col-reverse items-center justify-around gap-8 xl:flex-row',
					'xl:-mt-4 xl:gap-0',
					'3xl:-mt-4 3xl:w-[90%]',
				)}
			>
				<div
					className={clsx(
						'flex w-[80%] flex-col items-center justify-center bg-amber-500/30  p-5 xl:w-[40%]',
						'xl:mt-12 xl:gap-2',
						'3xl:gap-6 3xl:py-8',
					)}
				>
					<motion.p
						className={clsx(
							'font-classic translate-x-2 rounded-lg text-xl leading-10 tracking-wide text-white',
							'xl:text-2xl',
							'3xl:text-3xl 3xl:p-8',
						)}
					>
						An unprecedented culinary adventure in{' '}
					</motion.p>
					<div
						className='font-handwriting text-center text-3xl font-bold uppercase xl:text-left xl:text-5xl'
						style={{
							textShadow: '1px 1px 4px rgba(255, 255, 255, 0.5)',
						}}
					>
						total darkness
					</div>
				</div>
				<div className='3xl:mr-12 relative flex h-auto w-[90%] flex-col items-center gap-6 xl:w-1/3 xl:items-start  xl:gap-0'>
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
						onClick={() => setModalIsOpen(true)}
					>
						Embark on a sensory journey
					</button>
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={() => setModalIsOpen(false)}
						className='modal'
						overlayClassName='modal-overlay'
						ariaHideApp={false}
					>
						<h2 className='font-handwriting px-4 text-3xl xl:px-0'>
							Book your table
						</h2>
						<form className='font-classic mt-[5vh] flex w-[80%] flex-col gap-8 px-4 text-sm xl:w-auto xl:px-0 xl:text-sm'>
							<label className='flex  justify-between'>
								<span>Number of guests:</span>
								<input type='number' min='1' className='w-1/2' />
							</label>

							<label className='flex  justify-between'>
								<span>Date and time:</span>
								<input type='datetime-local' className='w-1/2' />
							</label>

							<label className='flex flex-col justify-between gap-4'>
								<span> Food allergies:</span>
								<textarea className='p-2' />
							</label>

							<fieldset className='flex flex-col'>
								<legend className='mb-2'>Pick your experience:</legend>
								<label>
									<input
										type='radio'
										name='experience'
										value='penumbra'
										className='mr-2'
									/>
									Penumbra Path: £55 per person (blindfold)
								</label>
								<label>
									<input
										type='radio'
										name='experience'
										value='pitch_black'
										className='mr-2'
									/>
									Pitch Black Experience: £70 per person (dark room)
								</label>
							</fieldset>

							<button
								className=' bg-gray-800 p-3 text-xl uppercase hover:bg-gray-400 hover:text-gray-900'
								type='submit'
							>
								Book
							</button>
						</form>
					</Modal>
					;
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
