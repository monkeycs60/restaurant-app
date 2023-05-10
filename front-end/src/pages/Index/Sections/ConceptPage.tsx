import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import girlBlindfold from '../../../assets/blindfold-girl.png';
import clsx from 'clsx';

const ConceptPage = () => {
	return (
		<div className='h-screen'>
			<div
				className={clsx(
					'relative m-auto flex h-[90%] w-2/3 items-center justify-center ',
				)}
			>
				<div
					className={clsx(
						'flex h-[70vh] w-[40%] items-center justify-end',
					)}
				>
					<img
						src={girlBlindfold}
						alt='girl blindfolded'
						className={clsx('z-10 h-[80%] translate-x-[6%]')}
					/>
				</div>
				<div
					className={clsx(
						'concept-text-background font-roboto flex h-[82%] w-[60%] flex-col items-center justify-center gap-[5vh] rounded-lg p-16 leading-7 text-gray-900',
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
					>
						Book a table
					</button>
				</div>
			</div>
			<div className='font-roboto flex  w-full justify-center gap-6 text-3xl font-extralight uppercase tracking-wide text-gray-200 '>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Discover our menu </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</div>
	);
};

export default ConceptPage;
