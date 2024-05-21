import mongoose, { Schema, model } from "mongoose";
import { ParqueoInterface } from "../interfaces/parqueo.interface";

const parqueoSchema = new mongoose.Schema<ParqueoInterface>({
    codigo: { type: String, required: true },
    ocupado: { type : Boolean, default: false },
    bloqueId: { type: Schema.ObjectId, required: true }
}, {
    timestamps: true,
    versionKey: false
});

export const Parqueo = model('Parqueo', parqueoSchema);