import {NextFunction, Request, Response} from "express";
import User from '../models/users';
import {signUp} from '../controllers/auth.controller';
export const VerifyUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.find().limit(5);   
    if(user.length == 0){
        signUp(req, res);
    } else {
        next(); 
    }
}
