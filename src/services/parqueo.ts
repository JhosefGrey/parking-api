import { ParqueoInterface, ParqueoUpdate } from "../interfaces/parqueo.interface";
import { Parqueo } from "../models/parqueo.model";

const getAll = async () => {
    const listado = await Parqueo.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Parqueo.findById(id);
    return obj;
}

const create = async (obj: ParqueoInterface) => {
    await Parqueo.create({
        bloqueId: obj.bloqueId,
        codigo: obj.codigo,
        ocupado: obj.ocupado
    })
}

const update = async (obj: ParqueoUpdate) => {
    const existe = await Parqueo.findOne({ _id: obj.idParqueo });

    if (!existe)
        throw "La casa no existe";

    await Parqueo.updateOne({ _id: obj.idParqueo }, { bloqueId: obj.bloqueId, codigo: obj.codigo, ocupado: obj.ocupado })
}

const deleteParqueo = async (id: string) => {
    const existe = await Parqueo.findOne({ _id: id });

    if (!existe)
        throw "La casa no existe";

    await Parqueo.deleteOne({ _id: id })
}

export { getAll, getById, update, deleteParqueo, create }