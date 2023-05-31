import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import girlBlindfold from '../../../assets/blindfold-girl.webp';
import clsx from 'clsx';
import useModal from '../../../hooks/useModal';
import ModalBooking from '../../../components/ModalBooking';
import { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import useBoxVariants from '../../../hooks/useBoxVariants';

const ConceptPage = () => {
	const [isModalOpen, openModal, closeModal] = useModal();

	const config = useMemo(
		() => ({
			hidden: { opacity: 0, x: -100 },
			visible: { opacity: 1, x: 0 },
		}),
		[],
	);
	const boxVariantsImage = useBoxVariants(config);
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });
	return (
		<section
			id='conceptPage'
			className={clsx('h-auto', 'lg:h-screen', '3xl:h-auto')}
		>
			<div
				className={clsx(
					'relative m-auto flex h-[90%] flex-col items-center justify-center gap-12',
					'lg:w-2/3 lg:flex-row lg:gap-0',
					'3xl:h-[60%] 3xl:my-[5vh]',
				)}
			>
				<motion.div
					className={clsx(
						'flex h-[80%] w-[70%] items-center justify-end border-2 border-white',
						'lg:h-[70vh] lg:w-[40%] lg:border-none',
						'3xl:w-[18vw] 3xl:h-[38vh]',
					)}
					ref={viewRef}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					variants={boxVariantsImage}
					transition={{ duration: 1.1 }}
				>
					<div
						className={clsx(
							'z-30 h-[80%] rounded-lg lg:translate-x-[6%]',
						)}
					>
						<img
							src={girlBlindfold}
							alt='girl blindfolded'
							className='h-full w-full rounded-lg object-cover'
						/>
					</div>
				</motion.div>
				<div
					className={clsx(
						'concept-text-background font-roboto flex w-[100%] flex-col items-center justify-center gap-[5vh] rounded-lg p-8 leading-7 text-gray-900',
						'lg:h-[82%] lg:w-[60%] lg:p-16',
						'3xl:h-[40%] 3xl:w-[45%] 3xl:text-lg 3xl:gap-[4vh] 3xl:p-16',
					)}
				>
					<p className='hidden lg:block'>
						1% of our sensory experience comes from taste. However sight
						accounts for a staggering 83%. In a world where the appearance
						of food is emphasized, we offer you to go back to{' '}
						<span className='italic'> the true essence of taste</span>.
					</p>
					<p>
						<span className='font-dancing text-2xl font-bold text-orange-500'>
							Chiaroscuro
						</span>{' '}
						flips the script by immersing you in complete darkness
						throughout your dining experience. Your other senses are
						heightened, allowing you to truly savor all the flavors and
						textures.
					</p>
					<p>
						Discover one of our two dining experiences: the{' '}
						<span className='font-bold italic underline underline-offset-2'>
							{' '}
							Penumbra path
						</span>
						, where guests wear a special blindfold, or the{' '}
						<span className='font-bold italic underline underline-offset-2'>
							Pitch black
						</span>{' '}
						experience in our designed darkened dining room. Our chefs
						prepare each week a tasting menu.
					</p>
					<button
						className={clsx(
							'font-playfair rounded-md bg-gray-700 px-16 py-2 text-gray-100',
							'hover:bg-orange-600 hover:text-black',
						)}
						onClick={openModal}
					>
						Book a table
					</button>
				</div>
			</div>
			<ModalBooking
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				IdPrefix='instance2'
			/>
			<div
				className={clsx(
					'font-roboto m-auto mt-[5vh] flex w-[80%] justify-center gap-6 text-center text-2xl font-extralight uppercase tracking-wide text-gray-200',
					'lg:mt-0, lg:mb-0 lg:w-full lg:text-left lg:text-3xl',
					'3xl:text-4xl 3xl:mt-[10vh]',
				)}
			>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Discover our menu </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</section>
	);
};

export default ConceptPage;
