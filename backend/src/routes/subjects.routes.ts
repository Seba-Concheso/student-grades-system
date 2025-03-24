import { Router } from "express";
import {
  createSubject,
  deleteSubject,
  getAllSubject,
  getSubjectById,
  updateSubject,
} from "../controllers/subject.controller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// rutas privadas
router.use(authMiddleware); // TODO lo que está haccia abajo va a pedri el token
router.get("/", getAllSubject);
router.get("/:id", getSubjectById);
router.post("/", createSubject);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject);

export default router;
