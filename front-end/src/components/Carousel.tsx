import { useState, useEffect } from 'react';

interface LogoProps {
	key: number;
	src: string;
	alt: string;
}

interface CarouselProps {
	logos: LogoProps[];
	interval?: number;
}

export const Carousel = ({ logos, interval = 2000 }: CarouselProps) => {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrent((prevCurrent) => {
				if (prevCurrent === 0) {
					setDirection(1);
					return prevCurrent + 1;
				} else if (prevCurrent === logos.length - 1) {
					setDirection(-1);
					return prevCurrent - 1;
				} else {
					return prevCurrent + direction;
				}
			});
		}, interval);

		return () => {
			clearTimeout(timer);
		};
	}, [current, logos.length, interval, direction]);

	return (
		<div className='carousel'>
			<div
				className='carousel-inner'
				style={{
					transform: `translateX(-${(100 / logos.length) * current}%)`,
					transition: `transform ${interval / 1000}s`,
				}}
			>
				{logos.map((logo) => (
					<img key={logo.key} src={logo.src} alt={logo.alt} />
				))}
			</div>
		</div>
	);
};

export default Carousel;
