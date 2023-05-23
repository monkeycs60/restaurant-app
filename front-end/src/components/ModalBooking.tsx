import { useRef, useEffect, useState } from 'react';
import FormBooking from './FormBooking';
import { LoginProps } from './Auth/Login';
import { RegisterProps } from './Auth/Register';
import SignUp from './SignUp';
import SuccessPage from './Booking/SuccessPage';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	Login?: React.ComponentType<LoginProps>;
	Register?: React.ComponentType<RegisterProps>;
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
			className='concept-text-background fixed h-[80%] w-[40%] flex-col items-center rounded-lg'
			ref={dialogRef}
		>
			<button
				className='close-btn'
				onClick={() => {
					closeModal();
					setIsBooking(false);
					setIsSuccess(false);
					localStorage.removeItem('bookingId');
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
