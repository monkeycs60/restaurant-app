import axios from 'axios';
import { BookingFormData } from '../hooks/useBooking';

const isLocal = false;

const API_URL = isLocal
	? 'http://localhost:3001'
	: 'https://restaurant-app-production-29bf.up.railway.app';
axios.defaults.baseURL = API_URL;

console.log('axios.defaults.baseURL', axios.defaults.baseURL);

export async function authenticate<Tipo>(endpoint: string, credentials: Tipo) {
	try {
		const response = await axios.post(`/auth/${endpoint}`, credentials);
		return response.data;
	} catch (error) {
		throw new Error(`Error authenticating: ${error}`);
	}
}
export async function fetchBookedDates() {
	try {
		const response = await axios.get('/booking');
		return response.data.map(
			(booking: BookingFormData) => new Date(booking.date),
		);
	} catch (error) {
		throw new Error('Error fetching booked dates');
	}
}
export async function fetchBookedDate(bookingId: string) {
	try {
		const response = await axios.get(`/booking/${bookingId}`);
		return response.data;
	} catch (error) {
		throw new Error('Error fetching booked date');
	}
}
