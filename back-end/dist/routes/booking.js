import express from 'express';
import { BookingModel } from '../models/Booking.js';
import nodemailer from 'nodemailer';
const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const bookings = await BookingModel.find();
        res.status(200).json(bookings);
    }
    catch (error) {
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
        // Configuration de l'expéditeur
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: 'gregre_95@hotmail.fr',
                pass: 'Saab900!',
            },
        });
        // Configuration du contenu de l'e-mail
        const mailOptions = {
            from: 'gregre_95@hotmail.fr',
            to: req.body.email,
            subject: 'Booking Confirmation',
            text: `Dear ${req.body.username},\n\nYour booking has been confirmed for ${req.body.date}.\n\nThank you for choosing our restaurant!\n\nBest regards,\nThe Restaurant Team`,
        };
        // Envoi de l'e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
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