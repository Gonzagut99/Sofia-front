import * as z from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un correo valido"
  }),
  name: z.string().min(1, {
    message: "Por favor ingresa un nombre"
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres"
  }),
  confirmPassword: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres"
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un correo valido"
  }),
  password: z.string().min(1, {
    message: "Necesitas ingresar una contraseña "
  })
});