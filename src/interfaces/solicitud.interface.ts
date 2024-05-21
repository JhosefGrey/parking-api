export interface SolicitudInterface {
    usuarioSolicitud: any,
    parqueoSolicitado: any,
    fechaSolicitud: Date,
    fechaAsignado: Date | null,
    agenteAsignado: any
    estado: 'solicitado' | 'asignado'
}