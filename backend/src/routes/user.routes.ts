import { Router } from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/loginUser.controller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// Endpoint de login

// rutas públicas
router.post("/login", loginUser);

// rutas privadas
router.use(authMiddleware); // TODO lo que está haccia abajo va a pedri el token
router.post("/register", registerUser);
router.get("/", getAllUsers);

export default router;
