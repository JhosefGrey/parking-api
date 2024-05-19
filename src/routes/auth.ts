import { Router } from "express";
import { loginCtrl, registerAdminCtrl, registerCtrl } from "../controllers/auth.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.post("/login", loginCtrl)
router.post("/register", registerCtrl)
router.post("/register-admin", checkJwt, registerAdminCtrl)


export { router };