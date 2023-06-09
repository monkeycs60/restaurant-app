import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/calendar.css';
import { add } from 'date-fns';
import { useAvailability } from '../hooks/useAvailability';
import { useBooking, BookingFormData, schema } from '../hooks/useBooking';
import { HeaderBooking } from './Booking/HeaderBooking';
import { ExperienceSelect } from './Booking/ExperienceSelect';
import { GuestSelect } from './Booking/GuestSelect';
import { ButtonBooking } from './Booking/ButtonBooking';
import TimeSelection from './Booking/TimeSelection';
import TimeDisplayed from './Booking/TimeDisplayed';

const FormBooking = ({
	setIsBooking,
}: {
	setIsBooking: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { onSubmit } = useBooking(setIsBooking);

	const { date, setDate, isMonday, middayTimes, eveningTimes } =
		useAvailability();

	const [selectedTime, setSelectedTime] = useState<Date | null>(null);
	const [selectedButton, setSelectedButton] = useState<string | null>(null);
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		watch,
	} = useForm<BookingFormData>({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const experience = watch('experience');
	const guests = watch('guests');
	const dateCheck = watch('date');

	return (
		<>
			<HeaderBooking />
			<form
				className='font-roboto 3xl:gap-[3vh] mt-[5vh] flex w-[90%] flex-col gap-[6vh] lg:w-2/3 lg:gap-8'
				onSubmit={(e) => {
					if (!experience || !guests || !dateCheck) {
						e.preventDefault();
						if (!experience || experience === '') {
							alert('Please select an experience.');
						} else if (!guests) {
							alert('Please select the number of guests.');
						} else if (!dateCheck) {
							alert('Please select a date.');
						} else {
							alert('Please fill in all required fields.');
						}
					} else {
						handleSubmit(onSubmit)(e);
					}
				}}
			>
				<ExperienceSelect
					register={register}
					errors={errors}
					watch={watch}
				/>
				<GuestSelect register={register} errors={errors} />
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
						<TimeDisplayed selectedTime={selectedTime} />
					) : null}
					{isCalendarOpen ? (
						<TimeSelection
							currentDate={date}
							middayTimes={middayTimes}
							eveningTimes={eveningTimes}
							selectedButton={selectedButton}
							setSelectedButton={setSelectedButton}
							setDate={setDate}
							setValue={setValue}
							setSelectedTime={setSelectedTime}
							setIsCalendarOpen={setIsCalendarOpen}
						/>
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
				<ButtonBooking />
			</form>
		</>
	);
};

export default FormBooking;
