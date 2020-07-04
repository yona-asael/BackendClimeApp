import { Schema, model, Document, } from "mongoose";
import Bycript from 'bcryptjs'

const schema = new Schema({
    username: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
});

export interface IUser extends Document {
    username: string,
    password: string,
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
