import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { usersRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';
import { bookingRouter } from './routes/booking.js';
dotenv.config();
const app = express();
// const corsOptions = {
// 	origin: (origin: any, callback: any) => {
// 		const whitelist = [
// 			'https://restaurant-app-67d7.vercel.app',
// 			'https://restaurant-app-67d7-4nv3ofvyh-monkeycs60.vercel.app',
// 			'http://127.0.0.1:5173',
// 		];
// 		if (whitelist.includes(origin)) {
// 			callback(null, true);
// 		} else {
// 			callback(new Error('Not allowed by CORS'));
// 		}
// 	},
// 	credentials: true,
// };
const corsOptions = {
    origin: (origin, callback) => {
        const whitelist = [
            'https://restaurant-app-67d7.vercel.app',
            'https://restaurant-app-67d7-4nv3ofvyh-monkeycs60.vercel.app',
            'http://127.0.0.1:5173',
        ];
        if (!origin)
            callback(null, true);
        else if (whitelist.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/booking', bookingRouter);
const mongoDBURI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@restodb.6lqxxnc.mongodb.net/restodb?retryWrites=true&w=majority`;
const mongoDBRailwayURI = process.env.MONGO_DB_RAILWAY_URI || '';
const DB_URI = process.env.NODE_ENV === 'production' ? mongoDBRailwayURI : mongoDBURI;
console.log('Database URI:', DB_URI);
console.log('corsOptions', corsOptions);
mongoose
    .connect(DB_URI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Magic happens on port ${port}`));
app.listen(3001, () => console.log('Magic happens on port 3001'));
//# sourceMappingURL=index.js.map