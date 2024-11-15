// auth.server.ts
import axios from "axios";
import { redirect } from "@remix-run/node";

interface LoginCredentials {
  username: string;
  password: string;
}

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     createdAt: Date;
//     updatedAt: Date;
//   }

const API_URL = "https://tu-backend.com/api/auth";

// Crear una instancia de axios
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Para enviar cookies con las solicitudes
});

export const login = async (credentials: LoginCredentials): Promise<Response> => {
  try {
    await axios.post(`${API_URL}/login`, credentials);
    // Suponiendo que el backend establece una cookie httpOnly con el token
    // No es necesario manejar el token en el frontend
    // const { token } = response.data;
    // localStorage.setItem('authToken', token);
    // return token;
    return redirect("/services");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al iniciar sesión");
  }
};

export const logout = async (): Promise<void> => {
  try {
    await api.post("/logout");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al cerrar sesión");
  }
  //localStorage.removeItem('authToken');
};

export const register = async (
  userData: Omit<User, "id"> & { password: string }
): Promise<User> => {
  // const { name, email, password } = userData;
  try {
    const response = await api.post("/register", userData);
    return response.data.user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al registrarse");
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  //   const token = localStorage.getItem('authToken');
  //   if (!token) return null;

  //   try {
  //     const response = await axios.get(`${API_URL}/me`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     return response.data.user;
  //   } catch (error) {
  //     logout();
  //     return null;
  //   }
  try {
    const response = await api.get("/me");
    return response.data.user;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return null;
  }
};