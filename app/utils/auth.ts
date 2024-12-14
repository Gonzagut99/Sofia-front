// app/utils/auth.ts
import { LoaderFunction, redirect } from "@remix-run/node";

// export const requireAuth: LoaderFunction = async ({ request }) => {
//   if (!token) {
//     throw redirect("/login");
//   }
//   // Opcional: Verificar el token con el backend si es necesario
//   return null;
// };