// Importaciones
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes/index';
import './config/config';

//Declaraciones
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw()); 

//rutas
app.use('/api/v1', routes);

// servidor
mongoose.connect(`${process.env.URLDB}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}).then((resp: any) => {
    console.log('The Conection works');
}).catch((err: any) => {
    console.log('The conection failed');
})

async function main() {
    await app.listen(process.env.PORT);
    console.log(`[Server] the server is run on port ${process.env.PORT}`);
}

main();