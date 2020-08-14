import {Schema, model, Document} from 'mongoose';

const log = new Schema({
    id: {type: String, required: [true, 'Se requiere un id del usuario']},
    ip: {type: String, required: [true, 'se requiere ip del usario']},
});

export interface Ilog extends Document {
    id: String,
    ip: String
}

export default model<Ilog>('log', log);
