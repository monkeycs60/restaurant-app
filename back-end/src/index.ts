import express from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

import { usersRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';
import { bookingRouter } from './routes/booking.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/booking', bookingRouter);

const mongoDBUser: string | undefined = process.env.MONGO_DB_USER;
const mongoDBPassword: string | undefined = process.env.MONGO_DB_PASSWORD;
const mongoDBURI: string = `mongodb+srv://${mongoDBUser}:${mongoDBPassword}@restodb.6lqxxnc.mongodb.net/restodb?retryWrites=true&w=majority`;

console.log('hello!!');

mongoose
	.connect(mongoDBURI)
	.then(() => console.log('Connected to MongoDB!'))
	.catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(3001, () => console.log('Magic happens on port 3001'));
