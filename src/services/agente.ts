import { IAgente, UpdateAgente } from "../interfaces/agente.interface";
import { Administrador } from "../models/administrador.model";
import { Agente } from "../models/agente.model";
import { Inquilino } from "../models/inquilino.models";

const getAll = async () => {
    const listado = await Agente.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Agente.findById(id);
    return obj;
}

const createAgente = async (obj: IAgente) => {
   
    const entityValidateAdmin = await Administrador.findOne({ idUsuario: obj.idUsuario })
    const entityValidateAgente = await Agente.findOne({ idUsuario: obj.idUsuario })
    const entityValidateInquilino = await Inquilino.findOne({ idUsuario: obj.idUsuario })

    if(entityValidateAgente || entityValidateAdmin || entityValidateInquilino) throw "Usuario ya ingresado";

    await Agente.create({
        apellido: obj.apellido,
        idUsuario: obj.idUsuario,
        nombre: obj.nombre
    })
}

const update = async (obj: UpdateAgente) => {
    const existe = await Agente.findOne({ _id: obj.idAgente });

    if (!existe)
        throw "El agente no existe";

   await Agente.updateOne({ _id: obj.idAgente }, { nombre: obj.nombre, apellido: obj.apellido, idUsuario: obj.idUsuario })
  
}

const deleteAgente = async (id: string) => {
    const existe = await Agente.findOne({ _id: id });

    if (!existe)
        throw "El agente no existe";

    await Agente.deleteOne({ _id: id });


}

export { getAll, getById, createAgente, update, deleteAgente }