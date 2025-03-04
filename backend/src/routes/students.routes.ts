

import {Router} from "express";
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../controllers/student.controller";


const router = Router()

router.get("/", getAllStudents)
router.get("/:id", getStudentById)
router.post("/", createStudent)
router.put("/:id", updateStudent)
router.delete("/:id", deleteStudent)


export default router