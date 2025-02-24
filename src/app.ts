import express, { Request, Response } from 'express';

const app = express();

app.get('/', async(req: Request, res: Response): Promise<any> => {
    return res.status(200).json({
        message: 'Hello express api!'
    })
});


app.all("*", async(req: Request, res: Response): Promise<any> => {
    return res.status(404).json({
        message: 'Route not found!'
    })
})


export default app;