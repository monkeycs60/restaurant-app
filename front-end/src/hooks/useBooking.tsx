import axios from 'axios';
import { useState } from 'react';
import { z } from 'zod';

export const schema = z.object({
	experience: z.string(),
	phone: z
		.string()
		.min(10)
		.refine(
			(value) => /^[0-9]+$/.test(value),
			'Phone number can only contain numbers',
		),
	guests: z.string(),
	date: z.string(),
});

export type BookingFormData = z.infer<typeof schema>;

export const useBooking = (
	setIsBooking: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit = async (data: BookingFormData) => {
		const BookingFormDataPlusDetails = {
			username,
			email,
			...data,
		};
		try {
			const response = await axios.post(
				'http://localhost:3001/booking',
				BookingFormDataPlusDetails,
			);
			console.log(response.data);

			localStorage.setItem('experience', data.experience);
			localStorage.setItem('guests', data.guests);
			localStorage.setItem('date', data.date);

			setIsBooking(true);
		} catch (error) {
			console.log(error);
		}
	};

	return { onSubmit, setUsername, setEmail };
};
