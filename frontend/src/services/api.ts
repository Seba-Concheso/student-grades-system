import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor para agregar el token a cada request
api.interceptors.request.use((config) => {
  const raw = localStorage.getItem("auth-storage");
  const parsed = raw ? JSON.parse(raw) : null;
  const token = parsed?.state?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Interceptor para manejar errores de respuesta (como token vencido)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido o vencido
      alert("Tu sesión ha expirado. Por favor, iniciá sesión nuevamente."); //Luego mejor el alert y hacer algo con un modal propio de la aplicación
      localStorage.removeItem("auth-storage");
      window.location.href = "/login"; // Si usás react-router, podrías usar navigate() desde un hook
    }

    return Promise.reject(error);
  },
);
