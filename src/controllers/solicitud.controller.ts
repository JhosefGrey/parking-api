import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { create, deleteSolicitud, getAll, getAllByAgente, getAllByUsuario, getAllPendientes, getById, update } from '../services/solicitud'

const getAllSolicitudes = async (req: Request, res: Response) => {
    try {

        const listado = await getAll();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getAllSolicitudesPendientes = async (req: Request, res: Response) => {
    try {

        const listado = await getAllPendientes();

        res.status(200);
        res.send(listado)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByIdSolicitud = async (req: Request, res: Response) => {
    try {

        const idSolicitud = req.params.id;

        if (!idSolicitud)
            throw "Sin Id";

        const obj = await getById(idSolicitud);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByAgente = async (req: Request, res: Response) => {
    try {

        const idAgente = req.params.id;

        if (!idAgente)
            throw "Sin Id";

        const obj = await getAllByAgente(idAgente);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const getByUsuario = async (req: Request, res: Response) => {
    try {

        const idUsuario = req.params.id;

        if (!idUsuario)
            throw "Sin Id";

        const obj = await getAllByUsuario(idUsuario);

        res.status(200);
        res.send(obj)


    } catch (error) {
        handleHttp(res, `${error}`);
    }
}


const updateSolicitud = async (req: Request, res: Response) => {
    try {

        const { agenteAsignado, idSolicitud,  } = req.body;

        if (!idSolicitud)
            throw "Sin Id";

        await update({ agenteAsignado, idSolicitud });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const createSolicitud = async (req: Request, res: Response) => {
    try {

        const { parqueoSolicitado, usuarioSolicitud } = req.body;

        await create({ parqueoSolicitado, usuarioSolicitud });
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

const deleteSolicitudCtrl = async (req: Request, res: Response) => {
    try {

        const idSolicitud = req.params.id;

        if (!idSolicitud)
            throw "Sin Id";

        await deleteSolicitud(idSolicitud);
        res.status(200).send();

    } catch (error) {
        handleHttp(res, `${error}`);
    }
}

export { getAllSolicitudes, getByIdSolicitud, updateSolicitud, deleteSolicitudCtrl, createSolicitud, getByAgente, getByUsuario, getAllSolicitudesPendientes }