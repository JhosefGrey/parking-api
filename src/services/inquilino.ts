import { IInquilino, UpdateInquilino } from "../interfaces/inquilino.interface";
import { Administrador } from "../models/administrador.model";
import { Agente } from "../models/agente.model";
import { Inquilino } from "../models/inquilino.models";


const getAll = async () => {
    const listado = await Inquilino.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Inquilino.findById(id);
    return obj;
}

const createInquilino = async (obj: IInquilino) => {
   
    const entityValidateAdmin = await Administrador.findOne({ idUsuario: obj.idUsuario })
    const entityValidateAgente = await Agente.findOne({ idUsuario: obj.idUsuario })
    const entityValidateInquilino = await Inquilino.findOne({ idUsuario: obj.idUsuario })

    if(entityValidateAgente || entityValidateAdmin || entityValidateInquilino) throw "Usuario ya ingresado";

    await Inquilino.create({
        apellido: obj.apellido,
        idUsuario: obj.idUsuario,
        nombre: obj.nombre,
        idCasa: obj.idCasa
    })
}

const update = async (obj: UpdateInquilino) => {
    const existe = await Inquilino.findOne({ _id: obj.idInquilino });

    if (!existe)
        throw "El inquilino no existe";

    await Inquilino.updateOne({ _id: obj.idInquilino }, { nombre: obj.nombre, apellido: obj.apellido, idCasa: obj.idCasa, idUsuario: obj.idUsuario })

}

const deleteInquilino = async (id: string) => {
    const existe = await Inquilino.findOne({ _id: id });

    if (!existe)
        throw "El inquilino no existe";

    await Inquilino.deleteOne({ _id: id })
}

export { getAll, getById, update, deleteInquilino, createInquilino }