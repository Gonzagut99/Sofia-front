import AuthCard from "./auth-card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Button } from "../button";
import { z } from "zod";
import { useState } from "react";
import { LoginSchema } from "schema";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <AuthCard ClassName=" text-center"
    label={
      <span className="block break-words max-w-sm  text-gray-700 mb-4">
        Inicia sesión con tu cuenta y accede a una variedad de herramientas diseñadas para facilitar tu trabajo como docente
      </span>      
    }  title={
      <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Iniciar sesion     
      </span> 
    }
      backButtonHref="/register"
      backButtonLabel="¿No tienes una cuenta? Regístrese aquí."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="correo@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesion"}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};

export default LoginForm;