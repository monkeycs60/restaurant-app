import axios from 'axios';
import { BookingFormData } from '../hooks/useBooking';

export async function fetchBookedDates() {
	try {
		const response = await axios.get('http://localhost:3001/booking');
		return response.data.map(
			(booking: BookingFormData) => new Date(booking.date),
		);
	} catch (error) {
		throw new Error('Error fetching booked dates');
	}
}
