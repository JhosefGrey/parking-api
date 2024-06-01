import { BloqueInterface, BloqueUpdate } from "../interfaces/bloque.interface";
import { Bloque } from "../models/bloque.model";

const getAll = async () => {
    const listado = await Bloque.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Bloque.findById(id);
    return obj;
}

const create = async (obj: BloqueInterface) => {
    await Bloque.create({
        codigo: obj.codigo
    })
}

const update = async (obj: BloqueUpdate) => {
    const existe = await Bloque.findOne({ _id: obj.idBloque });

    if (!existe)
        throw "El bloque no existe";

    await Bloque.updateOne({ _id: obj.idBloque }, { codigo: obj.codigo })
}

const deleteBloque = async (id: string) => {
    const existe = await Bloque.findOne({ _id: id });

    if (!existe)
        throw "El bloque no existe";

    await Bloque.deleteOne({ _id: id })
}

export { getAll, getById, update, deleteBloque, create }