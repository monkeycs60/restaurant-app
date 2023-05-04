<Modal
	isOpen={modalIsOpen}
	onRequestClose={() => setModalIsOpen(false)}
	className='modal'
	overlayClassName='modal-overlay'
	ariaHideApp={false}
>
	<h2 className='font-handwriting text-3xl'>Book your table</h2>
	<form className='font-classic mt-[5vh] flex flex-col gap-8'>
		<label className='flex  justify-between'>
			<span>Number of guests:</span>
			<input type='number' min='1' className='w-1/2' />
		</label>

		<label className='flex  justify-between'>
			<span>Date and time:</span>
			<input type='datetime-local' className='w-1/2' />
		</label>

		<label className='flex flex-col justify-between gap-4'>
			<span> Food allergies:</span>
			<textarea className='p-2' />
		</label>

		<fieldset className='flex flex-col'>
			<legend className='mb-2'>Pick your experience:</legend>
			<label>
				<input
					type='radio'
					name='experience'
					value='penumbra'
					className='mr-2'
				/>
				Penumbra Path: £55 per person (blindfold)
			</label>
			<label>
				<input
					type='radio'
					name='experience'
					value='pitch_black'
					className='mr-2'
				/>
				Pitch Black Experience: £70 per person (dark room)
			</label>
		</fieldset>

		<button
			className=' bg-gray-800 p-3 text-xl uppercase hover:bg-gray-400 hover:text-gray-900'
			type='submit'
		>
			Book
		</button>
	</form>
</Modal>;
