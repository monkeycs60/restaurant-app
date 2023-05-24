import { useCookies } from 'react-cookie';
import useAuth from './useAuth';
import { z } from 'zod';

export const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export type AuthFormData = z.infer<typeof schema>;

const useAuthFormSubmit = <
	FormData extends { email: string; password: string },
>(
	mutationKey: 'login' | 'register',
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const [_, setCookieOne] = useCookies(['token']);
	const [__, setCookieTwo] = useCookies(['userID']);

	const authMutation = useAuth<FormData>(mutationKey);

	return (formData: FormData) => {
		const bookingData = JSON.parse(
			localStorage.getItem('bookingData') || '{}',
		);
		const dataToSend = {
			...formData,
			bookingData,
		};
		authMutation.mutate(dataToSend, {
			onSuccess: (data: any) => {
				setIsSuccess(true);
				setCookieOne('token', data.token);
				setCookieTwo(
					'userID',
					mutationKey === 'login' ? data.userID : data.newUser?._id,
				);
				localStorage.setItem('bookingId', data.newBooking._id);
				localStorage.removeItem('bookingData');
			},
			onError: (error: any) => {
				console.log(error);
			},
		});
	};
};

export default useAuthFormSubmit;
