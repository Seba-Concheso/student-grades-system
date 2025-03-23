export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  role: roleType;
  createdAt: Date;
  updatedAt: Date;
}

export type roleType = "admin" | "estudiante" | "profesor";
