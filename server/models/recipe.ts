import { Schema, model, Document } from "mongoose";
import Bycript from 'bcryptjs'

//

const recipe = new Schema({

    medic_id: String,
    pacient_id: String,
    date: Date,
    dignostic: String,
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: Date
});

export interface IRecipe extends Document {
    medic_id: String,
    pacient_id: String,
    date: Date,
    dignostic: String,
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: Date
}

export default model<IRecipe>('recipe', recipe);
