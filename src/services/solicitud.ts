import { SolicitudCreate, SolicitudInterface, SolicitudUpdate } from "../interfaces/solicitud.interface";
import { Parqueo } from "../models/parqueo.model";
import { Solicitud } from "../models/solicitud.model";

const getAll = async () => {
    const listado = await Solicitud.find();
    return listado;
};

const getAllPendientes = async () => {
    const listado = await Solicitud.aggregate([
        { $match: { "completada": false } },
        {
            $lookup: {
                from: "inquilinos",
                localField: 'usuarioSolicitud',
                foreignField: "_id",
                as: "inquilino",
            }
        },
        {
            $unwind: "$inquilino"
        },
        {
            $lookup: {
                from: "parqueos",
                localField: 'parqueoSolicitado',
                foreignField: "_id",
                as: "parqueo",
            }
        },
        {
            $unwind: "$parqueo"
        },
    ])
    return listado;
};

const getAllByAgente = async (idAgente: string) => {
    // const listado = await Solicitud.find({ agenteAsignado: idAgente });

    const listado = await Solicitud.aggregate([
        { $match: { "agenteAsignado": idAgente } },
        {
            $lookup: {
                from: "inquilinos",
                localField: 'usuarioSolicitud',
                foreignField: "_id",
                as: "inquilino",
            }
        },
        {
            $unwind: "$inquilino"
        },
        {
            $lookup: {
                from: "parqueos",
                localField: 'parqueoSolicitado',
                foreignField: "_id",
                as: "parqueo",
            }
        },
        {
            $unwind: "$parqueo"
        },
    ])
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

const create = async (obj: SolicitudCreate) => {
    await Solicitud.create({
        parqueoSolicitado: obj.parqueoSolicitado,
        usuarioSolicitud: obj.usuarioSolicitud
    })
}

const update = async (obj: SolicitudUpdate) => {
    const existe = await Solicitud.findOne({ _id: obj.idSolicitud });

    if (!existe)
        throw "La casa no existe";


    await Parqueo.findByIdAndUpdate(existe.parqueoSolicitado, { ocupado: true })

    await Solicitud.updateOne({ _id: obj.idSolicitud }, {
        agenteAsignado: obj.agenteAsignado,
        completada: true,
        fechaAsignado: new Date()
    })
}

const deleteSolicitud = async (id: string) => {
    const existe = await Solicitud.findOne({ _id: id });

    if (!existe)
        throw "La casa no existe";

    await Solicitud.deleteOne({ _id: id })
}

export { getAll, getById, update, deleteSolicitud, create, getAllByAgente, getAllByUsuario, getAllPendientes }