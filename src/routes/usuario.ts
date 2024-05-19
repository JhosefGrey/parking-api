import { Router } from "express";
import { getAll, getById, post } from "../controllers/usuario.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getAll,)
router.get("/:id", getById)



export { router };