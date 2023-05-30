import express from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

import { usersRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';
import { bookingRouter } from './routes/booking.js';
import { log } from 'console';

dotenv.config();

const app = express();

app.use(express.json());

const corsOptions = {
	origin:
		process.env.NODE_ENV === 'production'
			? 'https://restaurant-app-67d7.vercel.app'
			: 'http://127.0.0.1:5173',
	credentials: true,
};

app.use(cors(corsOptions));



app.use('/auth', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/booking', bookingRouter);

const mongoDBURI: string = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@restodb.6lqxxnc.mongodb.net/restodb?retryWrites=true&w=majority`;
const mongoDBRailwayURI: string = process.env.MONGO_DB_RAILWAY_URI || '';

const DB_URI =
process.env.NODE_ENV === 'production' ? mongoDBRailwayURI : mongoDBURI;

console.log('Database URI:', DB_URI);
console.log('corsOptions', corsOptions);

mongoose
	.connect(DB_URI)
	.then(() => console.log('Connected to MongoDB!'))
	.catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(3001, () => console.log('Magic happens on port 3001'));
