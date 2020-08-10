import { Schema, model, Document, Types, PaginateModel } from "mongoose";
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";

const recipe = new Schema({
   date: Date,
    dignostic: String,
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: Date
});
recipe.plugin(mongoosePagination) ;

export interface IRecipe extends Document {
    date: Date,
    dignostic: String,
    TA: String,
    FC: String,
    FR: String,
    T: String,
    dateExp: Date
}

export const Recipe: PaginateModel<IRecipe> = mongoose.model('Recipe', recipe);