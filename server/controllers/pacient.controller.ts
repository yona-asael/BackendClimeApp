import { Request, Response } from 'express';
import Patient, { IPatient } from '../models/pacient';

export const getAll = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await Patient.find());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        res.status(200).json(Patient.findById(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        res.status(201).json(await new Patient(req.body as IPatient).save());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        //Declarate new Patient And Old Patient
        let newPatient: IPatient = req.body;
        //Asignate new values to oldPatient
        if(newPatient.validateSync()){
            res.status(400).json("Error en los campos mostrados");
        }
        res.status(204).json(await Patient.findByIdAndUpdate(req.params.id, newPatient));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const delet = async (req: Request, res: Response) => {
    try {
        res.status(204).json(await Patient.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteRol = async (req: Request, res: Response) => {
    try {
        //Declarate new Person
        let newPerson: IPatient = await Patient.findById(req.params.id);
        newPerson.history = newPerson.history.filter((rol) => rol._id != req.params.idRol);
        //Asignate new values to oldPerson
        res.status(204).json(await Patient.findByIdAndUpdate(req.params.id, newPerson));
    } catch (error) {
        res.status(500).json(error);
    }
}
