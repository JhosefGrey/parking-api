export interface UsuarioInterface {
    nombre: string,
    apellido: string,
    email: string,
    clave: string,
    rol: "admin" | "seg" | "user"
    activo: boolean
}

export interface IUsuario {
    nombre: string,
    apellido: string,
    email: string,
    rol: "admin" | "seg" | "user"
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

