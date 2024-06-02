import { IAdministrador, UpdateAdministrador } from "../interfaces/administrador.interface";
import { Administrador } from "../models/administrador.model";
import { Agente } from "../models/agente.model";
import { Inquilino } from "../models/inquilino.models";

const getAll = async () => {
    const listado = await Administrador.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Administrador.findById(id);
    return obj;
}

const create = async (obj: IAdministrador) => {

    const entityValidateAdmin = await Administrador.find({ idUsuario: obj.idUsuario })
    const entityValidateAgente = await Agente.find({ idUsuario: obj.idUsuario })
    const entityValidateInquilino = await Inquilino.find({ idUsuario: obj.idUsuario })

    if(entityValidateAgente || entityValidateAdmin || entityValidateInquilino) throw "Usuario ya ingresado";
    
    await Administrador.create({
        apellido: obj.apellido,
        idUsuario: obj.idUsuario,
        nombre: obj.nombre
    })

}

const update = async (obj: UpdateAdministrador) => {
    const existe = await Administrador.findOne({ _id: obj.idUsuario });

    if (!existe)
        throw "El administrador no existe";

    await Administrador.updateOne({ _id: obj.idAdministrador }, { nombre: obj.nombre, apellido: obj.apellido, idUsuario: obj.idUsuario })

}

const deleteAdministrador = async (id: string) => {
    const existe = await Administrador.findOne({ _id: id });

    if (!existe)
        throw "El administrador no existe";

    await Administrador.deleteOne({ _id: id })
}

export { getAll, getById, update, deleteAdministrador, create }