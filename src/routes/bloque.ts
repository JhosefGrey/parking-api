import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { getAllBloquees, getByIdBloque, updateBloque, deleteBloqueCtrl, createBloque } from '../controllers/bloque.controller'

const router = Router();

router.get("/", checkJwt, getAllBloquees);
router.get("/:id", checkJwt, getByIdBloque);
router.put("/", checkJwt, updateBloque)
router.post("/", checkJwt, createBloque)
router.delete("/:id", checkJwt, deleteBloqueCtrl)

export { router };