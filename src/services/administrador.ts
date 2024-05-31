import { UpdateAdministrador } from "../interfaces/administrador.interface";
import { Administrador } from "../models/administrador.model";

const getAll = async () => {
    const listado = await Administrador.find();
    return listado;
};

const getById = async (id: string) => {
    const obj = await Administrador.findById(id);
    return obj;
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

export { getAll, getById, update, deleteAdministrador }