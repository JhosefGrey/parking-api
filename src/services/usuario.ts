import { Usuario } from "../models/user.model";
import { UsuarioInterface } from "../interfaces/usuario.interface";

const insertUsuario = async (usuario: UsuarioInterface) => {
    const responseInsert = await Usuario.create(usuario);
    return responseInsert;
};

export { insertUsuario };