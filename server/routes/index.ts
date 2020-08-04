// Imports
import express from 'express';
//Own Files
import { app as auth } from './auth/auth';
import { app as medic } from './medic/medic';
import { app as recipe } from './recipe/recipe';
import { app as person } from './person/person';
import { app as pacient } from './pacient/pacient';
import { app as appoint } from './Appoint/appoint';
//Token Validation
import { TokenValidation } from '../libs/verifyToken';
//Declarations
const routes = express();

//Route
routes.use('/auth', auth);
// routes.use('/medics',TokenValidation,   medic);
// routes.use('/recipes', TokenValidation,  recipe);
// routes.use('/persons', TokenValidation,  person);
// routes.use('/patients', TokenValidation,  pacient);
// router.use('/appoints', TokenValidation, appoint);
routes.use('/medics', medic);
routes.use('/recipes', recipe);
routes.use('/persons', person);
routes.use('/patients', pacient);
routes.use('/appoints', appoint);

//Export
export default routes;

