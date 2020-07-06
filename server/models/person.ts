import { Schema, model, Document, } from "mongoose"

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

export default model<IPerson>('person', person);