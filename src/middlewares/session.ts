import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;

        if (!token)
            throw "Sin token";

        const jwt = token.split(' ').pop();
        const isCorrect = verifyToken(`${jwt}`);

        if (isCorrect)
            next();
        else {

            throw "Sesión Invalida"
        }

    } catch (error) {
        res.status(400);
        res.send({ error: error });
    }
}

export { checkJwt };