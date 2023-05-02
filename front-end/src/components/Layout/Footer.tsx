import { BsInstagram } from 'react-icons/bs';
import { RiFacebookLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';
import { SiTripadvisor } from 'react-icons/si';

const Footer = () => {
	return (
		<footer className='flex  bg-amber-700/70 p-2'>
			<div className='flex w-1/2 flex-col items-end'>
				<p>
					{' '}
					<span className='font-handwriting text-xl'>
						Chiaroscuro
					</span>{' '}
				</p>
				<p className='text-sm italic'>+44 20 1234 5678</p>
			</div>
			<div className='flex w-full xl:w-1/3 items-center justify-end gap-2 '>
				<a
					href='
				https://www.instagram.com/chiaroscuro_restaurant/
				'
					target='_blank'
				>
					<BsInstagram className='h-full w-6' />
				</a>
				<a
					href='
				https://www.facebook.com/chiaroscuro_restaurant/
				'
					target='_blank'
				>
					<RiFacebookLine className='h-full w-6' />
				</a>
				<a
					href='
				https://www.linkedin.com/chiaroscuro_restaurant/
				'
					target='_blank'
				>
					<FiLinkedin className='h-full w-6' />
				</a>
				<a
					href='
				https://www.tripadvisor.com/chiaroscuro_restaurant/
				'
					target='_blank'
				>
					<SiTripadvisor className='h-full w-6' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
