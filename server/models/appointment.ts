import { Schema, model, Document, Types, PaginateModel } from "mongoose";
import {IMedic } from './medic';
import { IPatient } from './pacient';
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";
import {IRecipe} from "./recipe";

const appoint = new Schema({
    medic: {type: Schema.Types.ObjectId, ref: 'Medic', required: [true, 'Se requiere un medico']},
    patient: {type: Schema.Types.ObjectId, ref: 'Patient', required: [true, 'Se requiere un paciente']},
    recipe: {type: Schema.Types.ObjectId, ref: 'recipe'},
    status: {type: Boolean, default: false},
    date: Date,
    hour: String,
});
appoint.plugin(mongoosePagination);
export interface IApoint extends Document { 
    medic: Types.ObjectId | IMedic,
    patient: Types.ObjectId | IPatient
    recipe: Types.ObjectId | IRecipe,
    status: Boolean,
    date: Date,
    hour:  String
}

export const Appoint: PaginateModel<IApoint> = mongoose.model('Appoint', appoint);

