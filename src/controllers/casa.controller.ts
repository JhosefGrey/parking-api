import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { create, deleteCasa, getAll, getById, update } from '../services/casa'

const getAllCasaes = async (req: Request, res: Response) => {
    try {

        const listado = await getAll();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByIdCasa = async (req: Request, res: Response) => {
    try {

        const idCasa = req.params.id;

        if (!idCasa)
            throw "Sin Id";

        const obj = await getById(idCasa);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateCasa = async (req: Request, res: Response) => {
    try {

        const { idCasa, codigo, bloqueId, direccion } = req.body;

        if (!idCasa)
            throw "Sin Id";

        await update({ bloqueId, idCasa, codigo, direccion });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const createCasa = async (req: Request, res: Response) => {
    try {

        const { codigo, bloqueId, direccion } = req.body;

        await create({ codigo, bloqueId, direccion });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const deleteCasaCtrl = async (req: Request, res: Response) => {
    try {

        const idCasa = req.params.id;

        if (!idCasa)
            throw "Sin Id";

        await deleteCasa(idCasa);
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

export { getAllCasaes, getByIdCasa, updateCasa, deleteCasaCtrl, createCasa }