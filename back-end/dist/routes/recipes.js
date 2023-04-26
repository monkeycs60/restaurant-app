import express from 'express';
import { RecipeModel } from '../models/Recipes.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();
router.get('/', authMiddleware, async (req, res) => {
    try {
        const recipes = await RecipeModel.find({});
        res.status(200).json(recipes);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        }
        else {
            res.status(404).json({ message: 'Unknow Error' });
        }
    }
});
router.post('/', authMiddleware, async (req, res) => {
    const newRecipe = new RecipeModel(req.body);
    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(409).json({
                message: `Error creating recipe: ${error.message}`,
            });
        }
        else {
            res.status(409).json({ message: 'Unknow Error' });
        }
    }
});
export { router as recipesRouter };
//# sourceMappingURL=recipes.js.map