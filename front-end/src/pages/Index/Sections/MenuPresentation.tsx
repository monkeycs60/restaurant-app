import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import MenuCard from '../../../components/MenuCard';
import Carousel from '../../../components/Carousel';

const MenuPresentation = () => {
	return (
		<div className='m-auto flex h-screen w-[80%] flex-col justify-between p-8'>
			<div className='flex w-full items-end justify-between gap-[5vw]'>
				<MenuCard />
				<Carousel />
			</div>
			<div className='TRANSITION font-roboto flex w-full justify-center gap-6 text-3xl font-extralight uppercase tracking-wide text-gray-200 '>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Meet our Chef and team </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</div>
	);
};

export default MenuPresentation;
