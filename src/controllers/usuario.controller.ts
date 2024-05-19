import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { changeStateUsuario, getAllUsuarios, getUsuarioById, updatePwd, updateUsuario, updatePwdAdmin } from "../services/usuario";

const getAll = async (req: Request, res: Response) => {
    try {

        const usuarios = await getAllUsuarios();

        res.status(200);
        res.send(usuarios)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getById = async (req: Request, res: Response) => {
    try {

        const idUsuario = req.params.id;

        if (!idUsuario)
            throw "Sin Id";

        const usuario = await getUsuarioById(idUsuario);

        res.status(200);
        res.send(usuario)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {

        const { idUsuario, nombre, apellido, email } = req.body;

        if (!idUsuario)
            throw "Sin Id";

        await updateUsuario({ idUsuario, nombre, apellido, email });
        res.status(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updatedPwdAdmmin = async (req: Request, res: Response) => {
    try {

        const { idUsuario, nuevaClave } = req.body;

        if (!idUsuario)
            throw "Sin Id";

        await updatePwdAdmin({ idUsuario, nuevaClave });
        res.status(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updatedPwd = async (req: Request, res: Response) => {
    try {

        const { idUsuario, clave, nuevaClave } = req.body;

        if (!idUsuario)
            throw "Sin Id";

        await updatePwd({ idUsuario, clave, nuevaClave });
        res.status(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}


const changeStateUser = async (req: Request, res: Response) => {
    try {

        const idUsuario = req.params.id;

        if (!idUsuario)
            throw "Sin Id";

        await changeStateUsuario(idUsuario);
        res.status(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}


export { getAll, getById, updatedPwdAdmmin, changeStateUser, updateUser, updatedPwd }