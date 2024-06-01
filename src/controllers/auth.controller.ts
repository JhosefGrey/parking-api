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
        const { email, clave, tipo } = req.body;

        let tipoEnum: 'admin' | 'agent' | 'user';

        switch (tipo) {
            case 1:
                tipoEnum = 'admin'
                break;
            case 2:
                tipoEnum = 'agent'
                break;
            case 3:
                tipoEnum = 'user'
                break;

            default:
                tipoEnum = 'user'
                break;
        }

        const jwt = await login({ email, clave }, tipoEnum);
        
        res.status(200);
        return res.json({
            token: jwt.token,
            user: jwt.userData
        })
    } catch (error) {
        handleHttp(res, `${error}`)
    }
}

export { registerCtrl, loginCtrl };