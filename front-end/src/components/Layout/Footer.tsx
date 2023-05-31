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
					<span className='font-handwriting lg:text-xl'>
						Chiaroscuro
					</span>{' '}
				</p>
				<p className='text-xs italic lg:text-sm'>+44 20 2831 9278</p>
			</div>
			<div className='flex w-full items-center justify-end gap-2 xl:w-1/3 '>
				<a
					href='
				https://www.instagram.com/chiaroscuro_restaurant/
				'
					target='_blank'
					aria-label='visit our instagram'
				>
					<BsInstagram className='h-full lg:w-6' />
				</a>
				<a
					href='
				https://www.facebook.com/chiaroscuro_restaurant/
				'
					target='_blank'
					aria-label='visit our facebook'
				>
					<RiFacebookLine className='h-full lg:w-6' />
				</a>
				<a
					href='
				https://www.linkedin.com/chiaroscuro_restaurant/
				'
					target='_blank'
					aria-label='visit our linkedin'
				>
					<FiLinkedin className='h-full lg:w-6' />
				</a>
				<a
					href='
				https://www.tripadvisor.com/chiaroscuro_restaurant/
				'
					target='_blank'
					aria-label='visit our tripadvisor'
				>
					<SiTripadvisor className='h-full lg:w-6' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
