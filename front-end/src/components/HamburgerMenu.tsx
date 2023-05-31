import useModal from '../hooks/useModal';
import ModalBooking from './ModalBooking';
import { motion } from 'framer-motion';

interface HamburgerMenuProps {
	isHamburgerOpen: boolean;
	toggleHamburgerMenu: () => void;
}

const HamburgerMenu = ({
	isHamburgerOpen,
	toggleHamburgerMenu,
}: HamburgerMenuProps) => {
	const [isModalOpen, openModal, closeModal] = useModal();
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '100%' },
		exit: { opacity: 0, x: '100%' },
	};
	return (
		<motion.div
			className='concept-text-background fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center text-black'
			initial='closed'
			animate={isHamburgerOpen ? 'open' : 'closed'}
			exit='exit'
			variants={variants}
			transition={{ duration: 0.5 }}
		>
			<ul className='font-playfair m-auto flex h-2/3 w-full flex-col items-center justify-around text-lg'>
				<a
					href='#heroPage'
					onClick={() => {
						toggleHamburgerMenu();
					}}
				>
					Home
				</a>
				<a
					href='#conceptPage'
					onClick={() => {
						toggleHamburgerMenu();
					}}
				>
					Concept
				</a>
				<a
					href='#menuPage'
					onClick={() => {
						toggleHamburgerMenu();
					}}
				>
					Menu
				</a>
				<a
					href='#commitmentPage'
					onClick={() => {
						toggleHamburgerMenu();
					}}
				>
					Commitment
				</a>
				<a
					href='#findUsPage'
					onClick={() => {
						toggleHamburgerMenu();
					}}
				>
					Find Us
				</a>
				<button
					className='border-[1px] border-zinc-500 p-4 text-xl text-orange-600 hover:bg-orange-500 hover:text-white'
					onClick={() => {
						openModal();
					}}
				>
					Book a table
				</button>
			</ul>
			<ModalBooking
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				IdPrefix='instance3'
			/>
		</motion.div>
	);
};

export default HamburgerMenu;
