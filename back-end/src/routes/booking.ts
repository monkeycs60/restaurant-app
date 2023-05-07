import express from 'express';
import { BookingModel } from '../models/Booking.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const bookings = await BookingModel.find();
		res.status(200).json(bookings);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({
				message: 'Error fetching bookings',
				error: error.message,
			});
		}
	}
});

router.post('/', async (req, res) => {
	try {
		const booking = new BookingModel(req.body);
		await booking.save();

		res.status(201).json({
			message: 'Booking created successfully',
			booking,
		});
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({
				message: 'Booking creation failed',
				error: error.message,
			});
		}
	}
});

export { router as bookingRouter };
