// SmokeEffect.tsx
import React, { useEffect, useRef } from 'react';
import { Smoke } from '../lib/Smoke';

const SmokeEffect: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const { clientWidth: width, clientHeight: height } =
				containerRef.current;

			const smoke = new Smoke(width, height);
			containerRef.current.appendChild(smoke.renderer.domElement);
			smoke.update();

			const resizeListener = () => {
				smoke.onResize();
			};

			window.addEventListener('resize', resizeListener);

			return () => {
				window.removeEventListener('resize', resizeListener);
			};
		}
	}, []);

	return (
		<div
			ref={containerRef}
			style={{
				position: 'absolute',
				top: '0%', // Adjust this value to position the smoke effect vertically
				left: '0%', // Adjust this value to position the smoke effect horizontally
				width: '100%', // Adjust this value to set the width of the smoke effect
				height: '100%', // Adjust this value to set the height of the smoke effect
				overflow: 'hidden',
				opacity: '0.3', // Adjust this value to set the opacity of the smoke effect
				clipPath:
					'polygon(59% 27%, 70% 30%, 77% 35%, 81% 42%, 83% 48%, 85% 55%, 87% 68%, 77% 73%, 52% 76%, 38% 76%, 25% 74%, 12% 69%, 15% 56%, 18% 41%, 26% 31%, 45% 26%)', // Adjust this value to set the shape of the smoke effect
			}}
		/>
	);
};

export default SmokeEffect;
