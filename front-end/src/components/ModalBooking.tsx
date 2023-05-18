import { useRef, useEffect } from 'react';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useCookies } from 'react-cookie';
import FormBooking from './FormBooking';
import { LoginProps } from './Auth/Login';
import { RegisterProps } from './Auth/Register';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	Login?: React.ComponentType<LoginProps>;
	Register?: React.ComponentType<RegisterProps>;
	IdPrefix?: string;
}

const ModalBooking = ({
	isModalOpen,
	closeModal,
	Login: LoginComponent = Login,
	Register: RegisterComponent = Register,
	IdPrefix: idPrefix = '',
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
			className='concept-text-background fixed h-[80%] w-[60%] flex-col items-center rounded-lg'
			ref={dialogRef}
		>
			<button className='close-btn' onClick={closeModal}>
				&times;
			</button>

			{!cookies.token ? (
				<>
					<LoginComponent idPrefix={idPrefix} />
					<RegisterComponent idPrefix={idPrefix} />
				</>
			) : (
				<>
					<FormBooking />
				</>
			)}
		</dialog>
	);
};

export default ModalBooking;
