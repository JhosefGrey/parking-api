import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { createCasa, deleteCasaCtrl, getAllCasaes, getByIdCasa, updateCasa } from "../controllers/casa.controller";

const router = Router();

router.get("/", checkJwt, getAllCasaes);
router.get("/:id", checkJwt, getByIdCasa);
router.put("/", checkJwt, updateCasa)
router.post("/", checkJwt, createCasa)
router.delete("/:id", checkJwt, deleteCasaCtrl)

export { router };