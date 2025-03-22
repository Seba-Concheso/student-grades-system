import {Router} from "express";
import { createGrade, deleteGrade, getAllGrades, getGradeById, updateGrade } from "../controllers/grade.controller";



const router = Router()

router.get("/", getAllGrades)
router.get("/:id", getGradeById)
router.post("/", createGrade)
router.put("/:id", updateGrade)
router.delete("/:id", deleteGrade)


export default router