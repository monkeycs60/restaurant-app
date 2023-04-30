import { useState } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';

const BookNow = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className='font-classic m-auto mb-[5vh] mt-[2vh] flex flex-col items-center gap-[4vh] bg-amber-500/30 p-8 text-center text-gray-100 xl:w-2/3'>
			<p className='text-base'>Curious? Eager to taste more?</p>
			<p className='text-lg'>
				Yearning to unravel these mysteries? Longing to embark on this
				culinary adventure?
			</p>
			<p className='text-2xl'>Then</p>
			<button
				className='bg-amber-500/80 px-[1vw] py-[1vh] text-3xl font-bold uppercase text-black transition-all duration-300 ease-in-out hover:scale-105 hover:text-white xl:w-1/4 '
				style={{
					boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.5)',
				}}
				onClick={() => setModalIsOpen(true)}
			>
				Book Now
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				className='modal'
				overlayClassName='modal-overlay'
				ariaHideApp={false}
			>
				<h2 className='font-handwriting text-3xl'>Réservez votre table</h2>
				<form className='font-classic mt-[5vh] flex flex-col gap-8'>
					<label className='flex  justify-between'>
						<span> Nombre de personnes : </span>
						<input type='number' min='1' className='w-1/2' />
					</label>

					<label className='flex  justify-between'>
						<span>Date et heure :</span>
						<input type='datetime-local' className='w-1/2' />
					</label>

					<label className='flex flex-col justify-between gap-4'>
						<span> Allergies alimentaires :</span>
						<textarea className='p-2' />
					</label>

					<fieldset className='flex flex-col'>
						<legend className='mb-2'>
							Choisissez votre expérience :
						</legend>
						<label>
							<input type='radio' name='experience' value='penumbra' />
							Penumbra Path: £55 per person (blindfold)
						</label>
						<label>
							<input
								type='radio'
								name='experience'
								value='pitch_black'
							/>
							Pitch Black Experience: £70 per person (dark room)
						</label>
					</fieldset>

					<button
						className=' bg-gray-800 p-3 text-xl hover:bg-gray-400 hover:text-gray-900'
						type='submit'
					>
						Réserver
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default BookNow;
