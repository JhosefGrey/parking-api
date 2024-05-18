import { Request, Response } from "express"
import { Parqueo } from "../models/parqueo.model"


export const getAll = async (req: Request, res: Response) => {
    try {

        const parqueos = await Parqueo.find();

        res.json(parqueos)

    } catch (error) {

    }
}

export const getById = async (req: Request, res: Response) => {
    try {

        const { idParqueo } = req.body;

        if (!idParqueo) {
            res.sendStatus(400);
        }

        const parqueo = await Parqueo.findById(idParqueo);


        if (parqueo) {
            res.json(parqueo)
        } else {
            res.sendStatus(404);
        }

    } catch (error) {

    }
}

export const create = async (req: Request, res: Response) => {
    try {

        const { codigo } = req.body;

        if (!codigo) {
            res.status(400).json({ error: "Faltan datos" });
        }

        const parqueo = await Parqueo.create({
            codigo,
            creadoPor: 'jh'
        });


        if (parqueo) {
            res.json(parqueo)
        } else {
            res.sendStatus(404);
        }

    } catch (error) {

    }
}