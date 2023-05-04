import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import useAuth from '../../hooks/useAuth';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
	username: z
		.string()
		.min(3)
		.refine(
			(value) => /^[a-zA-Z0-9]+$/.test(value),
			'Username can only contain alphanumeric characters and no spaces',
		),
	password: z.string().min(8),
});

export type LoginFormData = z.infer<typeof schema>;

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(schema),
	});

	const navigate = useNavigate();
	const loginMutation = useAuth<LoginFormData>('login');
	const [_, setCookie] = useCookies(['token']);

	const onSubmit = (data: LoginFormData) => {
		loginMutation.mutate(data, {
			onSuccess: (data, response) => {
				console.log(data);
				console.log(response);
				setCookie('token', data.token);
				window.localStorage.setItem('userName', response.username);
				window.localStorage.setItem('userID', data.userID);
				// navigate('/homepage');
				// window.location.reload();
			},
			onError: (error) => {
				console.log(error);
			},
		});
	};

	return (
		<div className={clsx('flex h-[400px] rounded-xl bg-gray-400 p-12')}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx('flex flex-col items-center justify-between')}
			>
				<h2
					className={clsx('text-center text-2xl font-bold text-gray-700')}
				>
					Login Form
				</h2>
				<div
					className={clsx(
						'mt-6 flex flex-col items-center justify-center gap-2',
					)}
				>
					<label htmlFor='login-username'>Username</label>
					<input
						type='text'
						id='login-username'
						{...register('username')}
					/>
					{typeof errors.username?.message === 'string' && (
						<p>{errors.username.message}</p>
					)}
				</div>
				<div
					className={clsx(
						'flex flex-col items-center justify-center gap-2',
					)}
				>
					<label htmlFor='login-password'>Password</label>
					<input
						type='password'
						id='login-password'
						{...register('password')}
					/>
					{typeof errors.password?.message === 'string' && (
						<p>{errors.password.message}</p>
					)}
				</div>

				<button
					type='submit'
					className={clsx(
						'mt-6 gap-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700',
					)}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
