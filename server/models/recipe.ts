import { Schema, model, Document } from "mongoose";
const recipe = new Schema({
    date: Date,
    dignostic: String,
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: Date,
    stauts: {type: Boolean, default: false}
});

export interface IRecipe extends Document {
    date: Date,
    dignostic: String,
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: Date,
    status: boolean,
}

export default model<IRecipe>('recipe', recipe);
