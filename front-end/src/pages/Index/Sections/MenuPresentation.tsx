import { logos } from '../../../utils/logos';
import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';
import MenuCard from '../../../components/MenuCard';
import Carousel from '../../../components/Carousel';
import { useState, useEffect } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const MenuPresentation = () => {
	const [current, setCurrent] = useState(4);
	console.log(current);
	const handlePrevPhoto = () => {
		if (current <= 0) {
			setCurrent(logos.length - 1);
		} else {
			setCurrent((prev) => prev - 1);
		}
	};

	const handleNextPhoto = () => {
		if (current >= logos.length - 1) {
			setCurrent(0);
		} else {
			setCurrent((prev) => prev + 1);
		}
	};
	return (
		<div className='flex h-screen flex-col'>
			<div className='flex'>
				<MenuCard />
				<div className='CAROUSEL m-auto flex h-[40vh] w-[80%] items-center justify-center'>
					<IoIosArrowRoundBack
						size={18}
						className='bg-blue-700'
						onClick={handlePrevPhoto}
					/>
					{logos.map((logo) =>
						logo.key === current ? (
							<img
								key={logo.key}
								src={logo.src}
								alt={logo.alt}
								className='h-1/2 w-1/2 object-cover'
							/>
						) : null,
					)}
					<IoIosArrowRoundForward
						size={18}
						className='bg-blue-700'
						onClick={handleNextPhoto}
					/>
				</div>
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
