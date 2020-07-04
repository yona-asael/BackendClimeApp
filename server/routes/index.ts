// Imports
import express from 'express';
//Own Files
import { app as auth } from './auth/auth';
import { app as medic } from './medic/medic';
import { app as recipe } from './recipe/recipe';
import { app as person } from './person/person';
import { app as pacient } from './pacient/pacient';

//Token Validation
import { TokenValidation } from '../libs/verifyToken';
//Declarations
const routes = express();

//Route
routes.use('/auth', auth);
routes.use('/medics', TokenValidation, medic);
routes.use('/recipes', TokenValidation, recipe);
routes.use('/persons', TokenValidation, person);
routes.use('/pacient', TokenValidation, pacient);

//Export
export default routes;

