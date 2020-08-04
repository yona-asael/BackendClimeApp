import { Schema, model, Document, PaginateModel } from "mongoose"
import { mongoosePagination } from 'ts-mongoose-pagination';
import mongoose from 'mongoose';
const historyPat = new Schema({
    recipe_id: String,
    medic_id: String,
});

const patient = new Schema({
    name: String,
    lastname: String,
    Date: Date,
    address: String,
    cellphone: Number,
    SEX: String,
    history: [historyPat],
});
patient.plugin(mongoosePagination);


export interface IHistory extends Document {
    recipe_id: string,
    medic_id: string,
}

export interface IPatient extends Document {
    name: string,
    lastname: string,
    Date: Date,
    address: string,
    cellphone: number,
    SEX: string,
    history: IHistory[],
 }

export const Patient: PaginateModel<IPatient> = mongoose.model('Patient',patient)

