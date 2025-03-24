import Jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export const generateToken = (userId: string, role: string): string => {
  return Jwt.sign({ userId, role }, secret, { expiresIn: "1d" }); //Dejarlo en un día para la parte de desarrollo pero lo ideal sería de minutos
  // return Jwt.sign({ userId, role }, secret, { expiresIn: "30m" });  // 30 minutos
};

export const verifyToken = (token: string) => {
  try {
    return Jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
