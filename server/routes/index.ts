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
import {LogCreate} from '../libs/log';
const routes = express();

//Route
routes.use('/auth', auth);
routes.use('/medics',[TokenValidation, LogCreate], medic);
routes.use('/recipes',[TokenValidation, LogCreate], recipe);
routes.use('/persons',[TokenValidation, LogCreate], person);
routes.use('/patients',[TokenValidation, LogCreate], pacient);
routes.use('/appoints',[TokenValidation, LogCreate], appoint);

//Export
export default routes;

