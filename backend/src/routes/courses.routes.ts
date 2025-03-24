import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/course.controller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// rutas privadas
router.use(authMiddleware); // TODO lo que está haccia abajo va a pedri el token
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
