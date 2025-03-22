import { Request, Response } from "express";
// import Grade from "../models/grade.model";
// import Course from "../models/course.model";
import { Course, Grade } from "../models";

// Crear un curso
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newCourse = await Grade.create({ name, description });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el curso" });
  }
};

// Obtener todos los cursos
export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cursos" });
  }
};

// Obtener un curso por su ID
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      res.status(404).json({ message: "Curso no encontrado" });
      return 
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el curso" });
  }
};

// Actualizar un curso
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      res.status(404).json({ message: "Curso no encontrado" });
      return 
    }

    const { name, description } = req.body;
    await course.update({ name, description});
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el curso" });
  }
};

// Eliminar un curso
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      res.status(404).json({ message: "Curso no encontrado" });
      return 
    }
    await course.destroy();
    res.status(204).json({ message: "Curso eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el curso" });
  }
};
