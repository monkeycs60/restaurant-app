import { BookProps } from './types';

export const PhoneNumberInput = ({ register, errors }: BookProps) => (
	<label className='flex justify-between'>
		<input
			type='text'
			placeholder='Phone number'
			min='1'
			className='w-full rounded-lg px-4 py-2 placeholder:text-black'
			{...register('phone', { required: true })}
		/>
		{errors.phone && (
			<span className='text-blue-700'>Phone number is required</span>
		)}
	</label>
);
