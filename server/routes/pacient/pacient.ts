import { Router } from 'express';
import { getAll, getOne, create, update, delet, addHistory } from '../../controllers/pacient.controller';
const app: Router = Router();

app.get('/', getAll);

app.get('/:id', getOne);

app.post('/', create);

app.put('/:id', update);

app.delete('/:id', delet);

app.post('/:id/history', addHistory);

export { app };
