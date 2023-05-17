const MenuCard = () => {
	return (
		<div className='MENU concept-text-background font-roboto flex flex-col gap-6 rounded-md p-8'>
			<div className='flex flex-col items-center gap-4'>
				<h2>
					{' '}
					<span className='font-dancing text-3xl'> Chiaroscuro </span>
					<span className='font-playfair text-xl font-bold uppercase'>
						menu
					</span>
				</h2>
				<h4 className='text-xs uppercase'>£45 per guest</h4>
			</div>
			<div className='flex flex-col items-center justify-between gap-0'>
				<div className='flex flex-col items-center justify-between gap-4'>
					<div className='flex flex-col gap-2 text-center'>
						<h3 className='font-playfair mt-2 text-sm font-bold uppercase'>
							Philosophizing with a snorkel
						</h3>
						<p className='text-sm italic'>Fresh, smooth and crispy</p>
					</div>
					<p className='text-center'>
						Deconstructed exploration of a marine ecosystem
					</p>
				</div>
				<div className='h-[66%] w-[1px] bg-gray-900'></div>
				<div className='flex flex-col items-center justify-center gap-4 p-4'>
					<div className='flex flex-col items-center justify-center gap-2 text-center'>
						<h3 className='text-sm font-bold uppercase'>*</h3>
						<h3 className='font-playfair text-sm font-bold uppercase'>
							Epicurian expedition to distant destinations
						</h3>
						<p className='text-sm italic'>Tender, spicy and savoury</p>
					</div>
					<p className='text-center'>
						A touch of spice, a zest of adventure and an immense change of
						scenery
					</p>
				</div>
				<div className='h-[66%] w-[1px] bg-gray-900'></div>

				<div className='flex flex-col items-center justify-center gap-4'>
					<div className='flex flex-col gap-2 text-center'>
						<h3 className='text-sm font-bold uppercase'>*</h3>
						<h3 className='font-playfair text-sm font-bold uppercase'>
							Linear regression
						</h3>
						<p className='text-sm italic'>
							Decadent, sweet and comforting
						</p>
					</div>
					<p className='text-center'>
						Innocence, wonder, nostalgia, laughter and cherished memories
					</p>
				</div>
			</div>
		</div>
	);
};

export default MenuCard;
