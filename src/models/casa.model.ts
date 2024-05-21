import mongoose, { Schema, model } from "mongoose";
import { CasaInterface } from "../interfaces/casa.interface";

const casaSchema = new mongoose.Schema<CasaInterface>({
    codigo: { type: String, required: true },
    direccion: { type: String, required: true },
    bloqueId: { type: Schema.ObjectId, default: null }

}, {
    timestamps: true,
    versionKey: false
});

export const Casa = model('Casa', casaSchema);