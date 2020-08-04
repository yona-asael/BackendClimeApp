import { Request, Response } from 'express';
import { Person, IPerson } from '../models/person';

export const getAll = async (req: Request, res: Response) => {
    try {
        console.time('get all personas')
        let limit = Number(req.query.limit);
        let page = Number(req.query.page);
        if (req.query.limit && req.query.page) {
            res.status(200).json(await Person.paginate({}, { perPage: limit, page: page, }));
            console.timeEnd('get all personas')
        } else {
            res.status(200).json(await Person.find());
            console.timeEnd('get all personas')
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await Person.findById(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        console.time('create persona');
        res.status(201).json(await new Person(req.body as IPerson).save());
        console.timeEnd('create persona');
    } catch (error) {
        res.status(500).json(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        //Declarate new Person And Old Person
        let newPerson: IPerson = req.body;
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
        res.status(202).json(await Person.findByIdAndUpdate(req.params.id, newPerson));
    } catch (error) {
        res.status(500).json(error);
    }
}
