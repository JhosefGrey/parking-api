import mongoose, { Schema, model } from "mongoose";
import { IInquilino } from "../interfaces/inquilino.interface";

const InquilinoSchema = new mongoose.Schema<IInquilino>({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    idCasa: { type: Schema.ObjectId, required: true },
    idUsuario: { type: Schema.ObjectId, required: true }
}, {
    timestamps: true,
    versionKey: false
});

export const Inquilino = model('Inquilino', InquilinoSchema);