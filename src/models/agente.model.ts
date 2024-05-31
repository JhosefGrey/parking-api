import mongoose, { Schema, model } from "mongoose";
import { IAgente } from "../interfaces/agente.interface";

const agenteSchema = new mongoose.Schema<IAgente>({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    idUsuario: { type: Schema.ObjectId, required: true }
}, {
    timestamps: true,
    versionKey: false
});

export const Agente = model('Agente', agenteSchema);