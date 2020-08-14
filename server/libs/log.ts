import {Request, Response, NextFunction} from 'express';
import Log,{Ilog} from '../models/log';


export  const LogCreate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.userId){
            await new Log({
                id: req.userId, 
                ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            }).save();
            next();
        } else {
            res.status(401).json('El token es incorrecto');
        }
    } catch(err){
        res.status(500).json(err);
    }   
}
