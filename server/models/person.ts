import { Schema, model, Document, } from "mongoose"

const rols = new Schema({
    name
});

const person = new Schema({
    name: String,
    lastname: String,
    address: String,
    cellphone: String,
    job: String,
    rol: rols
});

interface IRol extends Document {
    name: string
}

interface IPerson extends Document {
    name: string,
    lastname: string,
    address: string,
    cellphone: string,
    job: string,
    rol: IRol
}

export default model<IPerson>('person', person);