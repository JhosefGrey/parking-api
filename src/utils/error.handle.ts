import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any ) => {
    res.status(400);
    res.send({ error });
}

export { handleHttp };