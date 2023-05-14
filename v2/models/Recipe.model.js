const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            unique: true
        },
        instructions: {
            type: String,
            required: true,
            unique: true
        },
        usedIngredients: {
            amount: {
                type: Number,
                required: true
            },
            originalName: {
                type: String,
                unique: true
            }
        }
    },
    {
        timestamps: true
    }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
