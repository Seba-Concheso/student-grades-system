import { UserProps } from "../Pages/SettingsPage/constants/settingColumns";
import { api } from "./api";

const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<UserProps[]> => {
  const { data } = await api.get(`${API_URL}`);

  return data;
};
