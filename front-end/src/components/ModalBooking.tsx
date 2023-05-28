import { useRef, useEffect, useState } from 'react';
import FormBooking from './FormBooking';
import SignUp from './SignUp';
import SuccessPage from './Booking/SuccessPage';
import clsx from 'clsx';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	IdPrefix?: string;
}

const ModalBooking = ({ isModalOpen, closeModal }: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isModalOpen) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isModalOpen]);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isBooking, setIsBooking] = useState(false);

	return (
		<dialog
			className={clsx(
				'concept-text-background fixed h-[100%] w-[100%] flex-col items-center rounded-lg',
				'lg-[80%] lg:w-[40%]',
				'3xl:h-[60%]',
			)}
			ref={dialogRef}
		>
			<button
				className='close-btn'
				onClick={() => {
					closeModal();
					setIsBooking(false);
					setIsSuccess(false);
					localStorage.removeItem('bookingId');
					localStorage.removeItem('bookingData');
				}}
			>
				&times;
			</button>

			{isSuccess ? (
				<SuccessPage />
			) : isBooking ? (
				<SignUp setIsSuccess={setIsSuccess} />
			) : (
				<FormBooking setIsBooking={setIsBooking} />
			)}
		</dialog>
	);
};

export default ModalBooking;
