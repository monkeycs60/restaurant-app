import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import useAuth from '../../hooks/useAuth';

const schema = z.object({
	email: z.string().email(),
	username: z
		.string()
		.min(3)
		.refine(
			(value) => /^[a-zA-Z0-9]+$/.test(value),
			'Username can only contain alphanumeric characters and no spaces',
		),
	password: z.string().min(8),
});

type RegisterFormData = z.infer<typeof schema>;

export interface RegisterProps {
	idPrefix?: string;
}

const Register = ({ idPrefix }: RegisterProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(schema),
	});

	const registerMutation = useAuth<RegisterFormData>('register');
	const onSubmit = (data: RegisterFormData) => {
		registerMutation.mutate(data, {
			onSuccess: (data) => {
				console.log(data);
			},
			onError: (error) => {
				console.log(error);
			},
		});
	};

	return (
		<div
			className={clsx(
				'flex h-[400px] justify-between rounded-xl bg-gray-400 p-12',
			)}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx('flex flex-col items-center justify-center')}
			>
				<h2
					className={clsx('text-center text-2xl font-bold text-gray-700')}
				>
					Register
				</h2>
				<div
					className={clsx(
						'mt-6 flex flex-col items-center justify-center gap-2',
					)}
				>
					<label htmlFor={idPrefix + 'register-email'}>Email</label>
					<input
						type='email'
						id={idPrefix + 'register-email'}
						{...register('email')}
					/>
					{typeof errors.email?.message === 'string' && (
						<p>{errors.email.message}</p>
					)}
				</div>
				<div
					className={clsx(
						'mt-6 flex flex-col items-center justify-center gap-2',
					)}
				>
					<label htmlFor={idPrefix + 'register-username'}>Username</label>
					<input
						type='text'
						id={idPrefix + 'register-username'}
						{...register('username')}
					/>
					{typeof errors.username?.message === 'string' && (
						<p>{errors.username.message}</p>
					)}
				</div>
				<div
					className={clsx(
						'mt-6 flex flex-col items-center justify-center gap-2',
					)}
				>
					<label htmlFor={idPrefix + 'register-password'}>Password</label>
					<input
						type='password'
						id={idPrefix + 'register-password'}
						{...register('password')}
					/>
					{typeof errors.password?.message === 'string' && (
						<p>{errors.password.message}</p>
					)}
				</div>

				<button
					type='submit'
					className={clsx(
						'mt-6 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700',
					)}
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
