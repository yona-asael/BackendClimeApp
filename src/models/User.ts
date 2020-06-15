import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    name: String,
    username: String,
    password: String,
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
}
);

interface IUser extends Document {
    name: String,
    username: String,
    password: String,
}

export default model<IUser>('User', schema);