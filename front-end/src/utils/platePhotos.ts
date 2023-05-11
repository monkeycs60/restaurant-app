import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.png';
import carousel5 from '../assets/carousel5.png';
import carousel6 from '../assets/carousel6.png';
import carousel7 from '../assets/carousel7.png';

export interface platePhotosProps {
	key: number;
	src: string;
	alt: string;
}

export const platePhotos: platePhotosProps[] = [
	{ key: 0, src: carousel1, alt: 'Logo 3' },
	{ key: 1, src: carousel2, alt: 'Logo 3' },
	{ key: 2, src: carousel3, alt: 'Logo 3' },
	{ key: 3, src: carousel4, alt: 'Logo 3' },
	{ key: 4, src: carousel5, alt: 'Logo 3' },
	{ key: 5, src: carousel6, alt: 'Logo 3' },
	{ key: 6, src: carousel7, alt: 'Logo 3' },
];
