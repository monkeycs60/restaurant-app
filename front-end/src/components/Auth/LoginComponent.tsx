import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuthFormSubmit from '../../hooks/useAuthFormSubmit';
import { AuthFormData, schema } from '../../hooks/useAuthFormSubmit';
import { useState } from 'react';
import clsx from 'clsx';

interface LoginProps {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginComponent = ({
	isLogin,
	setIsLogin,
	setIsSuccess,
}: LoginProps) => {
	const [error, setError] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = useAuthFormSubmit<AuthFormData>(
		'login',
		setIsSuccess,
		setError,
	);

	return (
		<div
			className={clsx(
				'font-roboto mx-auto my-8 flex w-[65%] flex-col gap-8 rounded-md bg-zinc-50 p-8',
				'3xl:w-[40%]',
			)}
		>
			<h2 className='text-center text-xl font-bold'>
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
					placeholder='address@mail.com'
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
				{error && <div className='text-red-500'>{error}</div>}
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
