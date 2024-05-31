import { Request, Response } from "express";
import { login, registrarNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
    try {
        const { email, clave } = req.body;
        await registrarNewUser({ email, clave });
        return res.sendStatus(200);
    } catch (error) {
        handleHttp(res, `${error}`)
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        const { email, clave } = req.body;
        const jwt = await login({ email, clave });
        res.status(200);
        return res.json({
            token: jwt,
            user: email
        })
    } catch (error) {
        handleHttp(res, `${error}`)
    }
}

export { registerCtrl, loginCtrl };