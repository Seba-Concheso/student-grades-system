import { Router } from "express";
import { createGrade, deleteGrade, getAllGrades, getGradeById, updateGrade } from "../controllers/grade.controller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// rutas privadas
router.use(authMiddleware); // TODO lo que está haccia abajo va a pedri el token
router.get("/", getAllGrades);
router.get("/:id", getGradeById);
router.post("/", createGrade);
router.put("/:id", updateGrade);
router.delete("/:id", deleteGrade);

export default router;
