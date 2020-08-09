import { Request, Response } from "express";
import { Patient, IPatient } from "../models/pacient";

export const getAll = async (req: Request, res: Response) => {
  try {
    let limit = Number(req.query.limit);
    let page = Number(req.query.page);
    if (req.query.limit && req.query.page) {
      res .status(200) .json( await Patient.paginate( {}, { perPage: limit, page: page, populate: { path: "history" } }));
    } else {
     res.status(200).json(await Patient.find().populate(["history"]));
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addHistory = async (req: Request, res: Response) => {
    try{
        let person = await Patient.findByIdAndUpdate(req.params.id, {$push: req.body});
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getOne = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await Patient.findById(req.params.id));
  } catch (error) {
    res.status(500).json(error);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await new Patient(req.body as IPatient).save());
  } catch (error) {
    res.status(500).json(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    //Declarate new Patient And Old Patient
    let newPatient: IPatient = req.body;
   res
      .status(204)
      .json(await Patient.findByIdAndUpdate(req.params.id, newPatient));
  } catch (error) {
    res.status(500).json(error);
  }
};

export const delet = async (req: Request, res: Response) => {
  try {
    res.status(204).json(await Patient.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteRol = async (req: Request, res: Response) => {
  try {
    //Declarate new Person
    let newPerson: IPatient = await Patient.findById(req.params.id);
    newPerson.history = newPerson.history.filter(
      (rol) => rol._id != req.params.idRol
    );
    //Asignate new values to oldPerson
    res
      .status(204)
      .json(await Patient.findByIdAndUpdate(req.params.id, newPerson));
  } catch (error) {
    res.status(500).json(error);
  }
};
