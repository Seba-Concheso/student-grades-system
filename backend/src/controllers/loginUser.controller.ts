import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { userToDTO } from "../dto/user.dto";
import { generateToken } from "../utils/jwt";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña requeridos" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.getDataValue("password"));

    if (!passwordMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Si todo está bien, vamos a generar el token
    const { id, username, role } = user;

    const token = generateToken(id, role);
    //Ahora retornamos el token con los datos del usuario
    return res.status(200).json({
      token,
      user: { id, username, email, role },
    });
  } catch (error) {
    console.error("Error al hacer login:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

/// create user

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "El email ya esta registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "estudiante",
    });

    const { id } = newUser;
    return res.status(201).json({ id, username, email, role: newUser.role });
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

//get all user

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    const usersDTO = users.map(userToDTO);
    res.status(200).json(usersDTO);
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al buscar los usuarios" });
    return;
  }
};
