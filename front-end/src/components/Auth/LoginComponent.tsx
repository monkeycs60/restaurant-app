import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuth from '../../hooks/useAuth';
import { useCookies } from 'react-cookie';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

type LoginFormData = z.infer<typeof schema>;

interface LoginProps {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginComponent = ({ isLogin, setIsLogin }: LoginProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(schema),
	});

	const [_, setCookieOne] = useCookies(['token']);
	const [__, setCookieTwo] = useCookies(['userID']);

	const loginMutation = useAuth<LoginFormData>('login');

	const onSubmit = (data: LoginFormData) => {
		const bookingData = JSON.parse(
			localStorage.getItem('bookingData') || '{}',
		);
		const dataToSend = {
			...data,
			bookingData,
		};
		loginMutation.mutate(dataToSend, {
			onSuccess: (data) => {
				console.log('data from login', data);

				// infos du login
				setCookieOne('token', data.token);
				setCookieTwo('userID', data.user._id);

				localStorage.removeItem('bookingData');
			},
			onError: (error) => {
				console.log(error);
			},
		});
	};
	return (
		<div className='mx-auto my-8 flex w-[65%] flex-col gap-8 rounded-md bg-zinc-50 p-8'>
			<h2 className='font-roboto text-center text-xl font-bold'>
				Login to your account to finalize your reservation
			</h2>
			<form
				className='flex flex-col gap-2'
				onSubmit={handleSubmit(onSubmit)}
			>
				<label htmlFor='email' className='flex justify-between'>
					Email
				</label>
				<input
					id='email'
					type='text'
					placeholder='your-address@mail.com'
					min='1'
					className='w-full rounded-lg border-2 border-zinc-600 px-4 py-2 placeholder:text-black'
					{...register('email')}
				/>
				{errors.email && (
					<span className='text-red-500'>{errors.email.message}</span>
				)}
				<label htmlFor='password' className='flex justify-between'>
					Password
				</label>
				<input
					id='password'
					type='password'
					placeholder='*********'
					min='1'
					className='w-full rounded-lg border-2 border-zinc-600 px-4 py-2 placeholder:text-black'
					{...register('password')}
				/>
				{errors.password && (
					<span className='text-red-500'>{errors.password.message}</span>
				)}
				<button
					type='submit'
					className='mt-4 w-full rounded bg-orange-500 p-2 text-white hover:bg-orange-700'
				>
					Login to your account
				</button>

				<div className='mt-4 text-center'>
					Not registered yet?{' '}
					<span
						className='cursor-pointer font-bold text-orange-900'
						onClick={() => setIsLogin(!isLogin)}
					>
						Register here
					</span>
				</div>
			</form>
		</div>
	);
};
