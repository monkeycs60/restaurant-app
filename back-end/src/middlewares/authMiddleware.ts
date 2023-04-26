import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

interface RequestWithUserId extends Request {
	userId?: string;
}

type decodedType = {
	id: string;
	iat: number;
	exp: number;
};

dotenv.config();
const JWTSecret: string | undefined = process.env.JWT_SECRET;

const authMiddleware = (
	req: RequestWithUserId,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization;
	if (!token) {
		return res
			.status(401)
			.json({ auth: false, message: 'No token provided.' });
	}
	if (!JWTSecret) {
		return res
			.status(500)
			.json({ auth: false, message: 'JWT Secret not configured.' });
	}
	jwt.verify(token, JWTSecret, (err: unknown, decoded: unknown) => {
		if (err instanceof Error) {
			return res
				.status(500)
				.json({ auth: false, message: 'Failed to authenticate token.' });
		}
		if (typeof decoded === 'object' && decoded !== null) {
			const decodedObj = decoded as decodedType;
			req.userId = decodedObj.id;
			next();
		} else {
			return res
				.status(500)
				.json({ auth: false, message: 'Invalid decoded token.' });
		}
	});
};

export default authMiddleware;
