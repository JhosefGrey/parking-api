export interface ParqueoInterface {
    codigo: string,
    ocupado: boolean,
    bloqueId: any
}

export interface ParqueoUpdate {
    idParqueo: string,
    codigo: string,
    ocupado: boolean,
    bloqueId: string
}