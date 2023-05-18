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

type BookingFormData = z.infer<typeof schema>;
const FormBooking = () => {
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
		} catch (error) {
			console.log(error);
		}
	};

	async function fetchBookedDates() {
		try {
			const response = await axios.get('http://localhost:3001/booking');
			return response.data.map(
				(booking: BookingFormData) => new Date(booking.date),
			);
		} catch (error) {
			throw new Error('Error fetching booked dates');
		}
	}

	const {
		data: bookedDates,
		error,
		isLoading,
	} = useQuery<Date[], Error>(['bookedDates'], fetchBookedDates);

	const [date, setDate] = useState<DateType>({
		justDate: null,
		dateTime: null,
	});
	const getTimes = () => {
		if (!date.justDate) return;

		const { justDate } = date;

		const dayOfWeek = justDate.getDay();
		if (dayOfWeek === 1) return [];

		const lunchStart = add(justDate, { hours: 12 });
		const lunchEnd = add(justDate, { hours: 14 });
		const dinnerStart = add(justDate, { hours: 19 });
		const dinnerEnd = add(justDate, { hours: 22, minutes: 30 });
		const interval = 30;

		const times = [];

		// Ajout des créneaux pour le déjeuner
		for (
			let index = lunchStart;
			index < lunchEnd;
			index = add(index, { minutes: interval })
		) {
			times.push(index);
		}

		// Ajout des créneaux pour le dîner
		if (dayOfWeek !== 0) {
			for (
				let index = dinnerStart;
				index < dinnerEnd;
				index = add(index, { minutes: interval })
			) {
				times.push(index);
			}
		}

		const availableTimes = times.filter(
			(time) =>
				!bookedDates?.some(
					(bookedDate) =>
						bookedDate.getHours() === time.getHours() &&
						bookedDate.getMinutes() === time.getMinutes() &&
						bookedDate.getDate() === time.getDate() &&
						bookedDate.getMonth() === time.getMonth() &&
						bookedDate.getFullYear() === time.getFullYear(),
				),
		);
		return availableTimes;
	};

	const times = getTimes();
	const isMonday = (date: Date) => {
		const dayOfWeek = date.getDay();
		return dayOfWeek === 1;
	};

	// La fonction pour convertir l'heure en format 24h
	const to24HourFormat = (time: Date): number => {
		const hours = time.getHours();
		const minutes = time.getMinutes();

		return hours + minutes / 60;
	};

	console.log(typeof times);

	// On filtre les créneaux de midi
	const middayTimes = times?.filter(
		(time) => to24HourFormat(time) >= 12 && to24HourFormat(time) < 14,
	);

	// On filtre les créneaux de soir
	const eveningTimes = times?.filter((time) => to24HourFormat(time) >= 14);

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
				<label className='flex flex-col justify-between gap-4'>
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

					{date.justDate ? (
						<div className='flex w-full flex-col gap-4'>
							<span className='flex justify-center italic'>Midday</span>
							<div className='grid grid-cols-4'>
								{middayTimes?.map((time, i) => (
									<div
										key={`midday-${i}`}
										className='flex justify-center rounded-sm bg-gray-100 p-2 hover:bg-orange-300'
									>
										<button
											type='button'
											onClick={() => {
												setDate({ ...date, dateTime: time });
												setValue('date', time.toISOString());
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
										className='flex justify-center rounded-sm bg-gray-100 p-2 hover:bg-orange-300'
									>
										<button
											type='button'
											onClick={() => {
												setDate({ ...date, dateTime: time });
												setValue('date', time.toISOString());
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
									setDate({ ...date, dateTime: null, justDate: null });
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
				</label>
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
