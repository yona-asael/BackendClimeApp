import {connect} from 'mongoose';

export async function startConnection(){
    const db = await connect('mongodb://localhost/',{
        useNewUrlParser: true,
    })
}