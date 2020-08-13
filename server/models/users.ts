import { Schema, model, Document, Types } from "mongoose";
import mongooseHidden from 'mongoose-hidden';
import Bycript from 'bcryptjs'

//

const schema = new Schema({
    username: {type: String, unique: true},
    password: {type: String, hideJSON: true },
    person: String,
    createdAt: { type: Date, default: Date.now },
});
schema.plugin(mongooseHidden);
export interface IUser extends Document {
    username: string,
    password: string,
    person: string,
    createdAt: Date,
    encryptPassword(password: string): Promise<string>,
    validatePassword(password: string): Promise<boolean>
}

schema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await Bycript.genSalt(10);
    return await Bycript.hash(password, salt);
}

schema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await Bycript.compare(password, this.password);
}


export default model<IUser>('users', schema);
