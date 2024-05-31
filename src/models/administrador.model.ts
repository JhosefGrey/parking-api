import mongoose, { Schema, model } from "mongoose";
import { IAdministrador } from "../interfaces/administrador.interface";

const administradorSchema = new mongoose.Schema<IAdministrador>({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    idUsuario: { type: Schema.ObjectId, required: true }
}, {
    timestamps: true,
    versionKey: false
});

export const Administrador = model('Administrador', administradorSchema);