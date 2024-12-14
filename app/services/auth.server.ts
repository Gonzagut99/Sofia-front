import { getRefreshToken, setAuthCookies, getAuthCookies } from './auth-cookies.server';
// auth.server.ts
import { redirect } from "@remix-run/node";
import { getUserProfile } from "./user.server";

interface AuthenticatorConfig {
    failureRedirect: string;
}
class Authenticator {
  async isAuthenticated(request: Request, { failureRedirect }: AuthenticatorConfig) {
    const authCookies = await getAuthCookies(request);
    if (!authCookies || !authCookies.accessToken || authCookies.accessToken.length==0) {
      return redirect(failureRedirect);
    } 
    if (authCookies) {
      const user = await getUserProfile(authCookies.accessToken);
      if(user.status === 401){
        //TODO: Add refresh token logic
        return redirect(failureRedirect);
      }else if (user.id) {
        return true
      }
      else{
        return redirect(failureRedirect);
      }

    }
  }

  async refreshAccessToken(request: Request) {
    try {
      const refreshToken = await getRefreshToken(request);
      
      if (!refreshToken) {
        return redirect('/login');
      }
  
      const response = await fetch(`${process.env.API_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`,
        },
      });
  
      if (!response.ok) {
        // Si el refresh token expiró, redirigir al login
        if (response.status === 401) {
          return redirect('/login');
        }
        throw new Error('Error refreshing token');
      }
  
      const { accessToken, refreshToken: newRefreshToken, userId } = await response.json();
  
      // Establecer nuevas cookies
      const headers = await setAuthCookies(accessToken, newRefreshToken, userId);
  
      return headers;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return redirect('/login');
    }
  }

  async isTokenExpired (token: string): Promise<boolean> {
    try {
      // Decodificar el token (parte payload)
      const payload = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString()
      );
      
      // Obtener tiempo de expiración y agregar margen de seguridad (ej: 1 minuto)
      const expirationTime = payload.exp * 1000; // Convertir a milisegundos
      const currentTime = Date.now();
      const timeUntilExpiration = expirationTime - currentTime;
      
      // Retornar true si expira en menos de 1 minuto
      return timeUntilExpiration <= 60 * 1000;
    } catch {
      return true; // Si hay error al decodificar, asumir expirado
    }
  }
}

export const authenticator = new Authenticator();