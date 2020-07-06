import { Schema, model, Document, } from "mongoose"

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
    NSS: String,
    SEX: String,
    history: [historyPat],
});

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
    NSS: string,
    SEX: string,
    history: IHistory[],
}

export default model<IPatient>('Patient', patient);
