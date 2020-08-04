import { Request, Response } from 'express';
import { Medic, IMedic } from '../models/medic';

export const getAll = async (req: Request, res: Response, next) => {
    try {
        console.time('medic')
        let limit = Number(req.query.limit);
        let page = Number(req.query.page);
        if (req.query.limit && req.query.page) {
            res.status(200).json(await Medic.paginate({}, { perPage: limit, page: page, populate: { path: "person" } })) ;
        } else {
            res.status(200).json(await Medic.find().populate(['person']));
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await Medic.findById(req.params.id).populate(['person']) );
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
       res.status(204).json(await Medic.findByIdAndUpdate(req.params.id, newMedic));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const delet = async (req: Request, res: Response) => {
    try {
        res.status(204).json(await Medic.deleteOne({ _id: req.params.id }));
    } catch (error) {
        res.status(200).json(error);
    }
}
