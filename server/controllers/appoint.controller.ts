import { Request, Response } from 'express';
import { Appoint, IApoint} from '../models/appointment';

export const getAll = async (req: Request, res: Response, next) => {
    try{
        let limit = Number(req.query.limit);
        let page = Number(req.query.page);
        if (req.query.limit && req.query.page) {
            res.status(200).json(await Appoint.paginate({status: false}, { perPage: limit, page: page, populate: [{ path: 'medic', populate: {path: 'person'}}, {path: 'patient'}] })) ;
        } else {
            res.status(200).json(await Appoint.find().populate( [{ path: 'medic', populate: {path: 'person'}}, {path: 'patient'}] ));
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await Appoint.findById(req.params.id).populate( [{ path: 'medic', populate: {path: 'person'}}, {path: 'patient'}] ));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        res.status(201).json(await new Appoint(req.body as IApoint).save());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        //Declare all variables of models and iterfaces used 
        let newppoint: IApoint = req.body;
       res.status(204).json(await Appoint.findByIdAndUpdate(req.params.id, newppoint));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const delet = async (req: Request, res: Response) => {
    try {
        res.status(204).json(await Appoint.deleteOne({ _id: req.params.id }));
    } catch (error) {
        res.status(200).json(error);
    }
}


