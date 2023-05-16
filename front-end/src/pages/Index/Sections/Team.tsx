import chef from '../../../assets/chef-dedicated.png';
import { ImQuotesLeft } from 'react-icons/im';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import logosPhotos from '../../../utils/logosPhotos';
import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
const Team = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });
	return (
		<div className='m-auto w-3/4 p-4'>
			<div className='m-auto flex justify-between gap-8 p-6' ref={viewRef}>
				<div className='flex w-[45%] rounded-lg'>
					<img
						src={chef}
						alt='head chef'
						className='rounded-lg object-cover'
					/>
				</div>
				<div className='flex w-[45%] flex-col gap-8 rounded-lg border-[1px] p-8 hover:bg-amber-600/30'>
					<div>
						<ImQuotesLeft
							size={50}
							className='text-4xl text-gray-200 opacity-80'
						/>
					</div>
					<p className='font-playfair text-xl leading-8 text-gray-200'>
						&ldquo; You may not know what is on your plate, but rest
						assured, we do. Dine in the dark, enlightened by our
						dedication to transparency and quality control &ldquo;
					</p>
					<div>
						<div className='font-roboto flex items-center gap-2'>
							<div className='h-[2px] w-4 bg-white'></div>
							<h2 className='text-lg text-gray-300'>
								Jeffrey Williamson
							</h2>
						</div>
						<h3 className='font-roboto text-gray-400'>Head Chef</h3>
					</div>
				</div>
			</div>
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<div className='-mx-4 flex flex-wrap items-center'>
						<div className='mb-12 w-full px-4 md:mb-16 lg:mb-0 lg:w-1/2'>
							<div className='max-w-md'>
								<span className='text-sm font-semibold text-orange-500'>
									What sets us apart
								</span>
								<h2 className='font-playfair mb-10 mt-8 text-4xl  text-gray-200'>
									We champion local and organic produce
								</h2>
								<p className='font-roboto text-xl text-gray-500'>
									We take pride in our commitment to quality with all
									our meats, fruits and vegetables being sustainably
									sourced and certified
								</p>
							</div>
						</div>
						<div className='w-full rounded-lg px-28 py-12 lg:w-1/2'>
							<div className='-m-4 flex flex-wrap'>
								{logosPhotos.map((logo) => (
									<div key={logo.key} className='w-1/2 p-2 md:w-1/3'>
										<div className='rounded-lg bg-zinc-300 py-4 grayscale hover:grayscale-0 lg:py-2'>
											<img
												className='mx-auto h-20 w-20 object-cover'
												src={logo.src}
												alt=''
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='TRANSITION font-roboto flex w-full justify-center gap-6 text-3xl font-extralight uppercase tracking-wide text-gray-200 '>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Practical Informations </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</div>
	);
};

export default Team;
