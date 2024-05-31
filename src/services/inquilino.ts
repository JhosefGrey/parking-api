import { UpdateInquilino } from "../interfaces/inquilino.interface";
import { Inquilino } from "../models/inquilino.models";


const getAll = async () => {
    const listado = await Inquilino.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Inquilino.findById(id);
    return obj;
}

const update = async (obj: UpdateInquilino) => {
    const existe = await Inquilino.findOne({ _id: obj.idUsuario });

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

export { getAll, getById, update, deleteInquilino }