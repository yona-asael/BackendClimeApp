import { Router, Response, Request } from 'express';

const app: Router = Router();

app.get('/', (req: Request, res: Response) => {

    res.json({

    });
});

app.get('/:id', (req: Request, res: Response) => {
    let id: number = Number(req.params.id);
    res.json({

    });
});

app.post('/', (req: Request, res: Response) => {
    let body = req.body;
    res.json({

    });
});

app.put('/:id', (req: Request, res: Response) => {
    let body = req.body;
    let od = req.params.id;
    res.json({

    });
});

export { app };