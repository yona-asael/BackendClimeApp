import { Schema, model, Document, Types, PaginateModel } from "mongoose";
import { IPerson } from './person';
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";


const medic = new Schema({
    university: String,
    grade: String,
    cedP: String,
    person: { type: Schema.Types.ObjectId, ref: 'Person', required: true },
});
medic.plugin(mongoosePagination);

export interface IMedic extends Document {
    university: String,
    grade: String,
    cedP: String,
    person: Types.ObjectId | IPerson
}

export const Medic: PaginateModel<IMedic> = mongoose.model('Medic', medic);
