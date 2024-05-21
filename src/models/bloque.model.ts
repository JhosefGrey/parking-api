import mongoose, { model } from "mongoose";
import { BloqueInterface } from "../interfaces/bloque.interface";

const BloqueSchema = new mongoose.Schema<BloqueInterface>({
    codigo: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

export const Bloque = model('Bloque', BloqueSchema);