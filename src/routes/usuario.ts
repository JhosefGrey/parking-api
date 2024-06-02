import { Router } from "express";
import { deleteUsuarioCtrl, getAll, getById, updatedPwd, updatedPwdAdmmin } from "../controllers/usuario.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAll);
router.get("/:id", checkJwt, getById);
router.delete("/:id", checkJwt, deleteUsuarioCtrl);
router.put("/pwd", checkJwt, updatedPwd)
router.put("/pwd-admin", checkJwt, updatedPwdAdmmin)

export { router };