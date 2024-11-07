import AuthCard from "./auth-card";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Input } from "../input";
import { Button } from "../button";

const LoginForm = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <AuthCard
      label={
        <span className="block break-words max-w-sm text-gray-700 mb-4">
          Inicia sesión con tu cuenta y accede a una variedad de herramientas
        </span>
      }
      title={
        <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Iniciar sesión
        </span>
      }
      backButtonHref="/register"
      backButtonLabel="¿No tienes una cuenta? Regístrate aquí."
    >
      <Form method="post" className="space-y-6">
        <div className="space-y-4">
          <div>
            <label>Correo</label>
            <Input name="email" type="email" placeholder="correo@gmail.com" />
            {actionData?.errors?.email && (
              <p className="text-red-500">{actionData.errors.email}</p>
            )}
          </div>
          <div>
            <label>Contraseña</label>
            <Input name="password" type="password" placeholder="******" />
            {actionData?.errors?.password && (
              <p className="text-red-500">{actionData.errors.password}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Cargando..." : "Iniciar Sesión"}
        </Button>
      </Form>
    </AuthCard>
  );
};

export default LoginForm;
