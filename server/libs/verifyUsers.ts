import {NextFunction, Request, Response} from "express";
import User, {IUser} from '../models/users';
import {Person, IPerson} from '../models/person';
import {signUp} from '../controllers/auth.controller';


export const VerifyUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.find().limit(5);   
    if(user.length == 0){
        let user: IUser = req.body as IUser;
        let person: IPerson = await (new Person({
            name: 'Admin', 
            lastname: 'Admin',
            address: 'nothing',
            chellphone: '12312312',
            job: 'admin',
            rol: 'Administrado'})).save();
        user.person = person._id;
        let newUser: IUser = await (new User(user));
        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();
        next();
     } else {
        next(); 
    }
}
