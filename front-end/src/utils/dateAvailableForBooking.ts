// dateHelpers.js
import { addDays, addMinutes, getDay, isBefore, isAfter, set } from 'date-fns';

export const isMonday = (date: Date | number) => {
	return getDay(date) === 1;
};

export const isOpen = (date: Date | number) => {
	const day = getDay(date);
	const time = set(date, {
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0,
	});

	const tuesdayToFriday =
		day >= 2 &&
		day <= 5 &&
		isAfter(time, set(date, { hours: 17, minutes: 30 })) &&
		isBefore(time, set(date, { hours: 23, minutes: 0 }));
	const saturday =
		day === 6 &&
		isAfter(time, set(date, { hours: 16, minutes: 30 })) &&
		isBefore(time, set(date, { hours: 23, minutes: 0 }));
	const sunday =
		day === 0 &&
		isAfter(time, set(date, { hours: 11, minutes: 15 })) &&
		isBefore(time, set(date, { hours: 14, minutes: 0 }));

	return tuesdayToFriday || saturday || sunday;
};

export const generateAvailableTimeSlots = (minDate: Date | number) => {
	const slots = [];
	let currentDate = minDate;

	while (isOpen(currentDate)) {
		if (!isMonday(currentDate)) {
			slots.push(new Date(currentDate));
		}
		currentDate = addMinutes(currentDate, 30);
	}

	return slots;
};
