import { Router } from "express";
import { getByIdInquilino, updateInquilino, deleteInquilinoCtrl, getAllInquilinos, createInquilinoCtrl } from "../controllers/inquilino.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAllInquilinos);
router.get("/:id", checkJwt, getByIdInquilino);
router.put("/", checkJwt, updateInquilino)
router.post("/", checkJwt, createInquilinoCtrl)
router.delete("/:id", checkJwt, deleteInquilinoCtrl)

export { router };