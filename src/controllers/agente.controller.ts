import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { createAgente, deleteAgente, getAll, getById, update,  } from '../services/agente'

const getAllAgentes = async (req: Request, res: Response) => {
    try {

        const listado = await getAll();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByIdAgente = async (req: Request, res: Response) => {
    try {

        const idAgente = req.params.id;

        if (!idAgente)
            throw "Sin Id";

        const obj = await getById(idAgente);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const createAgenteCtrl = async (req: Request, res: Response) => {
    try {

        const { nombre, apellido, idUsuario } = req.body;

         await createAgente({  nombre, apellido, idUsuario });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateAgente = async (req: Request, res: Response) => {
    try {

        const { idAgente, nombre, apellido, idUsuario } = req.body;

        if (!idAgente)
            throw "Sin Id";

        await update({ idAgente, nombre, apellido, idUsuario });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const deleteAgenteCtrl = async (req: Request, res: Response) => {
    try {

        const idAgente = req.params.id;

        if (!idAgente)
            throw "Sin Id";

        await deleteAgente(idAgente);
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

export { getAllAgentes, getByIdAgente, updateAgente, deleteAgenteCtrl, createAgenteCtrl }