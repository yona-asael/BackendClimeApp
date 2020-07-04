// Other Library 
import { Router, Response, Request, response } from 'express';
import Bycript from 'bcryptjs';
import JWT from 'jsonwebtoken';

//Own Imports
import { IUser } from '../../models/users';

//Controllers


const app: Router = Router();

app.post('/login', async (req: Request, res: Response) => {
    try {

        // res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post('/register', async (req: Request, res: Response) => {
    try {
        console.log()
        res.status(201).json({

        });
    } catch (error) {
        res.status(500).json(error);
    }
});

export { app };