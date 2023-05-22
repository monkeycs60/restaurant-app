import { BookProps } from './types';

export const ExperienceSelect = ({ register, errors }: BookProps) => {
	return (
		<fieldset className='flex flex-col gap-2'>
			<select
				{...register('experience', { required: true })}
				className='custom-select rounded-lg px-4 py-2'
			>
				<option value=''>Select an experience</option>
				<option value='penumbra'>
					Penumbra Path: £55 per person [blindfold]
				</option>
				<option value='pitch_black'>
					Pitch Black Experience: £70 per person [dark room]
				</option>
			</select>

			{errors.experience && (
				<span className='text-blue-700'>Experience is required</span>
			)}
		</fieldset>
	);
};
