import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../styles/calendar.css';
import { add } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { IoReturnDownBack } from 'react-icons/io5';
import { fetchBookedDates } from '../services/api';
import { useAvailability } from '../hooks/useAvailability';

interface DateType {
	justDate: Date | null;
	dateTime: Date | null;
}

const schema = z.object({
	experience: z.string(),
	phone: z
		.string()
		.min(10)
		.refine(
			(value) => /^[0-9]+$/.test(value),
			'Phone number can only contain numbers',
		),
	guests: z.string(),
	date: z.string(),
});

export type BookingFormData = z.infer<typeof schema>;
const FormBooking = ({
	setIsBooking,
}: {
	setIsBooking: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { date, setDate, times, isMonday, middayTimes, eveningTimes } =
		useAvailability();
	console.log('times', times);

	const [selectedTime, setSelectedTime] = useState<Date | null>(null);

	const [selectedButton, setSelectedButton] = useState<string | null>(null);

	const [isCalendarOpen, setIsCalendarOpen] = useState(false);

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

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

	const onSubmit = async (data: BookingFormData) => {
		const BookingFormDataPlusDetails = {
			username,
			email,
			...data,
		};
		try {
			const response = await axios.post(
				'http://localhost:3001/booking',
				BookingFormDataPlusDetails,
			);
			console.log(response.data);

			localStorage.setItem('experience', data.experience);
			localStorage.setItem('guests', data.guests);
			localStorage.setItem('date', data.date);

			setIsBooking(true);
		} catch (error) {
			console.log(error);
		}
	};
	const {
		data: bookedDates,
		error,
		isLoading,
	} = useQuery<Date[], Error>(['bookedDates'], fetchBookedDates);

	return (
		<>
			<div className='flex flex-col items-center justify-center gap-10'>
				<h2 className='font-dancing text-5xl font-bold text-orange-600'>
					Chiaroscuro
				</h2>
			</div>
			<form
				className='font-roboto mt-[5vh] flex w-1/2 flex-col gap-8'
				onSubmit={handleSubmit(onSubmit)}
			>
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
				</label>
				{errors.guests && (
					<span className='text-blue-700'>
						Number of guests is required
					</span>
				)}
				<label className='flex justify-between'>
					<input
						type='text'
						placeholder='Phone number'
						min='1'
						className='w-full rounded-lg px-4 py-2 placeholder:text-black'
						{...register('phone', { required: true })}
					/>
				</label>
				{errors.phone && (
					<span className='text-blue-700'>Phone number is required</span>
				)}
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
