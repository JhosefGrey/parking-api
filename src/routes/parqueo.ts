import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { createParqueo, deleteParqueoCtrl, getAllParqueoes, getAllParqueosByIdBloqueCtrl, getByIdParqueo, updateEstadoCtrl, updateParqueo } from "../controllers/parqueo.controller";

const router = Router();

router.get("/", checkJwt, getAllParqueoes);
router.get("/:id", checkJwt, getByIdParqueo);
router.get("/bloque/:id", checkJwt, getAllParqueosByIdBloqueCtrl);
router.put("/", checkJwt, updateParqueo);
router.put("/cambiar-estado/:id", checkJwt, updateEstadoCtrl);
router.post("/", checkJwt, createParqueo)
router.delete("/:id", checkJwt, deleteParqueoCtrl)

export { router };