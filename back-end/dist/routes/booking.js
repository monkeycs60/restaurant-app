import express from 'express';
import { BookingModel } from '../models/Booking.js';
const router = express.Router();
router.post('/', async (req, res) => {
    try {
        const booking = new BookingModel(req.body);
        await booking.save();
        res.status(201).json({
            message: 'Booking created successfully',
            booking,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: 'Booking creation failed',
                error: error.message,
            });
        }
    }
});
export { router as bookingRouter };
//# sourceMappingURL=booking.js.map