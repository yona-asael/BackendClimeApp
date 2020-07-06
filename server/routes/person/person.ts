import { Router } from 'express';
import { getAll, getOne, create, update, delet, deleteRol } from '../../controllers/person.controller';
const app: Router = Router();

app.get('/', getAll);

app.post('/:id', getOne);

app.post('/', create);

app.put('/:id', update);

app.delete('/:id', delet);

app.delete('/:id/rols/:idRol', deleteRol);

export { app };