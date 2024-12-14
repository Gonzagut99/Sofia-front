import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRemixForm, RemixFormProvider, getValidatedFormData } from "remix-hook-form";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

import { login } from "../../../services/loginService.server";
const registerSchema = z.object({
  email: z.string().min(1).email({ message: "Por favor ingresa un correo válido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  name: z.string().min(1, { message: "El nombre es requerido" }),
  lastname: z.string().min(1, { message: "El apellido es requerido" }),
  username: z.string().min(3, { message: "El nombre de usuario debe tener al menos 3 caracteres" }),
});

type FormData = z.infer<typeof registerSchema>;
const resolver = zodResolver(registerSchema);

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { data, errors, receivedValues } =
      await getValidatedFormData<FormData>(request, resolver);

    if (errors) {
      return json({ errors, receivedValues }, { status: 400 });
    }

    const responseData = await login(data);
    const cookieHeaders = responseData?.cookieHeaders;

    return redirect("/", { headers: cookieHeaders });
  } catch (error) {
    console.error("Error durante el registro", error);
    return json({ error: "Ocurrió un error durante el registro" }, { status: 500 });
  }
};

export default function Register() {
  const form = useRemixForm<FormData>({
    resolver,
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      name: "",
      lastname: "",
      username: "",
    },
  });

  const { handleSubmit, control } = form;
  const navigation = useNavigation();

  return (
    <section className="flex items-center justify-center sm:py-8 py-4">
      <Card className="px-7 sm:px-10 md:px-12 lg:px-30 dark:bg-zinc-800 flex flex-col gap-8">
        <CardHeader className="p-0 mt-7">
          <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-2xl md:text-3xl font-semibold">
              <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Regístrate
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Crea una cuenta y comienza a usar nuestras herramientas hoy mismo.
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex flex-col gap-4">
          <RemixFormProvider {...form}>
            <Form onSubmit={handleSubmit} method="post" className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <Input
                        {...field}
                        name="email"
                        id="email"
                        className="border-zinc-700"
                        type="email"
                        placeholder="correo@example.com"
                      />
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <Input
                        {...field}
                        name="password"
                        id="password"
                        className="border-zinc-700"
                        type="password"
                        placeholder="******"
                      />
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <Input
                        {...field}
                        name="name"
                        id="name"
                        className="border-zinc-700"
                        type="text"
                        placeholder="Tu nombre"
                      />
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <Input
                        {...field}
                        name="lastname"
                        id="lastname"
                        className="border-zinc-700"
                        type="text"
                        placeholder="Tu apellido"
                      />
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de usuario</FormLabel>
                      <Input
                        {...field}
                        name="username"
                        id="username"
                        className="border-zinc-700"
                        type="text"
                        placeholder="Nombre de usuario"
                      />
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full text-lg"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "idle" && <span>Registrarse</span>}
                {navigation.state === "submitting" && <span className="ml-2">Cargando...</span>}
              </Button>
            </Form>
          </RemixFormProvider>
          <div className="flex flex-col gap-2">
            <Separator className="dark:bg-zinc-500" />
            <p className="text-xs opacity-60 dark:opacity-80 text-center">
              ¿Ya tienes una cuenta?
            </p>
            <Button
              variant="link"
              className="font-normal text-sm md:text-base w-fit"
              size="sm"
              asChild
            >
              <a href="/login">Inicia sesión aquí</a>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-center items-center">
            <span className="text-end ">¿Necesitas ayuda?</span>
            <Button
              variant="link"
              className="font-normal text-sm md:text-base w-fit"
              size="sm"
            >
              Contactar Soporte
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
