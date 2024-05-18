import { Router } from "express";
import { getAll, getById, post } from "../controllers/usuario.controller";

const router = Router();

router.post("/", post)
router.get("/", getAll)
router.get("/:id", getById)



export { router };