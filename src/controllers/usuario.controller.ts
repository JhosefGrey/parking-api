import { Request, Response } from "express"
import { Usuario } from "../models/user.model";
import { handleHttp } from "../utils/error.handle";


const getAll = async (req: Request, res: Response) => {
    try {

        const usuarios = await Usuario.find().select('-clave');

        res.status(200);
        res.send(usuarios)


    } catch (error) {
        handleHttp(res, 'Error al obtener los usuarios');
    }
}

const getById = async (req: Request, res: Response) => {
    try {

        const idUsuario = req.params.id;

        if (!idUsuario)
            throw "Sin Id";

        const usuario = await Usuario.findById(idUsuario).select('-clave');

        if (!usuario)
            throw "Usuario no encontrado";



        res.status(200);
        res.send(usuario)


    } catch (error) {
        handleHttp(res, 'Error al obtener el usuario');
    }
}

const post = async (req: Request, res: Response) => {
    try {

        const { nombre, apellido, email, clave, apartamento } = req.body;

        if (!nombre || !apellido || !email || !clave) {
            res.status(400).json({ error: "Faltan datos" });
        }

        const usuario = await Usuario.create({
            nombre,
            apellido,
            email,
            clave,
            apartamento
        });

        if (usuario) {
            res.sendStatus(200)
        } else {
            res.sendStatus(400);
        }

    } catch (error) {
        handleHttp(res, 'Error al crear el usuario');
    }
}

export { getAll, getById, post, }