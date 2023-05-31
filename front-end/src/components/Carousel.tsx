import { useState, useEffect } from 'react';
import { platePhotos } from '../utils/platePhotos';
import blackBackground from '../assets/black-background.jpg';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import clsx from 'clsx';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const Carousel = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	const [current, setCurrent] = useState<number>(3);
	const [loading, setLoading] = useState<boolean>(true);
	const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

	useEffect(() => {
		const img = new Image();
		img.src = platePhotos[current].src;
		img.onload = () => setLoading(false);
	}, [current]);

	const handleDotClick = (index: number) => {
		if (current !== index) {
			setLoading(true);
			setCurrent(index);
		}
		setIsBookmarked(!isBookmarked);
	};

	return (
		<div
			className={clsx(
				'CAROUSEL m-auto flex h-full w-[80%] flex-col-reverse items-center justify-center gap-2 p-4 pt-2',
				'lg:m-0 lg:w-[50%] lg:pt-16',
			)}
		>
			<div className='relative z-20 flex w-full flex-col items-center justify-around gap-4'>
				<div
					className={clsx(
						'3xl:w-[6vw] absolute bottom-0 left-0 z-30 h-[2px] w-[3vw] bg-white',
						'lg:w-[8vw]',
					)}
				></div>
				<div
					className={clsx(
						'3xl:w-[6vw] absolute bottom-0 right-0 z-30 h-[2px] w-[3vw] bg-white',
						'lg:w-[8vw]',
					)}
				></div>
				<div className='font-roboto absolute -bottom-2 z-40 bg-transparent px-1 text-xs italic text-gray-100 lg:text-base'>
					<p>A glimpse of our previous creations</p>
				</div>
				<motion.div
					ref={viewRef}
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: 1.1 }}
					className='relative z-10 w-full  border-x-2 border-t-2 object-cover'
				>
					<img
						src={blackBackground}
						alt='Loading...'
						className={clsx(
							'absolute -z-10 h-[30vh] w-full rounded-lg object-cover',
							'lg:h-auto lg:w-full',
						)}
					/>
					{loading ? (
						<img
							src={blackBackground}
							alt='Loading...'
							className={clsx(
								'h-[30vh] w-full rounded-lg object-cover',
								'lg:h-auto lg:w-full',
							)}
						/>
					) : (
						platePhotos.map((platePhoto, index) =>
							index === current ? (
								<img
									key={platePhoto.key}
									src={platePhoto.src}
									alt={platePhoto.alt}
									className={clsx(
										'animate-photos-carousel h-[30vh] rounded-lg',
										'lg:h-auto lg:w-full lg:object-cover',
									)}
								/>
							) : null,
						)
					)}
				</motion.div>
				<div className=' gap- absolute -right-4 top-0 -z-20 flex cursor-pointer flex-col rounded-lg p-1 lg:-right-7'>
					{platePhotos.map((platePhoto, index) =>
						index === current ? (
							<BsBookmarkFill
								key={platePhoto.key}
								className='animate-icon h-6 w-6 translate-x-2 -rotate-90 scale-110 text-orange-500 transition-transform duration-1000 ease-in-out lg:h-10 lg:w-10'
								onClick={() => handleDotClick(index)}
							/>
						) : (
							<BsBookmark
								key={platePhoto.key}
								className='h-5 w-5 translate-x-2 -rotate-90 cursor-pointer text-orange-500 transition-transform duration-1000 ease-in-out lg:h-8 lg:w-8'
								onClick={() => {
									handleDotClick(index);
								}}
							/>
						),
					)}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
