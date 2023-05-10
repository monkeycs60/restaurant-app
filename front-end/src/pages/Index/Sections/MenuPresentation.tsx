import { useState, useEffect } from 'react';
import { logos } from '../../../utils/logos';
import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import MenuCard from '../../../components/MenuCard';

const MenuPresentation = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentIndex((prevIndex) => {
				if (
					(prevIndex + direction >= logos.length - 3 && direction === 1) ||
					(prevIndex + direction < 1 && direction === -1)
				) {
					setDirection(-direction);
				}
				return prevIndex + direction;
			});
		}, 2000);

		return () => clearTimeout(timer);
	}, [currentIndex, direction, logos.length]);
	return (
		<div className='flex h-screen flex-col'>
			<MenuCard />
			<div className='carousel-container flex items-center justify-center'>
				<div
					className='carousel-wrapper'
					style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
				>
					{logos.map((logo, index) => (
						<div
							className={`carousel-slide ${
								index >= currentIndex && index < currentIndex + 3
									? 'visible'
									: ''
							} ${
								index === currentIndex
									? 'adjacent'
									: index === currentIndex + 1
									? 'central'
									: index === currentIndex + 2
									? 'adjacent'
									: ''
							}`}
							key={index}
						>
							<img
								src={logo.src}
								className='h-[250px] w-[200px] object-contain'
								alt={logo.alt}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='TRANSITION font-roboto flex  w-full justify-center gap-6 text-3xl font-extralight uppercase tracking-wide text-gray-200 '>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Meet our Chef and team </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</div>
	);
};

export default MenuPresentation;
