export interface SolicitudInterface {
    usuarioSolicitud: any,
    parqueoSolicitado: any,
    fechaSolicitud: Date,
    fechaAsignado: Date | null,
    agenteAsignado: any,
    completada: boolean,
}

export interface SolicitudUpdate {
    idSolicitud: string,
    agenteAsignado: string,
}

export interface SolicitudCreate {
    usuarioSolicitud: string,
    parqueoSolicitado: string  ,
}
