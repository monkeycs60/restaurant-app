import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';
import { BookingModel } from '../models/Booking.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { sendEmail } from '../utils/sendEmail.js';

dotenv.config();
const JWTSecret: string | undefined = process.env.JWT_SECRET;

const router = express.Router();

router.post('/register', async (req, res) => {
	const { phone, email, password, confirmPassword } = req.body;
	console.log('requete', req.body);
	console.log('requete telephone', phone);

	if (password !== confirmPassword) {
		return res.status(400).json({ message: 'Passwords do not match' });
	}

	const user = await UserModel.findOne({ email });

	if (user) {
		return res.status(400).json({ message: 'User already exists' });
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new UserModel({
			phone,
			email,
			password: hashedPassword,
		});

		// Booking is created at the same time as the user
		let bookingData = req.body.bookingData;
		bookingData.email = email;
		bookingData.phone = phone;
		const newBooking = new BookingModel(bookingData);
		await newBooking.save();

		sendEmail(email, 'Booking Confirmation', bookingData);

		await newUser.save();

		if (!JWTSecret) {
			return res
				.status(500)
				.json({ auth: false, message: 'JWT Secret not configured.' });
		}

		const token = jwt.sign({ id: newUser._id }, JWTSecret, {
			expiresIn: '24h',
		});

		res.status(201).json({
			message: 'User created successfully',
			newUser,
			token,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating user', error });
	}
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	const user = await UserModel.findOne({ email });

	if (!user) {
		return res.status(400).json({ message: 'User does not exist' });
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);

	if (!isPasswordCorrect) {
		return res.status(400).json({ message: 'Invalid credentials' });
	}

	try {
		// Booking is created at the same time as the user is logged in
		let bookingData = req.body.bookingData;
		bookingData.email = email;
		bookingData.phone = user.phone;
		const newBooking = new BookingModel(bookingData);
		await newBooking.save();

		sendEmail(email, 'Booking Confirmation', bookingData);

		if (!JWTSecret) {
			return res
				.status(500)
				.json({ auth: false, message: 'JWT Secret not configured.' });
		}

		const token = jwt.sign({ id: user._id }, JWTSecret, {
			expiresIn: '24h',
		});

		res.status(200).json({
			message: 'User logged in successfully',
			userID: user._id,
			userMail: user.email,
			token,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating booking', error });
	}
});

export { router as usersRouter };
