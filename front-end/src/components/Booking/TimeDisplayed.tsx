interface TimeDisplayedProps {
	selectedTime: Date;
}

const TimeDisplayed = ({ selectedTime }: TimeDisplayedProps) => {
	return (
		<span className='font-roboto flex justify-center border-b-2  border-orange-600 text-lg'>
			{selectedTime.toLocaleString('en-GB', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			})}
			{' at '}
			<span className='ml-2 border-b-2 text-xl font-bold'>
				{selectedTime.toLocaleString('en-GB', {
					hour: 'numeric',
					minute: 'numeric',
				})}
			</span>
		</span>
	);
};

export default TimeDisplayed;
