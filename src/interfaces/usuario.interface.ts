export interface IUsuario {
    email: string,
    clave: string
}

export interface UpdateUsuario {
    idUsuario: string,
    nombre: string,
    apellido: string,
    email: string
}

export interface UpdatePwd {
    idUsuario: string
    clave?: string,
    nuevaClave: string,
}

