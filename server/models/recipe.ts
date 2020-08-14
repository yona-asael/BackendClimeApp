import { Schema, model, Document, Types, PaginateModel } from "mongoose";
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";

const recipe = new Schema({
    date: {type: Date, default: Date.now},
    dignostic: {type: String,required: [true, 'Se requiere minimo un diagnostico']},
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: {type: Date, default: () => Date.now() + 10*24*60*60*1000},
    status: {type: Boolean, default: false}
});
recipe.plugin(mongoosePagination) ;

export interface IRecipe extends Document {
    date: Date,
    dignostic: String,
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: Date,
    status: boolean
}

export const Recipe: PaginateModel<IRecipe> = mongoose.model('Recipe', recipe);
