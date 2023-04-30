const BookNow = () => {
	return (
		<div className='font-classic mb-[5vh] mt-[2vh] flex w-full flex-col items-center gap-[4vh] text-center text-amber-400'>
			<p className='text-base'>Intrigued? Eager to learn more?</p>
			<p className='text-lg'>
				Yearning to unravel these mysteries? Longing to embark on this
				culinary adventure?
			</p>
			<p className='text-2xl'>Then</p>
			<button className='w-1/4 rounded-lg bg-amber-500/80 px-[2vw] py-[2vh] text-3xl font-bold uppercase text-black hover:scale-105 hover:text-white'>
				Book Now
			</button>
		</div>
	);
};

export default BookNow;
