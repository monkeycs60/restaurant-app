import bio1 from '../assets/bio1.png';
import bio2 from '../assets/bio2-PhotoRoom.png-PhotoRoom.png';
import bio3 from '../assets/bio3-PhotoRoom.png-PhotoRoom.png';
import bio4 from '../assets/bio4-PhotoRoom.png-PhotoRoom.png';
import bio5 from '../assets/bio5-PhotoRoom.png-PhotoRoom.png';
import bio6 from '../assets/bio6.png';

export interface logosPhotosProps {
	key: number;
	src: string;
	alt: string;
}
const logosPhotos: logosPhotosProps[] = [
	{
		key: 1,
		src: bio1,
		alt: 'bio1',
	},
	{
		key: 2,
		src: bio2,
		alt: 'bio2',
	},
	{
		key: 3,
		src: bio3,
		alt: 'bio3',
	},
	{
		key: 4,
		src: bio4,
		alt: 'bio4',
	},
	{
		key: 5,
		src: bio5,
		alt: 'bio5',
	},
	{
		key: 6,
		src: bio6,
		alt: 'bio6',
	},
];

export default logosPhotos;
