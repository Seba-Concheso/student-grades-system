import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (email: string, password: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
