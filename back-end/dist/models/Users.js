import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
}, {
    timestamps: true,
});
export const UserModel = mongoose.model('User', userSchema, 'UserDatas');
//# sourceMappingURL=Users.js.map