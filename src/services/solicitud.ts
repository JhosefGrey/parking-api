import { SolicitudInterface, SolicitudUpdate } from "../interfaces/solicitud.interface";
import { Solicitud } from "../models/solicitud.model";

const getAll = async () => {
    const listado = await Solicitud.find();
    return listado;
};

const getAllByAgente = async (idAgente: string) => {
    const listado = await Solicitud.find({ agenteAsignado: idAgente });
    return listado;
};

const getAllByUsuario = async (idUsuario: string) => {
    const listado = await Solicitud.find({ usuarioSolicitud: idUsuario });
    return listado;
};

const getById = async (id: string) => {
    const obj = await Solicitud.findById(id);
    return obj;
}

const create = async (obj: SolicitudInterface) => {
    await Solicitud.create({
        agenteAsignado: obj.agenteAsignado,
        completada: obj.completada,
        fechaAsignado: obj.fechaAsignado,
        fechaSolicitud: obj.fechaSolicitud,
        parqueoSolicitado: obj.parqueoSolicitado,
        usuarioSolicitud: obj.usuarioSolicitud
    })
}

const update = async (obj: SolicitudUpdate) => {
    const existe = await Solicitud.findOne({ _id: obj.idSolicitud });

    if (!existe)
        throw "La casa no existe";

    await Solicitud.updateOne({ _id: obj.idSolicitud }, {
        agenteAsignado: obj.agenteAsignado,
        completada: obj.completada,
        fechaAsignado: obj.fechaAsignado,
        fechaSolicitud: obj.fechaSolicitud,
        parqueoSolicitado: obj.parqueoSolicitado,
        usuarioSolicitud: obj.usuarioSolicitud
    })
}

const deleteSolicitud = async (id: string) => {
    const existe = await Solicitud.findOne({ _id: id });

    if (!existe)
        throw "La casa no existe";

    await Solicitud.deleteOne({ _id: id })
}

export { getAll, getById, update, deleteSolicitud, create, getAllByAgente, getAllByUsuario }