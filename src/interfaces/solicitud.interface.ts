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
    usuarioSolicitud: string,
    parqueoSolicitado: string,
    fechaSolicitud: Date,
    fechaAsignado: Date | null,
    agenteAsignado: string,
    completada: boolean,
}