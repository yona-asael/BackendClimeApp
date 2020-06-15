import {Request, Response} from 'express';

export function helloWord(req: Request, res: Response): Response {
    return res.json({
        message: 'Hello world'
    })
}