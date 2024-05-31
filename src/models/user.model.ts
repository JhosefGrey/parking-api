import mongoose, { model } from "mongoose";
import { IUsuario } from "../interfaces/usuario.interface";

const usuarioSchema = new mongoose.Schema<IUsuario>({
    email: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

export const Usuario = model('Usuario', usuarioSchema);