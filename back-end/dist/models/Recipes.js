import mongoose from 'mongoose';
const RecipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            type: String,
            required: true,
        },
    ],
    instructions: [
        {
            type: String,
            required: true,
        },
    ],
    image: {
        type: String,
        required: true,
    },
    cookingTime: {
        type: Number,
        required: true,
    },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
});
export const RecipeModel = mongoose.model('Recipe', RecipeSchema, 'Recipes');
//# sourceMappingURL=Recipes.js.map