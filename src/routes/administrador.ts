import { Router } from "express";
import { deleteAdministradorCtrl, getAllAdministradores, getByIdAdministrador, updateAdministrador } from "../controllers/administrador.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAllAdministradores);
router.get("/:id", checkJwt, getByIdAdministrador);
router.put("/", checkJwt, updateAdministrador)
router.delete("/:id", checkJwt, deleteAdministradorCtrl)

export { router };