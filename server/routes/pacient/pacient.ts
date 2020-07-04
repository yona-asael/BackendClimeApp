import { Router } from 'express';
import { getAll, getOne, create, update, delet } from '../../controllers/pacient.controller';
const app: Router = Router();

app.get('/', getAll);

app.post('/:id', getOne);

app.post('/', create);

app.put('/:id', update);

app.delete('/:id', delet);



export { app };