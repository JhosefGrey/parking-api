import { Router } from "express";
import { createAdministrador, deleteAdministradorCtrl, getAllAdministradores, getByIdAdministrador, updateAdministrador } from "../controllers/administrador.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAllAdministradores);
router.get("/:id", checkJwt, getByIdAdministrador);
router.put("/", checkJwt, updateAdministrador)
router.post("/", checkJwt, createAdministrador)
router.delete("/:id", checkJwt, deleteAdministradorCtrl)

export { router };