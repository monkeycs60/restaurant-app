import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import MenuCard from '../../../components/MenuCard';
import Carousel from '../../../components/Carousel';
import clsx from 'clsx';

const MenuPresentation = () => {
	return (
		<div
			className={clsx(
				'm-auto flex h-screen w-[80%] flex-col justify-between p-8',
				'3xl:h-auto 3xl:my-[5vh] 3xl:w-[55%] 3xl:gap-[10vh]',
			)}
		>
			<div className='flex w-full items-end justify-between gap-[5vw]'>
				<MenuCard />
				<Carousel />
			</div>
			<div className='TRANSITION font-roboto flex w-full justify-center gap-6 text-3xl font-extralight uppercase tracking-wide text-gray-200 '>
				<BsArrow90DegDown size={18} className='translate-y-4' />
				<h2> Our Chef Commitment </h2>
				<BsArrow90DegUp size={18} className='translate-y-4 rotate-180' />
			</div>
		</div>
	);
};

export default MenuPresentation;
