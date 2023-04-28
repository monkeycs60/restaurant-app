import { motion } from 'framer-motion';
import { isInViewProps } from './Index/Concept';

const Pitch = ({ isInView }: isInViewProps) => {
	return (
		<div className='concept-bordure-bg mr-8 flex w-[60%] flex-col items-center bg-amber-500/20 p-8'>
			<div className='font-classic flex h-full w-full flex-col justify-around text-xl'>
				<motion.p
					className='first-letter:font-handwriting text-gray-100 first-letter:mr-1 first-letter:text-4xl first-letter:text-amber-500'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 1 }}
				>
					Researchers have found that the majority of our sensory
					experience comes from sight, which accounts for a staggering 83%,
					while taste only makes up a mere 1%. In a world where the
					appearance of food is emphasized, the true essence of taste can
					sometimes be overlooked.
				</motion.p>
				<motion.p
					className='first-letter:font-handwriting text-gray-100 first-letter:mr-1 first-letter:text-4xl first-letter:text-amber-400'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 1.5 }}
				>
					At Chiaroscuro, we flip the script by immersing you in complete
					darkness throughout your dining experience. This innovative
					approach heightens your other senses, allowing you to truly savor
					the flavors and textures of each dish. Our skilled staff, trained
					to navigate this unique environment, ensure a seamless and
					extraordinary experience.
				</motion.p>
				<motion.p
					className='first-letter:font-handwriting text-gray-100 first-letter:mr-1 first-letter:text-4xl first-letter:text-amber-500'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 2 }}
				>
					To accommodate varying levels of curiosity and adventure,
					Chiaroscuro offers two distinct dining options: the{' '}
					<span className='italic underline'>Penumbra path</span>, where
					guests wear a special blindfold, or the{' '}
					<span className='italic underline'>Pitch black experience</span>{' '}
					in our specially designed darkened dining room.
				</motion.p>
			</div>
		</div>
	);
};

export default Pitch;
