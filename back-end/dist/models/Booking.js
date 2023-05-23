import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
    experience: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
export const BookingModel = mongoose.model('Booking', bookingSchema, 'BookingDatas');
//# sourceMappingURL=Booking.js.map