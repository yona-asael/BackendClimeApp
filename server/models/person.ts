import { Schema, model, Document, PaginateModel} from "mongoose";
import mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";


const person = new Schema({
    name: {type: String, required: [true, 'Se requiere el nombre del usuario']},
    lastname: {type: String, required: [true, 'Se requiere apellidos del usuario']},
    address: String,
    cellphone: String,
    job: { type: String, required: [true, 'Se requiere que el personal tenga un trabajo']},
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
