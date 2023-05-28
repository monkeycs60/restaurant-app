import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuthFormSubmit from '../../hooks/useAuthFormSubmit';
import { useState } from 'react';
import clsx from 'clsx';
const schema = z.object({
	phone: z
		.string()
		.min(10)
		.refine(
			(value) => /^[0-9]+$/.test(value),
			'Phone number can only contain numbers',
		),
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
	conditions: z
		.boolean()
		.refine((value) => value, 'You must agree to the General Conditions'),
});

type RegisterFormData = z.infer<typeof schema>;

interface RegisterProps {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterComponent = ({
	isLogin,
	setIsLogin,
	setIsSuccess,
}: RegisterProps) => {
	const [error, setError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = useAuthFormSubmit<RegisterFormData>(
		'register',
		setIsSuccess,
		setError,
	);
	return (
		<div
			className={clsx(
				'mx-auto my-[8vh] flex w-[90%]  flex-col gap-8 rounded-md bg-zinc-50 p-8',
				'lg:w-[65%] lg:my-8',
				'3xl:w-[40%]',
			)}
		>
			<h2 className='font-roboto text-center text-xl font-bold'>
				Create an account to finalize your reservation
			</h2>
			<form
				className='flex flex-col gap-2'
				onSubmit={handleSubmit(onSubmit)}
			>
				<label htmlFor='phone' className='flex justify-between'>
					Phone number
				</label>
				<input
					id='phone'
					type='text'
					placeholder='01234 567890'
					min='1'
					className='w-full rounded-lg border-2 border-zinc-600 px-4 py-2 placeholder:text-black'
					{...register('phone')}
				/>
				{errors.phone && (
					<span className='text-red-500'>{errors.phone.message}</span>
				)}
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
				<label htmlFor='confirm-password' className='flex justify-between'>
					Confirm password
				</label>
				<input
					id='confirm-password'
					type='password'
					placeholder='*********'
					min='1'
					className='w-full rounded-lg border-2 border-zinc-600 px-4 py-2 placeholder:text-black'
					{...register('confirmPassword')}
				/>
				{errors.confirmPassword && (
					<span className='text-red-500'>
						{errors.confirmPassword.message}
					</span>
				)}
				<label htmlFor='conditions' className='flex justify-start gap-4'>
					<input
						type='checkbox'
						id='conditions'
						{...register('conditions')}
					/>
					I agree to the General Conditions
				</label>
				{errors.conditions && (
					<span className='text-red-500'>{errors.conditions.message}</span>
				)}
				{error && <div className='text-red-500'>{error}</div>}
				<button
					type='submit'
					className='mt-4 w-full rounded bg-orange-500 p-2 text-white hover:bg-orange-700'
				>
					Create Account
				</button>

				<div className='mt-4 text-center'>
					Already have an account?{' '}
					<span
						className='cursor-pointer font-bold text-orange-900'
						onClick={() => setIsLogin(!isLogin)}
					>
						Login here
					</span>
				</div>
			</form>
		</div>
	);
};
