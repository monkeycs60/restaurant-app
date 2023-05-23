interface RegisterProps {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginComponent = ({ isLogin, setIsLogin }: RegisterProps) => {
	return (
		<div className='mx-auto my-8 flex w-[40%] flex-col gap-8'>
			<h2 className='font-roboto text-center text-xl font-bold'>
				Login to your account to finalize your reservation
			</h2>
			<form className='flex flex-col gap-2'>
				<label htmlFor='email' className='flex justify-between'>
					Email
				</label>
				<input
					id='email'
					type='text'
					placeholder='your-address@mail.com'
					min='1'
					className='w-full rounded-lg px-4 py-2 placeholder:text-black'
				/>
				<label htmlFor='password' className='flex justify-between'>
					Password
				</label>
				<input
					id='password'
					type='password'
					placeholder='*********'
					min='1'
					className='w-full rounded-lg px-4 py-2 placeholder:text-black'
				/>
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
