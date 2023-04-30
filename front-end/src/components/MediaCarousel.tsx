import { useState, useEffect } from 'react';
import guardian from '../assets/featuredIn/1280px-The_Guardian.svg.png';
import englishKitchen from '../assets/featuredIn/englishKitchen.jpg';
import londonFoodLovers from '../assets/featuredIn/londonfoodlovers.jpg';
import bbcFood from '../assets/featuredIn/BBC_Food_logo.png';
import foodNetwork from '../assets/featuredIn/Food_Network_-_Logo_2016.png';
import goodFood from '../assets/featuredIn/goodfood.png';
import Austin from '../assets/featuredIn/austin.png';
import StripFood from '../assets/featuredIn/stripfood-logo.png';
import openFood from '../assets/featuredIn/openfood.png';
import parisInsider from '../assets/featuredIn/logo_parisinsider_media_france.png';

interface LogoProps {
	src: string;
	alt: string;
}

const MediaCarousel = () => {
	const logos: LogoProps[] = [
		{ src: bbcFood, alt: 'Logo 3' },
		{ src: englishKitchen, alt: 'Logo 3' },
		{ src: londonFoodLovers, alt: 'Logo 3' },
		{ src: foodNetwork, alt: 'Logo 3' },
		{ src: goodFood, alt: 'Logo 3' },
		{ src: guardian, alt: 'Logo 3' },
		{ src: Austin, alt: 'Logo 3' },
		{ src: StripFood, alt: 'Logo 3' },
		{ src: openFood, alt: 'Logo 3' },
		{ src: parisInsider, alt: 'Logo 3' },
	];
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
	);
};
export default MediaCarousel;
