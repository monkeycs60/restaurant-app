import { useState, useEffect } from 'react';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import { platePhotos } from '../utils/platePhotos';
import blackBackground from '../assets/black-background.jpg';
import { BsCircleFill, BsCircle } from 'react-icons/bs';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';

const Carousel = () => {
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
			className='CAROUSEL 
         flex h-full w-[50%] flex-col-reverse items-center justify-center gap-2 p-4 pt-16'
		>
			<div className='relative z-20 flex w-full flex-col items-center justify-around gap-4'>
				<div className='absolute bottom-0 left-0 z-30 h-[2px] w-[8vw] bg-white'></div>
				<div className='absolute bottom-0 right-0 z-30 h-[2px] w-[8vw] bg-white'></div>
				<div className='font-roboto absolute -bottom-2 z-50 bg-transparent px-1 italic text-gray-100'>
					<p>A glimpse of our previous creations</p>
				</div>
				<div className='relative z-10 w-full  border-x-2 border-t-2 object-cover'>
					<img
						src={blackBackground}
						alt='Loading...'
						className='absolute -z-10 w-full rounded-lg object-cover'
					/>
					{loading ? (
						<img
							src={blackBackground}
							alt='Loading...'
							className='w-full rounded-lg  object-cover'
						/>
					) : (
						platePhotos.map((platePhoto, index) =>
							index === current ? (
								<img
									key={platePhoto.key}
									src={platePhoto.src}
									alt={platePhoto.alt}
									className='animate-photos-carousel w-full rounded-lg  object-cover'
								/>
							) : null,
						)
					)}
				</div>
				<div className=' gap- absolute -right-7 top-0 -z-20 flex cursor-pointer flex-col rounded-lg p-1'>
					{platePhotos.map((platePhoto, index) =>
						index === current ? (
							<BsBookmarkFill
								key={platePhoto.key}
								className='animate-icon h-10 w-10 translate-x-2 -rotate-90 scale-110 text-orange-500 transition-transform duration-1000 ease-in-out'
								onClick={() => handleDotClick(index)}
							/>
						) : (
							<BsBookmark
								key={platePhoto.key}
								className='h-8 w-8 translate-x-2 -rotate-90 cursor-pointer text-orange-500 transition-transform duration-1000 ease-in-out'
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
