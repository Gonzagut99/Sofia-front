import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getValidatedFormData,
  RemixFormProvider,
  useRemixForm,
} from "remix-hook-form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { login } from "../../../services/loginService.server";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import GoogleAuthButton from "~/routes/resources+/google-auth";

const loginSchema = z.object({
  email: z.string().min(1).email({ message: "Por favor ingresa un correo válido" }),
  password: z
    .string()
    .min(1, { message: "Necesitas ingresar una contraseña" })
    .max(20, { message: "La contraseña es muy larga" }),
});

type FormData = z.infer<typeof loginSchema>;
const resolver = zodResolver(loginSchema);

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { data, errors, receivedValues } =
      await getValidatedFormData<FormData>(request, resolver);

    if (errors) {
      return json({ errors, receivedValues }, { status: 400 });
    }

    const responseData = await login(data);
    if (!data) {
      return json({ error: "Error processing login data" }, { status: 500 });
    }

    //const userId = responseData?.id;
    const cookieHeaders = responseData?.cookieHeaders;
    return redirect("/", { headers: cookieHeaders });
  } catch (error) {
    console.error("Error processing login data", error);
    return json({ error: "Error processing login data" }, { status: 500 });
  }
};

export default function Login() {
  // const actionData = useActionData<typeof action>();

  const form = useRemixForm<FormData>({
    resolver,
    mode: "onSubmit",
    defaultValues: {
      email: '',
      password: '',
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
                Iniciar sesión
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Inicia sesión con tu cuenta y accede a una variedad de
              herramientas
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex flex-col gap-4">
          <RemixFormProvider {...form}>
            <Form onSubmit={handleSubmit} method="post" className="space-y-6" action="/login">
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
                        type="text"
                        placeholder="correo@gmail.com"
                      />
                      <FormMessage className="dark:text-red-600"></FormMessage>
                    </FormItem>
                  )}
                ></FormField>

                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <Input 
                        {...field} 
                        className="border-zinc-700" 
                        type="password" 
                        placeholder="******"
                        name="password"
                        id="password"
                        />
                      <FormMessage className="dark:text-red-600"></FormMessage>
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <Button type="submit" className="w-full text-lg" disabled={navigation.state == 'submitting'}>
                {
                  navigation.state == 'idle' &&(
                    <span>
                      Iniciar sesión
                    </span>
                  )
                }
                {
                  navigation.state == 'submitting' && (
                    <span className="ml-2">Cargando...</span>
                  )
                }
              </Button>
            </Form>
          </RemixFormProvider>
          <div className="flex flex-col gap-2">
            <Separator className="dark:bg-zinc-500"></Separator>
            <p className="text-xs opacity-60 dark:opacity-80 text-center">O puedes</p>
            <GoogleAuthButton></GoogleAuthButton>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-center items-center">
            <span className="text-end ">¿No tienes una cuenta?</span>
            <Button
              variant="link"
              className="font-normal text-sm md:text-base w-fit"
              size="sm"
            >
               Regístrate aquí
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
