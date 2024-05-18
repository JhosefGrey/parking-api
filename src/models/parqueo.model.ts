import mongoose, { model } from "mongoose";

const parqueoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true, unique: true },
    fechaCreacion: { type: Date, default: Date.now },
    creadoPor: { type: mongoose.Schema.ObjectId, required: true }
});

export const Parqueo = model('Parqueo', parqueoSchema);