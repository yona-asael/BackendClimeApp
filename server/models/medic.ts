import { Schema, model, Document } from "mongoose";
import Bycript from 'bcryptjs'

//

const schema = new Schema({

    University: String,
    Grade: String,
    CedP: String,
    person_id: String
});

export interface IMedic extends Document {
    University: String,
    Grade: String,
    CedP: String,
    person_id: String
}