import { useState, useEffect } from 'react';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import { platePhotos } from '../utils/platePhotos';
import blackBackground from '../assets/black-background.jpg';
import { BsCircleFill, BsCircle } from 'react-icons/bs';

const Carousel = () => {
	const [current, setCurrent] = useState<number>(3);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const img = new Image();
		img.src = platePhotos[current].src;
		img.onload = () => setLoading(false);
	}, [current]);

	const handleDotClick = (index: number) => {
		setLoading(true);
		setCurrent(index);
	};

	return (
		<div
			className='CAROUSEL 
         flex h-full  flex-col items-center justify-center rounded-lg p-4 pt-16 '
		>
			<div className='relative flex w-full flex-col items-center justify-around gap-4'>
				<div className='w-full rounded-lg border-2 object-cover '>
					{loading ? (
						<img
							src={blackBackground}
							alt='Loading...'
							className=' w-full rounded-lg border-2 object-cover'
						/>
					) : (
						platePhotos.map((platePhoto, index) =>
							index === current ? (
								<img
									key={platePhoto.key}
									src={platePhoto.src}
									alt={platePhoto.alt}
									className=' w-full rounded-lg border-2 object-cover'
								/>
							) : null,
						)
					)}
				</div>
				<div className='concept-text-background absolute right-[-5vw] top-[9vh] rotate-90 z-50 flex gap-2 rounded-lg border-2 p-1'>
					{platePhotos.map((platePhoto, index) =>
						index === current ? (
							<BsCircleFill
								key={platePhoto.key}
								size={12}
								className='h-full text-orange-500'
								onClick={() => handleDotClick(index)}
							/>
						) : (
							<BsCircleFill
								key={platePhoto.key}
								size={12}
								color='black'
								className='h-full'
								onClick={() => handleDotClick(index)}
							/>
						),
					)}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
