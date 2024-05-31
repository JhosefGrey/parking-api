import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { deleteAdministrador, getAll, getById, update,  } from '../services/administrador'

const getAllAdministradores = async (req: Request, res: Response) => {
    try {

        const listado = await getAll();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByIdAdministrador = async (req: Request, res: Response) => {
    try {

        const idAdministrador = req.params.id;

        if (!idAdministrador)
            throw "Sin Id";

        const obj = await getById(idAdministrador);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateAdministrador = async (req: Request, res: Response) => {
    try {

        const { idAdministrador, nombre, apellido, idUsuario } = req.body;

        if (!idAdministrador)
            throw "Sin Id";

        await update({ idAdministrador, nombre, apellido, idUsuario });
        res.status(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const deleteAdministradorCtrl = async (req: Request, res: Response) => {
    try {

        const idAdministrador = req.params.id;

        if (!idAdministrador)
            throw "Sin Id";

        await deleteAdministrador(idAdministrador);
        res.status(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

export { getAllAdministradores, getByIdAdministrador, updateAdministrador, deleteAdministradorCtrl }