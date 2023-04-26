import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    savedRecipes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipe',
        }]
}, {
    timestamps: true,
});
export const UserModel = mongoose.model('User', userSchema, 'UserDatas');
//# sourceMappingURL=Users.js.map