import { CasaInterface, CasaUpdate } from "../interfaces/casa.interface";
import { Casa } from "../models/casa.model";

const getAll = async () => {
    const listado = await Casa.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Casa.findById(id);
    return obj;
}

const create = async (obj: CasaInterface) => {
    await Casa.create({
        codigo: obj.codigo,
        bloqueId: obj.bloqueId,
        direccion: obj.direccion
    })
}

const update = async (obj: CasaUpdate) => {
    const existe = await Casa.findOne({ _id: obj.idCasa });

    if (!existe)
        throw "La casa no existe";

    await Casa.updateOne({ _id: obj.idCasa }, { codigo: obj.codigo, bloqueId: obj.bloqueId, direccion: obj.direccion })
}

const deleteCasa = async (id: string) => {
    const existe = await Casa.findOne({ _id: id });

    if (!existe)
        throw "La casa no existe";

    await Casa.deleteOne({ _id: id })
}

export { getAll, getById, update, deleteCasa, create }