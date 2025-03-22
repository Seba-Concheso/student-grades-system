import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  sidebarOpen: boolean;
  toggleSideBar: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    //guarda automaticamente en el local storage
    (set, get) => ({
      sidebarOpen: true,
      toggleSideBar: () => set({ sidebarOpen: !get().sidebarOpen }),
    }),
    {
      name: "app-storage",
    },
  ),
);
