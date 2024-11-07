import AuthCard from "./auth-card";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Input } from "../input";
import { Button } from "../button";

const RegisterForm = () => {
  const actionData = useActionData();
  const navigation = useNavigation(); // Cambiado de useTransition a useNavigation
  const isSubmitting = navigation.state === "submitting";

  return (
    <AuthCard
      title={
        <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Regístrate y disfruta
        </span>
      }
      backButtonHref="/login"
      backButtonLabel="¿Ya tienes una cuenta? Inicia sesión aquí."
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
            <label>Nombre</label>
            <Input name="name" placeholder="Escriba su nombre" />
            {actionData?.errors?.name && (
              <p className="text-red-500">{actionData.errors.name}</p>
            )}
          </div>
          <div>
            <label>Contraseña</label>
            <Input name="password" type="password" placeholder="******" />
            {actionData?.errors?.password && (
              <p className="text-red-500">{actionData.errors.password}</p>
            )}
          </div>
          <div>
            <label>Confirmar Contraseña</label>
            <Input name="confirmPassword" type="password" placeholder="******" />
            {actionData?.errors?.confirmPassword && (
              <p className="text-red-500">{actionData.errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Cargando..." : "Registrarse"}
        </Button>
      </Form>
    </AuthCard>
  );
};

export default RegisterForm;
