// src/controllers/grade.controller.ts

import { Request, Response } from "express";
import { Grade } from "../models";
// import Grade from "../models/grade.model";

// Obtener todas las notas
export const getAllGrades = async (req: Request, res: Response) => {
  try {
    const grades = await Grade.findAll();
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las notas" });
  }
};

// Obtener una nota por ID
export const getGradeById = async (req: Request, res: Response) => {
  try {
    const grade = await Grade.findByPk(req.params.id);
    if (!grade) {
      res.status(404).json({ message: "Nota no encontrada" });
      return;
    }
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la nota" });
  }
};

// Crear una nueva nota
export const createGrade = async (req: Request, res: Response) => {
  try {
    const { subject, score, studentId } = req.body;
    const newGrade = await Grade.create({ subject, score, studentId });
    res.status(201).json(newGrade);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la nota" });
  }
};

// Actualizar una nota existente
export const updateGrade = async (req: Request, res: Response) => {
  try {
    const grade = await Grade.findByPk(req.params.id);
    if (!grade) {
      res.status(404).json({ message: "Nota no encontrada" });
      return;
    }
    const { subject, score, studentId } = req.body;
    await grade.update({ subject, score, studentId });
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la nota" });
  }
};

// Eliminar una nota
export const deleteGrade = async (req: Request, res: Response) => {
  try {
    const grade = await Grade.findByPk(req.params.id);
    if (!grade) {
      res.status(404).json({ message: "Nota no encontrada" });
      return;
    }
    await grade.destroy();
    res.status(200).json({ message: "Nota eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la nota" });
  }
};
