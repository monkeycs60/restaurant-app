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

export interface LogoProps {
	key: number;
	src: string;
	alt: string;
}

export const logos: LogoProps[] = [
	{ key: 0, src: bbcFood, alt: 'Logo 3' },
	{ key: 1, src: englishKitchen, alt: 'Logo 3' },
	{ key: 2, src: londonFoodLovers, alt: 'Logo 3' },
	{ key: 3, src: foodNetwork, alt: 'Logo 3' },
	{ key: 4, src: goodFood, alt: 'Logo 3' },
	{ key: 5, src: guardian, alt: 'Logo 3' },
	{ key: 6, src: Austin, alt: 'Logo 3' },
	{ key: 7, src: StripFood, alt: 'Logo 3' },
	{ key: 8, src: openFood, alt: 'Logo 3' },
	{ key: 9, src: parisInsider, alt: 'Logo 3' },
];
