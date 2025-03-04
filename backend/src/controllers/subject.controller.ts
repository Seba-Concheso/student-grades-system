// import { Subject } from "../models"

import { Request, Response } from "express"
import { validate as isUUID } from "uuid"; // Importamos función para validar UUID
import { Subject } from "../models";
// import Subject from "../models/subject.model";


// Crear una materia


export const createSubject = async(req:Request, res: Response) =>{
    try {
        const {name, code, courseId} = req.body

        const newSubject =await Subject.create({name, code, courseId})
        res.status(201).json(newSubject)
        return
    } catch (error) {
        res.status(500).json({error: "Error al crear la materia"})
        return
    }
}

//Obtener todas las materias
export const getAllSubject = async(req:Request, res: Response) =>{
    try {
        const subject =await Subject.findAll()
        res.status(200).json(subject)
        return
    } catch (error) {
        res.status(500).json({error: "Error al obtener materias"})
        return
    }
}

// buscar materias por id


export const getSubjectById = async(req:Request, res: Response) =>{
    try {
        
        const subject = await Subject.findByPk(req.params.id)

        if(!subject) {
            res.status(404).json({message: "Materia no encontrada"})
            return
        } 
        res.status(201).json(subject)
    return
    } catch (error) {
        res.status(500).json({error: "Error al buscar la materia"})
        return
    }
}

// actualizar una materia

export const updateSubject = async(req:Request<{ id: string }>, res: Response) =>{
    try {
        const { id } = req.params;

      // Verificar si el ID es un UUID válido
    if (!id || !isUUID(id)) {
        res.status(400).json({ error: "Invalid UUID format" });
        return
    }
        
        const subject = await Subject.findByPk(id)

        if(!subject) {
            res.status(404).json({message: "Materia no encontrada"})
            return
        }
        subject.update(req.body)
        res.status(200).json(subject)
        return
    } catch (error) {
        res.status(500).json({error: "Error al actualizar la materia"})
        return
    }
}

// eliminar una materia

export const deleteSubject = async(req:Request, res: Response) =>{
    try {
        
        const subject = await Subject.findByPk(req.params.id)

        if(!subject) {
            res.status(404).json({message: "Materia no encontrada"})
            return
        }
        subject.destroy()
        res.status(200).json({message: "materia eliminada"})
        return
    } catch (error) {
        res.status(500).json({error: "Error al eliminar una la materia"})
        return
    }
}