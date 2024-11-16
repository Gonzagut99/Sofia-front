import axios from "axios";
import { envs } from "~/config/envs";

interface RegisterData {
    name: string;
    email: string;
    password: string;
  }

  const API_BASE_URL = envs.backendUrl;

  export const register = async (data: RegisterData) => {
    const response = await axios.post(`${API_BASE_URL}/register`, data);
    return response.data;
  };