import { Usuario } from "../models/user.model";
import { UpdatePwd, UpdateUsuario, UsuarioInterface } from "../interfaces/usuario.interface";
import { encrypt, verified } from "../utils/password.handle";

const getAllUsuarios = async () => {
    const usuarios = await Usuario.find();
    return usuarios;
};

const getById = async (id: string) => {
    const usuario = await Usuario.findOne({ _id: id })
    return usuario;
}

const changeStateUsuario = async (idUsuario: string) => {
    const existe = await Usuario.findOne({ _id: idUsuario });

    if (!existe)
        throw "El usuario no existe";

    const updated = await Usuario.findOneAndUpdate({ _id: idUsuario }, { activo: !existe.activo });

    return updated;
}

const updateUsuario = async (usuario: UpdateUsuario) => {

    const existe = await Usuario.findOne({ _id: usuario.idUsuario });

    if (!existe)
        throw "El usuario no existe";

    const validarEmail = await Usuario.findOne({ email: usuario.email });

    if (validarEmail && (existe.email !== usuario.email))
        throw "Correo ya utilizado";

    const usuarioUpdate = await Usuario.updateOne({ _id: usuario.idUsuario }, { nombre: usuario.nombre, apellido: usuario.apellido, email: usuario.email })

    return usuarioUpdate;
}

const updatePwdAdmin = async (usuario: UpdatePwd) => {
    const existeUsuario = await Usuario.findOne({ _id: usuario.idUsuario });

    if (!existeUsuario)
        throw "El usuario no existe";

    const pwdHash = await encrypt(usuario.nuevaClave);
    const updated = await Usuario.findOneAndUpdate({ _id: usuario.idUsuario }, { clave: pwdHash });
    return updated;
}

const updatePwd = async (usuario: UpdatePwd) => {
    const existeUsuario = await Usuario.findOne({ _id: usuario.idUsuario });

    if (!existeUsuario)
        throw "El usuario no existe";

    const validateOldPwd = await verified(usuario.clave!, existeUsuario.clave);

    if (!validateOldPwd)
        throw "La clave anterior no coincide";

    const pwdHash = await encrypt(usuario.nuevaClave);
    const updated = await Usuario.findOneAndUpdate({ _id: usuario.idUsuario }, { clave: pwdHash });
    return updated;
}

export { getAllUsuarios, getById, updateUsuario, updatePwdAdmin, updatePwd, changeStateUsuario };