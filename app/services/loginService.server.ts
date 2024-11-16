import axios from "axios";
import { envs } from "~/config/envs";
import { setAuthCookies } from "./auth-cookies.server";
import { BackendError } from "./error-handling";

const API_BASE_URL = envs.backendUrl;

interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse{
    id: string;
    accessToken: string;
    refreshToken: string;
}

export const login = async (credentials: LoginCredentials) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  if (response.status === 401) {
    throw new Error("Invalid credentials");
  }
  if (response.status === 500) {
    throw new Error("Internal server error");
  }
  if (response.status !== 200) {
    throw new Error("An error occurred");
  }
  if (!response.data.accessToken || !response.data.refreshToken) {
    throw new Error("No token provided");
  }
  if (response.status === 200) {
    // return response.data;
    const { id, accessToken, refreshToken } = response.data;

    const cookieHeaders = await setAuthCookies(accessToken, refreshToken, id);

    return {
        id,
        cookieHeaders
    }
  }
};

export const loginGoogle = async () => {
  return `${API_BASE_URL}/auth/google/login`
};

// export const setGoogleAuthCookies = async (accessToken: string, refreshToken: string, id: string) => {
//   const cookieHeaders = await setAuthCookies(accessToken, refreshToken, id);
//   return{
//     id,
//     cookieHeaders
//   };
// }



export const logout = async (jwt: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new BackendError({
        status: response.status,
        statusText: response.statusText
        });
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

