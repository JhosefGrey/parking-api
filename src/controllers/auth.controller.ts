import { Request, Response } from "express";
import { login, registrarNewAdminUser, registrarNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, email, clave } = req.body;
        await registrarNewUser({ nombre, apellido, email, clave, rol: 'user', activo: true });
        return res.sendStatus(200);
    } catch (error) {
        handleHttp(res, `${error}`)
    }
}

const registerAdminCtrl = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, email, clave, rol } = req.body;
        await registrarNewAdminUser({ nombre, apellido, email, clave, rol, activo: true });
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
            token: jwt
        })
    } catch (error) {
        handleHttp(res, `${error}`)
    }
}

export { registerCtrl, registerAdminCtrl, loginCtrl };