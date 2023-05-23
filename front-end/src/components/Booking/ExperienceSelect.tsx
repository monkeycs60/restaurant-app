import { BookProps } from './types';
import { useState, useEffect } from 'react';

export const ExperienceSelect = ({ register, errors, watch }: BookProps) => {
	const [selectedExperience, setSelectedExperience] = useState('');
	const watchExperience = watch('experience');

	useEffect(() => {
		setSelectedExperience(watchExperience);
	}, [watchExperience]);

	return (
		<fieldset className='flex flex-col gap-2'>
			<select
				{...register('experience', { required: true })}
				className='custom-select rounded-lg px-4 py-2'
			>
				<option value=''>Select an experience</option>
				<option value='penumbra'>Penumbra Path</option>
				<option value='pitch_black'>Pitch Black Experience</option>
			</select>
			{selectedExperience === 'penumbra' && (
				<span className='px-2 text-sm italic text-gray-700'>
					Come and dine blindfolded. Enjoy an unique culinary experience.
					Menu priced at £55 per person.
				</span>
			)}
			{selectedExperience === 'pitch_black' && (
				<span className='px-2 text-sm italic text-gray-700'>
					The ultimate experience. Explore our dark room and be immersed in
					in complete darkness. Menu priced at £70 per person.
				</span>
			)}

			{errors.experience && (
				<span className='text-blue-700'>Experience is required</span>
			)}
		</fieldset>
	);
};
