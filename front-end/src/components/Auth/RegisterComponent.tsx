interface RegisterProps {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterComponent = ({ isLogin, setIsLogin }: RegisterProps) => {
	return (
		<div className='mx-auto my-8 flex w-[40%] flex-col gap-8'>
			<h2 className='font-roboto text-center text-xl font-bold'>
				Create an account to finalize your reservation
			</h2>
			<form className='flex flex-col gap-2'>
				<label htmlFor='phone' className='flex justify-between'>
					Phone number
				</label>
				<input
					id='phone'
					type='text'
					placeholder='01234 567890'
					min='1'
					className='w-full rounded-lg px-4 py-2 placeholder:text-black'
				/>

				<label htmlFor='email' className='flex justify-between'>
					Email
				</label>
				<input
					id='email'
					type='text'
					placeholder='address@mail.com'
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
				<label htmlFor='confirm-password' className='flex justify-between'>
					Confirm password
				</label>
				<input
					id='confirm-password'
					type='password'
					placeholder='*********'
					min='1'
					className='w-full rounded-lg px-4 py-2 placeholder:text-black'
				/>
				<label htmlFor='conditions' className='flex justify-start gap-4'>
					<input type='checkbox' id='conditions' />I agree to the General
					Conditions
				</label>

				<button
					type='submit'
					className='w-full mt-4 rounded bg-orange-500 p-2 text-white hover:bg-orange-700'
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
