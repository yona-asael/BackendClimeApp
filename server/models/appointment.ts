import { Schema, model, Document, Types, PaginateModel } from "mongoose";
import {IMedic } from './medic';
import { IPatient } from './pacient';
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";

const appoint = new Schema({
    medic: {type: Schema.Types.ObjectId, ref: 'Medic', required: true},
    patient: {type: Schema.Types.ObjectId, ref: 'Patient', required: true},
    date: Date,
    hour: String,
});
appoint.plugin(mongoosePagination);
export interface IApoint extends Document { 
    medic: Types.ObjectId | IMedic,
    patient: Types.ObjectId | IPatient
    date: Date,
    hour:  String
}

export const Appoint: PaginateModel<IApoint> = mongoose.model('Appoint', appoint);

