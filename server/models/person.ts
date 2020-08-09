import { Schema, model, Document, PaginateModel} from "mongoose";
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";


const person = new Schema({
    name: String,
    lastname: String,
    address: String,
    cellphone: String,
    job: String,
    rol: String,
});
person.plugin(mongoosePagination);

export interface IPerson extends Document {
    name: string,
    lastname: string,
    address: string,
    cellphone: string,
    job: string,
    rol: string,
}

export const Person: PaginateModel<IPerson> = mongoose.model('Person', person);
