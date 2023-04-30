const BookNow = () => {
	return (
		<div className='font-classic m-auto mb-[5vh] mt-[2vh] flex w-2/3 flex-col items-center gap-[4vh] bg-amber-500/30 p-8 text-center text-gray-100'>
			<p className='text-base'>Curious? Eager to taste more?</p>
			<p className='text-lg'>
				Yearning to unravel these mysteries? Longing to embark on this
				culinary adventure?
			</p>
			<p className='text-2xl'>Then</p>
			<button
				className='w-1/4 bg-amber-500/80 px-[1vw] py-[1vh] text-3xl font-bold uppercase text-black transition-all duration-300 ease-in-out hover:scale-105 hover:text-white '
				style={{
					boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.5)',
				}}
			>
				Book Now
			</button>
		</div>
	);
};

export default BookNow;
