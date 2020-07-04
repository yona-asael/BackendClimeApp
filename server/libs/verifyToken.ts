import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken';

interface IPayload {
    _id: string,
    iat: number;
    exp: number;
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json('Acces denied')
    const payload = JWT.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`) as IPayload;
    req.userId = payload._id;
    next();
}