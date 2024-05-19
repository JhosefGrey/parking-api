import { Router } from "express";
import { changeStateUser, getAll, getById, updateUser, updatedPwd, updatedPwdAdmmin } from "../controllers/usuario.controller";
import { checkAdmin, checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAll);
router.get("/:id", checkJwt, getById);
router.put("/", checkJwt, updateUser)
router.put("/pwd", checkJwt, updatedPwd)
router.put("/pwd-admin", checkAdmin, updatedPwdAdmmin)
router.put("/cambiarEstado/:id", checkJwt, changeStateUser)

export { router };