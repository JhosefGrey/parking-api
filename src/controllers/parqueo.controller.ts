import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { create, deleteParqueo, getAll, getAllByBloque, getById, update, updateEstado, } from '../services/parqueo'

const getAllParqueoes = async (req: Request, res: Response) => {
    try {

        const listado = await getAll();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}


const getAllParqueosByIdBloqueCtrl = async (req: Request, res: Response) => {
    try {

        const idBloque = req.params.id;

        const listado = await getAllByBloque(idBloque);

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByIdParqueo = async (req: Request, res: Response) => {
    try {

        const idParqueo = req.params.id;

        if (!idParqueo)
            throw "Sin Id";

        const obj = await getById(idParqueo);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateParqueo = async (req: Request, res: Response) => {
    try {

        const { idParqueo, codigo, bloqueId, ocupado } = req.body;

        if (!idParqueo)
            throw "Sin Id";

        await update({ idParqueo, codigo, bloqueId, ocupado });
        res.sendStatus(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateEstadoCtrl = async (req: Request, res: Response) => {
    try {

        const idParqueo = req.params.id;

        if (!idParqueo)
            throw "Sin Id";

        await updateEstado(idParqueo);

        res.sendStatus(200);
    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const createParqueo = async (req: Request, res: Response) => {
    try {

        const { codigo, bloqueId } = req.body;

        await create({ codigo, bloqueId, ocupado: false });
        res.sendStatus(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const deleteParqueoCtrl = async (req: Request, res: Response) => {
    try {

        const idParqueo = req.params.id;

        if (!idParqueo)
            throw "Sin Id";

        await deleteParqueo(idParqueo);
        res.sendStatus(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

export { getAllParqueoes, getByIdParqueo, updateParqueo, deleteParqueoCtrl, createParqueo, updateEstadoCtrl, getAllParqueosByIdBloqueCtrl }