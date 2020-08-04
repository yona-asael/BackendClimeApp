import { Router, Response, Request } from 'express';
import { signUp, LogIn, profile,dates } from '../../controllers/auth.controller';
import { TokenValidation } from '../../libs/verifyToken';

const app: Router = Router();

app.post('/register', signUp);

app.post('/login', LogIn);

app.get('/profile', TokenValidation, profile);

app.get('/:start/:end', dates);

export { app };
