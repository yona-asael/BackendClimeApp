import { Request, Response } from 'express'; 
import {Recipe, IRecipe } from '../models/recipe'

export const getAll = async (req: Request, res: Response, next) => {
    try {
        let limit = Number(req.query.limit);
        let page = Number(req.query.page);
        if (req.query.limit && req.query.page) {
          res.status(200).json(await Recipe.paginate({ status: false}, { perPage: limit, page: page, populate: { path: "person" } })) ;
        } else {
            res.status(200).json(await Recipe.find().populate(['recipe']));
        }
    } catch (error) {
        res.status(500).json(error);
    }
}



export const getOne = async (req: Request, res: Response) => {
    try {
        res.status(200).json(await Recipe.findById(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        res.status(201).json(await new Recipe(req.body as IRecipe).save());
    } catch (error) {
        res.status(500).json(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        //Declarate new Recipe And Old Recipe
        let newRecipe: IRecipe = req.body;
        //Asignate new values to oldRecipe
       res.status(204).json(await Recipe.findByIdAndUpdate(req.params.id, newRecipe));
    } catch (error) {
        res.status(500).json(error);
    }
}

export const delet = async (req: Request, res: Response) => {
    try {
        res.status(204).json(await Recipe.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(500).json(error);
    }
}
