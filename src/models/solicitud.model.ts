import mongoose, { Schema, model } from "mongoose";
import { SolicitudInterface } from "../interfaces/solicitud.interface";

const solicitudSchema = new mongoose.Schema<SolicitudInterface>({
    agenteAsignado: { type: Schema.ObjectId, default: null },
    completada: { type: Boolean, default: false },
    fechaAsignado: { type: Date, default: null },
    fechaSolicitud: { type: Date, default: new Date() },
    parqueoSolicitado: { type: Schema.ObjectId, required: true },
    usuarioSolicitud: { type: Schema.ObjectId, required: true }
}, {
    timestamps: true,
    versionKey: false
});

export const Solicitud = model('Solicitud', solicitudSchema);