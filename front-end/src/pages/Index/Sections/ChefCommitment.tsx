import chef from '../../../assets/chef-dedicated.png';
import { ImQuotesLeft } from 'react-icons/im';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import logosPhotos from '../../../utils/logosPhotos';
import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import clsx from 'clsx';
const Team = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });
	return (
		<section
			id='commitmentPage'
			className={clsx(
				'm-auto mt-[4vh] w-full',
				'lg:mt-0 lg:w-3/4 lg:p-4',
				'3xl:w-[55%] 3xl:px-8',
			)}
		>
			<div
				className={clsx(
					' m-auto flex flex-col justify-between gap-12',
					'lg:flex-row lg:gap-16 lg:p-6',
					'3xl:p-0',
				)}
				ref={viewRef}
			>
				<div
					className={clsx(
						'm-auto flex w-[70%] rounded-lg border-2 border-white',
						'lg:w-[50%] lg:border-none',
					)}
				>
					<img
						src={chef}
						alt='head chef'
						className={clsx(
							'h-full w-full rounded-lg object-cover',
							'lg:h-auto lg:w-auto',
						)}
					/>
				</div>
				<div
					className={clsx(
						'concept-text-background flex flex-col gap-6 rounded-lg border-[1px] p-4 hover:bg-amber-600/30',
						'lg:w-[50%] lg:gap-8 lg:p-8',
						'3xl:gap-12',
					)}
				>
					<div>
						<ImQuotesLeft
							size={50}
							className='text-4xl text-orange-600 opacity-80'
						/>
					</div>
					<p className='font-playfair text-base leading-8 text-gray-900 lg:text-xl'>
						&ldquo; You may not know what is on your plate, but rest
						assured, we do. Dine in the dark, enlightened by our
						dedication to transparency and quality control &ldquo;
					</p>
					<div className='3xl:flex 3xl:flex-col 3xl:gap-2'>
						<div className='font-roboto flex items-center gap-2'>
							<div className='h-[2px] w-4 bg-black'></div>
							<h2 className='3xl:text-xl text-base font-bold text-gray-900 lg:text-lg'>
								Jeffrey Williamson
							</h2>
						</div>
						<h3 className='font-roboto 3xl:text-lg text-sm text-gray-800 lg:text-base'>
							Head Chef
						</h3>
					</div>
				</div>
			</div>
			<section className='m-auto w-[90%] py-12 lg:w-auto'>
				<div className='bg container mx-auto px-4'>
					<div className='-mx-4 flex flex-wrap items-center'>
						<div className='mb-12 w-full px-4 md:mb-16 lg:mb-0 lg:w-1/2'>
							<div className='max-w-md'>
								<h2 className='font-roboto mb-10 mt-8 text-xl text-gray-200  lg:text-4xl'>
									We champion local and organic produce
								</h2>
								<p className='font-roboto text-sm text-gray-500 lg:text-lg'>
									We take pride in our commitment to quality with all
									our meats, fruits and vegetables being sustainably
									sourced and certified.
								</p>
							</div>
						</div>
						<div
							className={clsx(
								'flex w-full  rounded-lg px-8 py-6 ',
								'lg:w-1/2 lg:translate-x-6 lg:px-28 lg:py-12',
							)}
						>
							<div className='-m-4 flex flex-wrap'>
								{logosPhotos.map((logo) => (
									<div key={logo.key} className='w-1/3 p-2 lg:w-1/3'>
										<div className='rounded-lg bg-zinc-300 py-4 grayscale hover:grayscale-0 lg:py-2'>
											<img
												className='mx-auto h-12 w-12 object-cover lg:h-20 lg:w-20'
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
			<div
				className={clsx(
					'TRANSITION font-roboto m-auto  flex w-[80%] justify-center gap-6 text-center text-2xl font-extralight uppercase tracking-wide text-gray-200',
					'lg:w-full lg:text-left lg:text-3xl',
					'3xl:text-4xl 3xl:my-[5vh]',
				)}
			>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Practical Informations </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</section>
	);
};

export default Team;
