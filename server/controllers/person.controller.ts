import { Request, Response } from 'express';
import Person, { IPerson } from '../models/person';

export const getAll = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await Person.find());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        res.status(200).json(Person.findById(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        res.status(201).json(await new Person(req.body as IPerson).save());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        //Declarate new Person And Old Person
        let newPerson: IPerson = req.body;
        //Asignate new values to oldPerson
        res.status(204).json(await Person.findByIdAndUpdate(req.params.id, newPerson));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const delet = async (req: Request, res: Response) => {
    try {
        res.status(204).json(await Person.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const addRol = async (req: Request, res: Response) => {
    try {
        //Declarate new Person
        let newPerson: IPerson = await Person.findById(req.params.id);
        newPerson.rol.push(req.body);
        //Asignate new values to oldPerson
        res.status(204).json(await Person.findByIdAndUpdate(req.params.id, newPerson));
    } catch (error) {
        res.status(500).json(error);
    }
}


export const deleteRol = async (req: Request, res: Response) => {
    try {
        //Declarate new Person
        let newPerson: IPerson = await Person.findById(req.params.id);
        newPerson.rol = newPerson.rol.filter((rol) => rol._id != req.params.idRol);
        //Asignate new values to oldPerson
        res.status(204).json(await Person.findByIdAndUpdate(req.params.id, newPerson));
    } catch (error) {
        res.status(500).json(error);
    }
}
