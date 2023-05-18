import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../styles/calendar.css';
import { add } from 'date-fns';
import { useQuery } from '@tanstack/react-query';

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

		console.warn(times);

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

	return (
		<>
			<div className='flex flex-col items-center justify-center gap-10'>
				<h2 className='font-dancing text-5xl font-bold text-orange-600'>
					Chiaroscuro
				</h2>
			</div>
			<form
				className='font-classic mt-[5vh] flex w-2/3 flex-col gap-8'
				onSubmit={handleSubmit(onSubmit)}
			>
				<fieldset className='flex flex-col gap-2'>
					{/* <legend className='mb-2'>Experience</legend> */}
					<input
						id='penumbra'
						type='radio'
						value='penumbra'
						className='custom-radio mr-2'
						required
						{...register('experience', { required: true })}
					/>
					<label htmlFor='penumbra' className='mr-2'>
						Penumbra Path: £55 per person (blindfold)
					</label>
					<input
						id='pitch_black'
						type='radio'
						value='pitch_black'
						className='custom-radio mr-2'
						required
						{...register('experience', { required: true })}
					/>
					<label htmlFor='pitch_black' className='mr-2'>
						Pitch Black Experience: £70 per person (dark room)
					</label>
				</fieldset>
				{errors.experience && (
					<span className='text-blue-700'>Experience is required</span>
				)}
				<label className='flex  justify-between'>
					<span>Phone number</span>
					<input
						type='text'
						placeholder='Phone number'
						min='1'
						className='w-1/2'
						{...register('phone', { required: true })}
					/>
				</label>
				{errors.phone && (
					<span className='text-blue-700'>Phone number is required</span>
				)}
				<label className='flex  justify-between'>
					<span>Number of guests</span>
					<select className='w-1/2 rounded-none' {...register('guests')}>
						{Array.from({ length: 10 }, (_, i) => (
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
					<span>Date and time:</span>
					{date.justDate ? (
						<div className='flex p-4'>
							{times?.map((time, i) => (
								<div
									key={`time-${i}`}
									className='rounded-sm bg-gray-100 p-2'
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
							<button
								type='button'
								onClick={() => {
									setDate({ ...date, dateTime: null, justDate: null });
								}}
							>
								x
							</button>
						</div>
					) : (
						<Calendar
							className='REACT-CALENDAR'
							view='month'
							minDate={add(new Date(), { hours: 2 })}
							onClickDay={(date) => {
								setDate({ ...date, justDate: date, dateTime: date });
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
					className=' bg-gray-800 p-3 text-xl uppercase hover:bg-gray-400 hover:text-gray-900'
					type='submit'
				>
					Book
				</button>
			</form>
		</>
	);
};

export default FormBooking;
