import { FieldError, UseFormRegister } from 'react-hook-form';
import { BookingFormData } from '../../hooks/useBooking';

export type BookProps = {
	register: UseFormRegister<BookingFormData>;
	errors: {
		experience?: FieldError;
		guests?: FieldError;
		date?: FieldError;
	};
	watch?: any;
};
