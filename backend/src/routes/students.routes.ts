import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../controllers/student.controller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// rutas privadas
router.use(authMiddleware); // TODO lo que está haccia abajo va a pedri el token
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
