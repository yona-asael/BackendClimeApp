import { Schema, model, Document, PaginateModel, Types } from "mongoose"
import { mongoosePagination } from 'ts-mongoose-pagination';
import mongoose from 'mongoose';
import {IApoint} from "./appointment";

const patient = new Schema({
    folio: String,
    name: {type: String, required: [true, 'Se mecesota el nombre del paciente']},
    lastname: {type: String, required: [true, 'Se requieren los apellidos del usuario']},
    Date: Date,
    address: String,
    cellphone: Number,
    SEX: {type: String, required: [true, 'Se necesita el sexo del paciente']},
    history: [{type: Schema.Types.ObjectId, ref: 'Appoint'}],
});
patient.plugin(mongoosePagination);



export interface IPatient extends Document {
    folio: string,
    name: string,
    lastname: string,
    Date: Date,
    address: string,
    cellphone: number,
    SEX: string,
    history:  IApoint[],
 }

export const Patient: PaginateModel<IPatient> = mongoose.model('Patient',patient)

