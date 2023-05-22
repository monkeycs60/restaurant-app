import { BookProps } from './types';

export const GuestSelect = ({ register, errors }: BookProps) => (
	<label className='flex justify-between'>
		<select
			className='w-full rounded-lg px-4 py-2'
			defaultValue=''
			{...register('guests', { required: true })}
		>
			<option value='' disabled>
				Number of guests
			</option>
			{Array.from({ length: 8 }, (_, i) => (
				<option className='rounded-none' key={i + 1} value={i + 1}>
					{i + 1}
				</option>
			))}
		</select>
		{errors.guests && (
			<span className='text-blue-700'>Number of guests is required</span>
		)}
	</label>
);
