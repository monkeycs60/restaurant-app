import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../styles/calendar.css';
import { add } from 'date-fns';
import { IoReturnDownBack } from 'react-icons/io5';
import { useAvailability } from '../hooks/useAvailability';
import { useBooking, BookingFormData, schema } from '../hooks/useBooking';
import { HeaderBooking } from './Booking/HeaderBooking';
import { ExperienceSelect } from './Booking/ExperienceSelect';
import { GuestSelect } from './Booking/GuestSelect';
import { PhoneNumberInput } from './Booking/PhoneNumberInput';

const FormBooking = ({
	setIsBooking,
}: {
	setIsBooking: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { onSubmit, setUsername, setEmail } = useBooking(setIsBooking);

	const { date, setDate, isMonday, middayTimes, eveningTimes } =
		useAvailability();

	const [selectedTime, setSelectedTime] = useState<Date | null>(null);
	const [selectedButton, setSelectedButton] = useState<string | null>(null);
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);

	useEffect(() => {
		const storedUsername = localStorage.getItem('userName');
		const storedEmail = localStorage.getItem('userMail');
		if (storedUsername) setUsername(storedUsername);
		if (storedEmail) setEmail(storedEmail);
	}, []);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<BookingFormData>({
		resolver: zodResolver(schema),
	});

	return (
		<>
			<HeaderBooking />
			<form
				className='font-roboto mt-[5vh] flex w-1/2 flex-col gap-8'
				onSubmit={handleSubmit(onSubmit)}
			>
				<ExperienceSelect register={register} errors={errors} />
				<GuestSelect register={register} errors={errors} />
				<PhoneNumberInput register={register} errors={errors} />
				<div className='flex flex-col justify-between gap-4'>
					{!isCalendarOpen ? (
						<span className='font-roboto flex justify-center text-lg'>
							Reservation date
						</span>
					) : (
						<span className='font-roboto flex justify-center text-lg'>
							{' '}
							Select your preferred time slot
						</span>
					)}
					{selectedTime && !isCalendarOpen ? (
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
					) : null}
					{isCalendarOpen ? (
						<div className='flex w-full flex-col gap-4'>
							<span className='flex justify-center italic'>Midday</span>
							<div className='grid grid-cols-4'>
								{middayTimes?.map((time, i) => (
									<div
										key={`midday-${i}`}
										className={`flex justify-center rounded-sm bg-gray-100 p-2 hover:bg-orange-300 ${
											selectedButton === time.toISOString()
												? 'rounded-sm bg-orange-300 p-2'
												: 'rounded-sm bg-gray-100 p-2 hover:bg-orange-300'
										} `}
									>
										<button
											type='button'
											onClick={() => {
												const dateTime = time;
												setDate({ ...date, dateTime: time });
												setValue('date', time.toISOString());
												setSelectedTime(dateTime);
												setSelectedButton(time.toISOString());
											}}
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
							<div className='grid grid-cols-4'>
								{eveningTimes?.map((time, i) => (
									<div
										key={`midday-${i}`}
										className={`flex justify-center rounded-sm bg-gray-100 p-2 hover:bg-orange-300 ${
											selectedButton === time.toISOString()
												? 'rounded-sm bg-orange-300 p-2'
												: 'rounded-sm bg-gray-100 p-2 hover:bg-orange-300'
										} `}
									>
										<button
											type='button'
											onClick={() => {
												const dateTime = time;
												setDate({ ...date, dateTime: time });
												setValue('date', time.toISOString());
												setSelectedTime(dateTime);
												setSelectedButton(time.toISOString());
											}}
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
								onClick={() => {
									setIsCalendarOpen(false);
								}}
							>
								<IoReturnDownBack className='h-6 w-6' />
							</button>
						</div>
					) : (
						<Calendar
							className='REACT-CALENDAR'
							view='month'
							minDate={add(new Date(), { hours: 2 })}
							onClickDay={(date) => {
								setDate({ ...date, justDate: date, dateTime: date });
								setIsCalendarOpen(true);
							}}
							tileDisabled={({ date }) => {
								return isMonday(date);
							}}
						/>
					)}
				</div>
				{errors.date && (
					<span className='text-blue-700'>Date and time is required</span>
				)}
				<button
					className='rounded-md bg-orange-600 p-3 text-xl uppercase text-white hover:bg-orange-700'
					type='submit'
				>
					Book
				</button>
			</form>
		</>
	);
};

export default FormBooking;
