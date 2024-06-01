import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { create, deleteBloque, getAll, getById, update, } from '../services/bloque'

const getAllBloquees = async (req: Request, res: Response) => {
    try {

        const listado = await getAll();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByIdBloque = async (req: Request, res: Response) => {
    try {

        const idBloque = req.params.id;

        if (!idBloque)
            throw "Sin Id";

        const obj = await getById(idBloque);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateBloque = async (req: Request, res: Response) => {
    try {

        const { idBloque, codigo } = req.body;

        if (!idBloque)
            throw "Sin Id";

        await update({ idBloque, codigo });
        res.sendStatus(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const createBloque = async (req: Request, res: Response) => {
    try {

        const { codigo } = req.body;

        await create({ codigo });
        res.sendStatus(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const deleteBloqueCtrl = async (req: Request, res: Response) => {
    try {

        const idBloque = req.params.id;

        if (!idBloque)
            throw "Sin Id";

        await deleteBloque(idBloque);
        res.sendStatus(200);

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

export { getAllBloquees, getByIdBloque, updateBloque, deleteBloqueCtrl, createBloque }