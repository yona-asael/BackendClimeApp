import { Request, Response } from 'express';
import User, { IUser } from '../models/users';
import JWT from 'jsonwebtoken';


export const signUp = async (req: Request, res: Response) => {
    console.time('Registrar')
    //Get values
    let newUser: IUser = new User(req.body as IUser)
    //Create New User
    newUser.password = await newUser.encryptPassword(newUser.password);
    const user = await newUser.save();
    //Token 
    const token: string = JWT.sign({ _id: `${user._id}` }, `${process.env.ACCESS_TOKEN_SECRET}`);
    console.timeEnd('Registrar')
    res.status(200).header('auth-token', token).json(user);
}

export const LogIn = async (req: Request, res: Response) => {
    console.time('Login');
    //Search user on database
    const user = await User.findOne({ username: req.body.username });
    //Validate User
    if (!user) return res.status(400).json("Incorrect username or password");
    const validated = await user.validatePassword(req.body.password);
    if (!validated) return res.status(400).json("Incorrect username or password");
    // Sign the token 
    const token: string = JWT.sign({ _id: user._id }, `${process.env.ACCESS_TOKEN_SECRET}`, {
        expiresIn: 60 * 60 * 12
    });
    console.timeEnd('Login');
    res.status(200).header('auth-token', token).json(user);
}

export const dates = async (req: Request, res: Response) => {
    let startdate =  new Date(req.params.start); 
    let enddate =  new Date(req.params.end);
    let users = await User.find({createdAt:  {$lt: new Date(startdate.toISOString()), $gte: new Date(enddate.toISOString())}}) 
    res.status(200).json(users);
} 


export const profile = async (req: Request, res: Response) => {
    // Search user profiled
    const user = await User.findById(req.userId).exec();
    if (!user) return res.status(404).json('No user found');
    res.status(200).json(user);
}
