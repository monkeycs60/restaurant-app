import clsx from 'clsx';
import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import useModal from '../../../hooks/useModal';
import ModalBooking from '../../../components/ModalBooking';

const HeroPage = () => {
	const [isModalOpen, openModal, closeModal] = useModal();
	return (
		<div className='relative h-screen w-full'>
			<nav>
				<ul
					className={clsx(
						'font-classic fixed z-50 hidden h-[7vh] w-full items-center justify-around p-2 text-lg text-gray-200 backdrop-blur-sm',
						'lg:flex',
						'3xl:text-2xl',
					)}
				>
					<li className='cursor-pointer'>Concept</li>
					<li className='cursor-pointer'>Menu</li>
					<li className='cursor-pointer'>Team</li>
					<li
						className='flex cursor-pointer items-center justify-center px-8 text-orange-500 '
						onClick={openModal}
					>
						Make a reservation
					</li>
					<li className='cursor-pointer'>Contact us</li>
				</ul>
			</nav>
			<ModalBooking
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				IdPrefix='instance2'
			/>
			<div
				className={clsx('hero-background relative h-[40vh]', 'lg:h-[50vh]')}
			>
				<div className='flex flex-col items-center gap-[1.5vh] pt-[10vh] text-gray-100'>
					<h1 className='font-dancing text-5xl font-bold lg:text-6xl'>
						Chiaroscuro
					</h1>
					<h3 className='font-playfair text-xl lg:text-2xl'>London</h3>
				</div>
				<h2
					className={clsx(
						'font-roboto absolute bottom-[-10%] left-[50%] hidden translate-x-[-50%] translate-y-[-10%] whitespace-nowrap text-7xl font-extralight uppercase tracking-wide text-gray-200',
						'lg:block',
						'3xl:text-8xl',
					)}
				>
					Have you ever eaten in the dark ?
				</h2>
			</div>
			<div
				className={clsx(
					'font-roboto relative my-[6vh] flex  flex-col items-center justify-center gap-[3vh] text-base text-gray-300',
					'lg:h-[50vh] lg:translate-y-[-4vh] lg:text-xl lg:my-0',
					'3xl:text-2xl',
				)}
			>
				<p className='w-[80%] text-center lg:w-1/2'>
					Welcome to{' '}
					<span className='font-dancing 3xl:text-5xl text-4xl text-orange-600'>
						Chiaroscuro
					</span>
					{'  '}, where your dining experience is plunged into complete
					darkness, allowing you to savor each bite like never before.
				</p>
				<p className='w-[80%] text-center lg:w-1/2'>
					Our team has meticulously crafted a unique, unexpected, and
					unforgettable culinary adventure for you, designed to rediscover
					your long-lost senses.
				</p>
				<div
					className={clsx(
						'font-roboto static bottom-0 flex gap-6 text-center text-xl font-extralight uppercase tracking-wide text-gray-200',
						'lg:absolute lg:text-left lg:text-3xl',
						'3xl:text-4xl',
					)}
				>
					<BsArrow90DegDown size={18} className='translate-y-4' />
					<h2> Embark on a sensory journey </h2>
					<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
				</div>
			</div>
		</div>
	);
};

export default HeroPage;
