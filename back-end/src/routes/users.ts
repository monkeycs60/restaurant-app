import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';
import dotenv from 'dotenv';

dotenv.config();
const JWTSecret: string | undefined = process.env.JWT_SECRET;

const router = express.Router();

router.post('/register', async (req, res) => {
	const { username, password, email } = req.body;

	const user = await UserModel.findOne({ username });

	if (user) {
		return res.status(400).json({ message: 'User already exists' });
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new UserModel({
			username,
			email,
			password: hashedPassword,
		});

		await newUser.save();

		res.status(201).json({
			message: 'User created successfully',
			newUser,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating user', error });
	}
});

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const user = await UserModel.findOne({ username });

	if (!user) {
		return res.status(400).json({ message: 'User does not exist' });
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);

	if (!isPasswordCorrect) {
		return res.status(400).json({ message: 'Invalid credentials' });
	}

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
		token,
	});
});

export { router as usersRouter };
