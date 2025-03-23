import { roleType } from "../interfaces/user.interface";

export interface UserDTO {
  id: string;
  username: string;
  email: string;
  role: roleType;
}

export interface RegisterUserDTO {
  id: string;
  username: string;
  email: string;
  password: string;
  role: roleType;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

import { IUser } from "../interfaces/user.interface";

export const userToDTO = (user: IUser): UserDTO => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
};
