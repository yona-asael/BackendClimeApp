// Imports
import express from 'express';
//Own Files
import { app as persona } from './persona/persona';
import { app as users } from './users/users';
import { app as auth } from './auth/auth';

//Token Validation
import { TokenValidation } from '../libs/verifyToken';
//Declarations
const routes = express();

//Routes
routes.use('/persona', persona);
routes.use('/users', TokenValidation, users);
routes.use('/auth', auth);

//Export
export default routes;

