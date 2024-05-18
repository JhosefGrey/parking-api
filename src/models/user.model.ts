import mongoose, { model } from "mongoose";
import { UsuarioInterface } from "../interfaces/usuario.interface";

const usuarioSchema = new mongoose.Schema<UsuarioInterface>({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

export const Usuario = model('Usuario', usuarioSchema);