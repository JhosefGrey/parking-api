import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { createInquilino, deleteInquilino, getAll, getById, update, } from '../services/inquilino'

const getAllInquilinos = async (req: Request, res: Response) => {
    try {

        const listado = await getAll();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByIdInquilino = async (req: Request, res: Response) => {
    try {

        const idInquilino = req.params.id;

        if (!idInquilino)
            throw "Sin Id";

        const obj = await getById(idInquilino);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const createInquilinoCtrl = async (req: Request, res: Response) => {
    try {

        const { nombre, apellido, idUsuario, idCasa } = req.body;

        await createInquilino({ apellido, idCasa, idUsuario, nombre });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const updateInquilino = async (req: Request, res: Response) => {
    try {

        const { idInquilino, nombre, apellido, idUsuario, idCasa } = req.body;

        if (!idInquilino)
            throw "Sin Id";

        await update({ idInquilino, nombre, apellido, idUsuario, idCasa });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const deleteInquilinoCtrl = async (req: Request, res: Response) => {
    try {

        const idInquilino = req.params.id;

        if (!idInquilino)
            throw "Sin Id";

        await deleteInquilino(idInquilino);
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

export { getAllInquilinos, getByIdInquilino, updateInquilino, deleteInquilinoCtrl, createInquilinoCtrl }