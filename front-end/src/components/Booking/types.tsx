import { FieldError, useForm, DeepMap, UseFormRegister } from 'react-hook-form';
import { BookingFormData } from '../../hooks/useBooking';

export type BookProps = {
	register: UseFormRegister<BookingFormData>;
	errors: {
		experience?: FieldError;
		phone?: FieldError;
		guests?: FieldError;
		date?: FieldError;
	};
};
