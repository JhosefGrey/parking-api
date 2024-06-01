import { compare } from "bcryptjs";
import { AuthInterface } from "../interfaces/auth.interface";
import { Usuario } from "../models/user.model";
import { encrypt } from "../utils/password.handle";
import { generateToken } from "../utils/jwt.handle";
import { IUsuario } from "../interfaces/usuario.interface";
import { Administrador } from "../models/administrador.model";
import { Agente } from "../models/agente.model";
import { Inquilino } from "../models/inquilino.models";

const registrarNewUser = async (usuario: IUsuario) => {
    const checkIs = await Usuario.findOne({ email: usuario.email });

    if (checkIs) throw "Usuario ya registrado"

    const passHash = await encrypt(usuario.clave);
    usuario.clave = passHash;

    const responseInsert = await Usuario.create(usuario);
    return responseInsert;
}

const login = async (usuario: AuthInterface, tipo: 'admin' | 'agent' | 'user') => {
    const checkIs = await Usuario.findOne({ email: usuario.email });
    if (!checkIs) throw "Usuario no encontrado";

    const pwdHash = checkIs.clave;
    const isCorrect = await compare(usuario.clave, pwdHash);

    if (!isCorrect) throw "Clave incorrecta";

    let userData: any = null;

    switch (tipo) {
        case 'admin':
            userData = await Administrador.findOne({ idUsuario: checkIs.id })
            break;
        case 'agent':
            userData = await Agente.findOne({ idUsuario: checkIs.id })
            break;
        case 'user':
            userData = await Inquilino.findOne({ idUsuario: checkIs.id })
            break;
    }

    if (userData === null) throw "Usuario registrado pero no asignado";

    const token = generateToken({ user: checkIs.email })

    return { token, userData };
}

export { registrarNewUser, login }