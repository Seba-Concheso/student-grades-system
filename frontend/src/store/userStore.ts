import { create } from "zustand";
import { persist } from "zustand/middleware";

export type roleType = "admin" | "estudiante" | "profesor";
export interface User {
  id: number;
  username: string;
  email: string;
  role: roleType;
  // Agregá más campos según tu backend
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const userStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (token, user) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
);
