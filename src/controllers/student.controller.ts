import { Request, Response } from "express";
// import Student from "../models/student.model";
import { validate as isUUID } from "uuid"; // Importamos función para validar UUID
import { Student } from "../models";



export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
    return
  } catch (error) {
    res.status(500).json({ error: "Error fetching students" });
    return
  }
};


// crear un estudiante.

export const createStudent = async (req: Request, res:Response)=>{
  try {
    const {firstName, lastName, email} = req.body
    const newStudent = await Student.create({firstName, lastName, email})
    res.status(201).json(newStudent)
    return
  } catch (error) {
    res.status(500).json({error: "Error al crear el estudiante"})
    res.json(error) //Como saber si es otro error.
    return
  }
}


// modificar un estudiante.

export const updateStudent = async (req: Request<{ id: string }>, res:Response)=>{
  try {
    const { id } = req.params;
    // Verificar si el ID es un UUID válido
    if (!id || !isUUID(id)) {
        res.status(400).json({ error: "Invalid UUID format" });
        return
    }
    const student = await Student.findByPk(id)
    if(!student) {
      res.status(404).json({message:"Estudiante no encontrado"})
      return}
    const {firstName, lastName, email} = req.body
    await student.update({firstName, lastName, email})
    res.status(200).json(student)
    return
  } catch (error) {
    res.status(500).json({error: "Error al Actualizar el estudiante"})
    return
  }
}

// buscar por id un estudiante.

export const getStudentById = async (req: Request<{ id: string }>, res: Response) => {
  try {
      const { id } = req.params;

      // Verificar si el ID es un UUID válido
      if (!id || !isUUID(id)) {
          res.status(400).json({ error: "Invalid UUID format" });
          return
      }

      const student = await Student.findByPk(id);

      if (!student) {
          res.status(404).json({ message: "Student not found" });
          return
      }
       res.json(student);
       return
  } catch (error) {
      res.status(500).json({ error: "Error retrieving student" });
      return
  }
};


// Eliminar un estudiante.

export const deleteStudent = async (req: Request<{ id: string }>, res:Response)=>{
  
  try {
    const { id } = req.params;

      // Verificar si el ID es un UUID válido
    if (!id || !isUUID(id)) {
        res.status(400).json({ error: "Invalid UUID format" });
        return
    }
  

    if (!id) {
      res.status(400).json({ message: "ID de estudiante no proporcionado" });
      return
    }
    const student = await Student.findByPk(id)
    if(!student) {
      res.status(404).json({message:"Estudiante no encontrado"})
      return
    }
    const {firstName, lastName, email} = req.body
    await student.destroy()
    res.status(200).json({message:"Estudiante eliminado"})
    return
  } catch (error) {
    res.status(500).json({error: "Error al eliminar el estudiante"})
    return
  }
}