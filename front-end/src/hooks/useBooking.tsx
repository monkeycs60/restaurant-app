import { z } from 'zod';

export const schema = z.object({
	experience: z.string(),
	guests: z.string(),
	date: z.string(),
});

export type BookingFormData = z.infer<typeof schema>;

export const useBooking = (
	setIsBooking: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const onSubmit = async (data: BookingFormData) => {
		localStorage.setItem('bookingData', JSON.stringify(data));
		setIsBooking(true);
	};
	return { onSubmit };
};
