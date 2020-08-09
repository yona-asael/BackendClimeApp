import { Schema, model, Document, PaginateModel, Types } from "mongoose"
import { mongoosePagination } from 'ts-mongoose-pagination';
import mongoose from 'mongoose';
import {IApoint} from "./appointment";

const patient = new Schema({
    folio: String,
    name: String,
    lastname: String,
    Date: Date,
    address: String,
    cellphone: Number,
    SEX: String,
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

