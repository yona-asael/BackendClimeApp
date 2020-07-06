import { Request, Response } from 'express';
import Medic from '../models/medic';
import { IMedic } from '../models/medic';

export const getAll = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await Medic.find());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        console.log(req.params.id);
        res.status(200).json(await Medic.findById(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        res.status(201).json(await new Medic(req.body as IMedic).save());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        //Declare all variables of models and iterfaces used 
        let newMedic: IMedic = req.body;
        // Changue for new Properties
        res.status(204).json(await Medic.findByIdAndUpdate(req.params.id, newMedic));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const delet = async (req: Request, res: Response) => {
    try {
        res.status(204).json(Medic.deleteOne({ _id: req.params.id }));
    } catch (error) {
        res.status(200).json(error);
    }
}
