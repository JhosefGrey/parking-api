export interface UsuarioInterface {
    nombre: string,
    apellido: string,
    email: string,
    clave: string,
    rol: "admin" | "seg" | "user"
}

export interface IUsuario {
    nombre: string,
    apellido: string,
    email: string,
    rol: "admin" | "seg" | "user"
}