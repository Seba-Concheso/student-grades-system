import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  username: string;
  language: string;
  notificationsEnabled: boolean;
  setUsername: (name: string) => void;
  setLanguage: (lang: string) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  themeMode: "light" | "dark";
  toggleThemeMode: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      username: "juan.perez",
      language: "es",
      notificationsEnabled: true,
      themeMode: "light",
      setUsername: (username) => set({ username }),
      setLanguage: (language) => set({ language }),
      setNotificationsEnabled: (notificationsEnabled) => set({ notificationsEnabled }),
      toggleThemeMode: () => {
        const current = get().themeMode;
        set({ themeMode: current === "light" ? "dark" : "light" });
      },
    }),
    {
      name: "settings-storage",
    },
  ),
);
