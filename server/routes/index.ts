// Imports
import express from 'express';
//Own Files
import { app as auth } from './auth/auth';
import { app as medic } from './medic/medic';
import { app as recipe } from './recipe/recipe';
import { app as person } from './person/person';
import { app as pacient } from './pacient/pacient';

//Token Validation
import { } from '../libs/verifyToken';
//Declarations
const routes = express();

//Route
routes.use('/auth', auth);
// routes.use('/medics',  medic);
// routes.use('/recipes',  recipe);
// routes.use('/persons',  person);
// routes.use('/patients',  pacient);

routes.use('/medics', medic);
routes.use('/recipes', recipe);
routes.use('/persons', person);
routes.use('/patients', pacient);
//Export
export default routes;

