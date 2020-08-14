import { Router, Response, Request } from 'express';
import { signUp, LogIn, profile,userExists, userUpdate } from '../../controllers/auth.controller';
import { TokenValidation } from '../../libs/verifyToken';
import { VerifyUser } from '../../libs/verifyUsers';
const app: Router = Router();

app.post('/register', signUp);

app.post('/login', VerifyUser ,LogIn);

app.get('/profile', TokenValidation, profile);

app.get('/:id', TokenValidation ,userExists);

app.put('/:id', TokenValidation ,userUpdate)


export { app };
