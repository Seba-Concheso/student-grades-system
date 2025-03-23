import { Router } from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/loginUser.controller";

const router = Router();

// Endpoint de login
router.post("/login", loginUser);

// (más adelante podrías tener)
router.post("/register", registerUser);
router.get("/", getAllUsers);

export default router;
