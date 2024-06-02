
import { Router } from "express";
import { getAllSolicitudes, getByIdSolicitud, updateSolicitud, deleteSolicitudCtrl, createSolicitud, getByAgente, getByUsuario, getAllSolicitudesPendientes } from "../controllers/solicitud.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAllSolicitudes);
router.get("/pendientes", checkJwt, getAllSolicitudesPendientes);
router.get("/:id", checkJwt, getByIdSolicitud);
router.put("/", checkJwt, updateSolicitud)
router.post("/", checkJwt, createSolicitud)
router.delete("/:id", checkJwt, deleteSolicitudCtrl)
router.get("/usuario/:id", checkJwt, getByUsuario);
router.get("/agente/:id", checkJwt, getByAgente);


export { router };