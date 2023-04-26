import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWTSecret = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
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
    jwt.verify(token, JWTSecret, (err, decoded) => {
        if (err instanceof Error) {
            return res
                .status(500)
                .json({ auth: false, message: 'Failed to authenticate token.' });
        }
        if (typeof decoded === 'object' && decoded !== null) {
            const decodedObj = decoded;
            req.userId = decodedObj.id;
            next();
        }
        else {
            return res
                .status(500)
                .json({ auth: false, message: 'Invalid decoded token.' });
        }
    });
};
export default authMiddleware;
//# sourceMappingURL=authMiddleware.js.map