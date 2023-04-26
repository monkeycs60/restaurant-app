import { useEffect, useRef, useState } from 'react';
const scrollHoverMouse = () => {
	const [opacity, setOpacity] = useState(false);
	const [fadeIn, setFadeIn] = useState(false);
	const initialMousePosition = useRef({ x: 0, y: 0 });

	const distance = (point1: any, point2: any) => {
		return Math.sqrt(
			Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2),
		);
	};

	const handleMouseMove = (event: MouseEvent) => {
		const currentMousePosition = { x: event.clientX, y: event.clientY };
		let threshold = 700; // Seuil de distance en pixels
		if (window.innerWidth > 1700) {
			threshold = 1200;
		}
		console.log(
			'différence: ' +
				distance(initialMousePosition.current, currentMousePosition),
		);

		if (
			distance(initialMousePosition.current, currentMousePosition) >
			threshold
		) {
			setOpacity(true);
			setFadeIn(true);
		}
	};

	const handleMouseHover = () => {
		setOpacity(true);
		setFadeIn(true);
	};
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setOpacity(true);
			setFadeIn(true);
		}
	};

	useEffect(() => {
		const setInitialPosition = (event: MouseEvent) => {
			initialMousePosition.current = {
				x: event.clientX,
				y: event.clientY,
			};
		};

		window.addEventListener('mousemove', setInitialPosition, {
			once: true,
		});
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mousemove', setInitialPosition);
		};
	}, []);
};

export default scrollHoverMouse;
