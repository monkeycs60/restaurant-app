import { useRef, useEffect } from 'react';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useCookies } from 'react-cookie';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	Login?: React.ComponentType;
	Register?: React.ComponentType;
}

const ModalBooking = ({
	isModalOpen,
	closeModal,
	Login: LoginComponent = Login,
	Register: RegisterComponent = Register,
}: ModalProps) => {
	const [cookies] = useCookies(['token']);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isModalOpen) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isModalOpen]);

	return (
		<dialog
			className='modal-booking items-center justify-around bg-red-500 '
			ref={dialogRef}
		>
			<button className='close-btn' onClick={closeModal}>
				&times;
			</button>

			{!cookies.token ? (
				<>
					<LoginComponent />
					<RegisterComponent />
				</>
			) : (
				<>
					<div className='flex flex-col items-center justify-center'>
						<h1 className='text-3xl font-bold text-white'>
							Hello and book a table
						</h1>
					</div>
				</>
			)}
		</dialog>
	);
};

export default ModalBooking;
