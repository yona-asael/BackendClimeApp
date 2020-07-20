import { Schema, model, Document, PaginateModel } from "mongoose";
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";

const rols = new Schema({
    name: String
});

const person = new Schema({
    name: String,
    lastname: String,
    address: String,
    cellphone: String,
    job: String,
    rol: [rols]
});
person.plugin(mongoosePagination);

export interface IRol extends Document {
    name: string
}

export interface IPerson extends Document {
    name: string,
    lastname: string,
    address: string,
    cellphone: string,
    job: string,
    rol: IRol[]
}

export const Person: PaginateModel<IPerson> = mongoose.model('person', person);