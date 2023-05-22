import { useState, useEffect } from 'react';
import { add } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { fetchBookedDates } from '../services/api';

interface DateType {
	justDate: Date | null;
	dateTime: Date | null;
}

interface TimeType {
	availableTimes: Date[];
	middayTimes: Date[];
	eveningTimes: Date[];
}
export const useAvailability = () => {
	const [date, setDate] = useState<DateType>({
		justDate: null,
		dateTime: null,
	});

	const [times, setTimes] = useState<Date[] | null>(null);
	const { data: bookedDates } = useQuery<Date[], Error>(
		['bookedDates'],
		fetchBookedDates,
	);

	const to24HourFormat = (time: Date): number => {
		const hours = time.getHours();
		const minutes = time.getMinutes();

		return hours + minutes / 60;
	};

	const isMonday = (date: Date) => {
		const dayOfWeek = date.getDay();
		return dayOfWeek === 1;
	};
	useEffect(() => {
		console.log('useeffect déclenché');

		if (date.justDate) {
			console.log('CODE IF du useeffect déclenché');

			getTimes();
		}
	}, [date]);

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

		for (
			let index = lunchStart;
			index < lunchEnd;
			index = add(index, { minutes: interval })
		) {
			times.push(index);
		}

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
		console.log('availableTimes', availableTimes);

		return setTimes(availableTimes);
	};

	const middayTimes = times?.filter(
		(time) => to24HourFormat(time) >= 12 && to24HourFormat(time) < 14,
	);

	const eveningTimes = times?.filter((time) => to24HourFormat(time) >= 14);

	console.log('function appelée', times);

	return {
		date,
		times,
		setDate,
		getTimes,
		isMonday,
		middayTimes,
		eveningTimes,
	};
};
