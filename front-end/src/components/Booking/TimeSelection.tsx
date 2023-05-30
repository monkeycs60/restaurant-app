import { IoReturnDownBack } from 'react-icons/io5';
import { BookingFormData } from '../../hooks/useBooking';
import { UseFormSetValue } from 'react-hook-form/dist/types';

type TimeSelectionProps = {
	currentDate: any;
	middayTimes?: Date[];
	eveningTimes?: Date[] | null;
	selectedButton: string | null;
	setSelectedButton: (time: string | null) => void;
	setDate: (date: any) => void;
	setValue: UseFormSetValue<BookingFormData>;
	setSelectedTime: (time: Date | null) => void;
	setIsCalendarOpen: (isOpen: boolean) => void;
};

const TimeSelection = ({
	currentDate,
	middayTimes,
	eveningTimes,
	selectedButton,
	setSelectedButton,
	setDate,
	setValue,
	setSelectedTime,
	setIsCalendarOpen,
}: TimeSelectionProps) => {
	const handleTimeSelection = (time: Date) => {
		const dateTime = time;
		setDate({ ...currentDate, dateTime: time });
		setValue('date', time.toISOString());
		setSelectedTime(dateTime);
		setSelectedButton(time.toISOString());
	};

	return (
		<div className='flex w-full flex-col gap-4'>
			<span className='flex justify-center italic'>Midday</span>
			<div className='grid grid-cols-4 gap-2'>
				{middayTimes?.map((time, i) => (
					<div
						key={`midday-${i}`}
						className={`flex justify-center rounded-sm bg-gray-100 hover:bg-orange-300 ${
							selectedButton === time.toISOString()
								? 'rounded-sm bg-orange-300 '
								: 'rounded-sm bg-gray-100 hover:bg-orange-300'
						} `}
					>
						<button
							className='h-full w-full rounded-lg p-1 lg:p-2'
							type='button'
							onClick={() => handleTimeSelection(time)}
						>
							{time.toLocaleTimeString('en-US', {
								hour: 'numeric',
								minute: 'numeric',
								hour12: true,
							})}
						</button>
					</div>
				))}
			</div>
			<span className='flex justify-center italic'>Evening</span>
			<div className='grid grid-cols-4 gap-2'>
				{eveningTimes?.map((time, i) => (
					<div
						key={`evening-${i}`}
						className={`flex justify-center rounded-sm bg-gray-100 hover:bg-orange-300 ${
							selectedButton === time.toISOString()
								? 'rounded-sm bg-orange-300'
								: 'rounded-sm bg-gray-100 hover:bg-orange-300'
						} `}
					>
						<button
							className='h-full w-full rounded-lg p-1 lg:p-2'
							type='button'
							onClick={() => handleTimeSelection(time)}
						>
							{time.toLocaleTimeString('en-US', {
								hour: 'numeric',
								minute: 'numeric',
								hour12: true,
							})}
						</button>
					</div>
				))}
			</div>
			<button
				type='button'
				className='m-auto flex w-1/2 items-center justify-center bg-gray-400 p-1'
				onClick={() => setIsCalendarOpen(false)}
			>
				<IoReturnDownBack className='h-6 w-6' />
			</button>
		</div>
	);
};

export default TimeSelection;
