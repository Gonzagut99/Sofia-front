import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getValidatedFormData, useRemixForm } from "remix-hook-form";
import AuthCard from "~/components/ui/custom/auth-card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

const LoginSchema = z.object({
  email: z.string().email({ message: "Por favor ingresa un correo válido" }),
  password: z.string().min(1, { message: "Necesitas ingresar una contraseña" }),
});

type FormData = z.infer<typeof LoginSchema>;

export async function action({ request }) {
  const { data, errors } = await getValidatedFormData<FormData>(
    request,
    zodResolver(LoginSchema)
  );

  if (errors) {
    return json({ errors }, { status: 400 });
  }

  const { email, password } = data;

  
  console.log("Usuario autenticado:", { email, password });

  return redirect("/");
}

export default function Login() {
  const actionData = useActionData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
    defaultValues: actionData?.defaultValues,
  });

  return (
    <div className="flex items-center justify-center min-h-full sm:py-8 py-4">
      <AuthCard
        label="Inicia sesión con tu cuenta y accede a una variedad de herramientas"
        title={
          <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Iniciar sesión
          </span>
        }
        backButtonHref="/register"
        backButtonLabel="¿No tienes una cuenta? Regístrate aquí."
      >
        <form onSubmit={handleSubmit} method="post" className="space-y-6">
          <div className="space-y-4">
            <div>
              <label>Correo</label>
              <Input
                {...register("email")}
                type="email"
                placeholder="correo@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label>Contraseña</label>
              <Input
                {...register("password")}
                type="password"
                placeholder="******"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
        </form>
      </AuthCard>
    </div>
  );
}
