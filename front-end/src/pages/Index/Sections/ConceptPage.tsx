import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import girlBlindfold from '../../../assets/blindfold-girl.png';
import clsx from 'clsx';
import { useState } from 'react';
import ModalBooking from '../../../components/ModalBooking';

const ConceptPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModalClick = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div className={clsx('h-screen', '3xl:h-auto')}>
			<div
				className={clsx(
					'relative m-auto flex h-[90%] w-2/3 items-center justify-center ',
					'3xl:h-[60%] 3xl:my-[5vh]',
				)}
			>
				<div
					className={clsx(
						'flex h-[70vh] w-[40%] items-center justify-end',
						'3xl:w-[18vw] 3xl:h-[38vh]',
					)}
				>
					<img
						src={girlBlindfold}
						alt='girl blindfolded'
						className={clsx('z-10 h-[80%] translate-x-[6%] rounded-lg')}
					/>
				</div>
				<div
					className={clsx(
						'concept-text-background font-roboto flex h-[82%] w-[60%] flex-col items-center justify-center gap-[5vh] rounded-lg p-16 leading-7 text-gray-900',
						'3xl:h-[40%] 3xl:w-[45%] 3xl:text-lg 3xl:gap-[4vh] 3xl:p-16',
					)}
				>
					<p>
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
						onClick={() => openModalClick()}
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
					'font-roboto flex w-full justify-center gap-6 text-3xl font-extralight uppercase tracking-wide text-gray-200 ',
					'3xl:text-4xl 3xl:mt-[10vh]',
				)}
			>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Discover our menu </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</div>
	);
};

export default ConceptPage;
