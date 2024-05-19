import { compare } from "bcryptjs";
import { AuthInterface } from "../interfaces/auth.interface";
import { UsuarioInterface } from "../interfaces/usuario.interface";
import { Usuario } from "../models/user.model";
import { encrypt } from "../utils/password.handle";
import { generateToken } from "../utils/jwt.handle";

const registrarNewUser = async (usuario: UsuarioInterface) => {
    const checkIs = await Usuario.findOne({ email: usuario.email });

    if (checkIs) throw "Usuario ya registrado"

    const passHash = await encrypt(usuario.clave);
    usuario.clave = passHash;
    usuario.rol = 'user';
    const responseInsert = await Usuario.create(usuario);
    return responseInsert;
}

const registrarNewAdminUser = async (usuario: UsuarioInterface) => {
    const checkIs = await Usuario.findOne({ email: usuario.email });

    if (checkIs) throw "Usuario ya registrado"

    const passHash = await encrypt(usuario.clave);
    usuario.clave = passHash;
    const responseInsert = await Usuario.create(usuario);
    return responseInsert;
}

const login = async (usuario: AuthInterface) => {
    const checkIs = await Usuario.findOne({ email: usuario.email });
    if (!checkIs) throw "Usuario no encontrado";

    const pwdHash = checkIs.clave;
    const isCorrect = await compare(usuario.clave, pwdHash);

    if(!isCorrect) throw "Clave incorrecta";

    const token = generateToken({
        apellido: checkIs.apellido, 
        email: checkIs.email,
        nombre: checkIs.nombre,
        rol: checkIs.rol
    })

    return token;
}

export { registrarNewUser, registrarNewAdminUser, login }