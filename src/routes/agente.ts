import { Router } from "express";
import { getByIdAgente, updateAgente, deleteAgenteCtrl, getAllAgentes, createAgenteCtrl } from "../controllers/agente.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAllAgentes);
router.get("/:id", checkJwt, getByIdAgente);
router.put("/", checkJwt, updateAgente)
router.post("/", checkJwt, createAgenteCtrl)
router.delete("/:id", checkJwt, deleteAgenteCtrl)

export { router };