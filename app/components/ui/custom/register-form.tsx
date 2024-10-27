import AuthCard from "./auth-card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { RegisterSchema } from "schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Button } from "../button";
import { z } from "zod";
import { useState } from "react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    console.log(data);
  };

  return (
    

    <AuthCard
     
      title={
        <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
       Registrate y disfruta  
      </span> 
    }
        
      backButtonHref="/login"
      backButtonLabel="¿Ya tienes una cuenta? Inicie sesión aquí."
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
          name="name"
          render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
            <Input {...field} placeholder="Escriba su nombre aqui" />
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
          <FormItem>
            <FormLabel>Confirmar contraseña</FormLabel>
            <FormControl>
            <Input {...field} type="password" placeholder="******" />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Cargando..." : "Registrarse"}
        </Button>
      </form>
      </Form>
    </AuthCard>
           
  );
};

export default RegisterForm;