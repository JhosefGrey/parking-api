import { Request, Response } from "express";
import { login, registrarNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, email, clave } = req.body;
        await registrarNewUser({ nombre, apellido, email, clave });
        return res.sendStatus(200);
    } catch (error) {
        handleHttp(res, `${error}`)
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        const { email, clave } = req.body;
        await login({ email, clave });
        return res.sendStatus(200);
    } catch (error) {
        handleHttp(res, `${error}`)
    }
}

export { registerCtrl, loginCtrl };