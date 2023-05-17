import clsx from 'clsx';
import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';

const HeroPage = () => {
	return (
		<div className='relative h-screen w-full'>
			<nav>
				<ul
					className={clsx(
						'font-classic fixed z-50 flex h-[7vh] w-full justify-around p-2 text-lg text-gray-200 backdrop-blur-sm',
					)}
				>
					<li className='cursor-pointer'>Concept</li>
					<li className='cursor-pointer'>Menu</li>
					<li className='cursor-pointer'>Team</li>
					<li className='flex cursor-pointer items-center justify-center px-8 text-orange-500 '>
						Make a reservation
					</li>
					<li className='cursor-pointer'>Contact us</li>
				</ul>
			</nav>
			<div className={clsx('hero-background relative h-[50vh]')}>
				<div className='flex flex-col items-center gap-[1.5vh] pt-[10vh] text-gray-100'>
					<h1 className='font-dancing text-6xl font-bold'>Chiaroscuro</h1>
					<h3 className='font-playfair text-2xl'>London</h3>
				</div>
				<h2 className='font-roboto absolute bottom-[-5vh] left-[8vw] text-7xl font-extralight uppercase tracking-wide text-gray-200'>
					Have you ever eaten in the dark ?
				</h2>
			</div>
			<div
				className={clsx(
					'font-roboto relative flex h-[50vh] translate-y-[-4vh] flex-col items-center justify-center gap-[3vh] text-xl text-gray-300',
				)}
			>
				<p className='w-1/2 text-center'>
					Welcome to{' '}
					<span className='font-dancing text-4xl text-orange-600'>
						Chiaroscuro
					</span>
					{'  '}, where your dining experience is plunged into complete
					darkness, allowing you to savor each bite like never before.
				</p>
				<p className='w-1/2 text-center'>
					Our team has meticulously crafted a unique, unexpected, and
					unforgettable culinary adventure for you, designed to rediscover
					your long-lost senses.
				</p>
				<div className='font-roboto absolute bottom-0 flex gap-6 text-3xl font-extralight uppercase tracking-wide text-gray-200 '>
					<BsArrow90DegDown size={18} className='translate-y-4' />
					<h2> Embark on a sensory journey </h2>
					<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
				</div>
			</div>
		</div>
	);
};

export default HeroPage;
