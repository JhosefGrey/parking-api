import { Request, Response } from "express"
import { Usuario } from "../models/user.model";
import { handleHttp } from "../utils/error.handle";
import { insertUsuario } from "../services/usuario";


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

        const response = await insertUsuario(req.body);
        res.sendStatus(200);
    } catch (error) {
        handleHttp(res, 'Error al crear el usuario', error);
    }
}

export { getAll, getById, post, }