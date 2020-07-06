import { Schema, model, Document } from "mongoose";
import Bycript from 'bcryptjs'

//

const medic = new Schema({
    university: String,
    grade: String,
    cedP: String,
    person_id: String
});

export interface IMedic extends Document {
    university: String,
    grade: String,
    cedP: String,
    person_id: String
}

export default model<IMedic>('Medic', medic);
