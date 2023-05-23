import { useQuery } from '@tanstack/react-query';
import { fetchBookedDate } from '../../services/api';
import moment from 'moment';
type BookingResponse = {
	date: string;
	email: string;
	experience: string;
	guests: number;
	phone: string;
	__v: number;
	_id: string;
};

function formatDate(date: Date) {
	return moment(date).format('D MMMM YYYY [at] hh:mm A');
}

const SuccessPage = () => {
	const bookingId = localStorage.getItem('bookingId');

	const { data } = useQuery<BookingResponse, Error>(
		['bookedDate', bookingId],
		() => {
			if (bookingId) {
				return fetchBookedDate(bookingId);
			}
			throw new Error('No booking ID');
		},
	);

	let reformattedDate = '';
	if (data?.date) {
		reformattedDate = formatDate(new Date(data.date));
	}
	let reformatteExperience = data?.experience;
	if (reformatteExperience === 'pitch_black') {
		reformatteExperience = 'Pitch Black';
	}

	console.log('résa en cours', data);

	return (
		<div className='font-roboto mt-[5vh] flex h-full w-[80%] flex-col gap-4 p-10 text-black'>
			<h2 className='mb-4 text-3xl text-orange-600'>
				Reservation Confirmed!
			</h2>
			<p>Dear Guest,</p>
			<p>
				Thank you for choosing Chiaroscuro, a unique dining adventure in
				complete darkness.
			</p>
			<p>
				We are delighted to confirm the reservation made by{' '}
				<span className='italic text-orange-600'> {data?.email} </span> for{' '}
				<span className='italic text-orange-600'> {data?.guests} </span>{' '}
				people to discover the{' '}
				<span className='italic text-orange-600'>
					{' '}
					{reformatteExperience}{' '}
				</span>{' '}
				experience.
			</p>
			<p>
				Your table will be waiting for you on{' '}
				<span className='italic text-orange-600'> {reformattedDate}</span>.
				Please arrive 15 minutes before.
			</p>
			<p>
				We can't wait to serve you a culinary experience you'll never
				forget. See you in the dark!
			</p>
			<p className='text-sm italic'>Chiaroscuro Team</p>
		</div>
	);
};

export default SuccessPage;
