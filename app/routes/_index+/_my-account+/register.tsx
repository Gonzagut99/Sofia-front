// import { json, redirect } from "@remix-run/node";
// import { useActionData, useNavigation } from "@remix-run/react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { getValidatedFormData, useRemixForm } from "remix-hook-form";
// import { Input } from "~/components/ui/input";
// import { Button } from "~/components/ui/button";
// import AuthCard from "~/components/ui/custom/auth-card";


// const RegisterSchema = z.object({
//   email: z.string().email({ message: "Por favor ingresa un correo válido" }),
//   name: z.string().min(1, { message: "Por favor ingresa un nombre" }),
//   password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
//   confirmPassword: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
// }).refine(data => data.password === data.confirmPassword, {
//   message: "Las contraseñas no coinciden",
//   path: ["confirmPassword"],
// });

// type FormData = z.infer<typeof RegisterSchema>;

// export async function action({ request }) {
//   const { data, errors } = await getValidatedFormData<FormData>(request, zodResolver(RegisterSchema));

//   if (errors) {
//     return json({ errors }, { status: 400 });
//   }

//   const { email, name, password } = data;

//   console.log("Usuario registrado:", { email, name, password });

//   return redirect("/login");
// }

// export default function Register() {
//   const actionData = useActionData();
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";
  
//   const {
//     handleSubmit,
//     formState: { errors },
//     register,
//   } = useRemixForm<FormData>({
//     mode: "onSubmit",
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: actionData?.defaultValues,
//   });

//   return (
//     <div className="flex items-center justify-center  min-h-full sm:py-8 py-4">
//       <AuthCard
//          title={
//           <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//             Regístrate y disfruta
//           </span>
//         }
//         label="Crea una cuenta para acceder a una variedad de herramientas"
//         backButtonHref="/login"
//         backButtonLabel="¿Ya tienes una cuenta? Inicia sesión aquí."
//       >
//         <form onSubmit={handleSubmit} method="post" className="space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label>Correo</label>
//               <Input
//                 {...register("email")}
//                 type="email"
//                 placeholder="correo@gmail.com"
//               />
//               {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//             </div>
//             <div>
//               <label>Nombre</label>
//               <Input
//                 {...register("name")}
//                 type="text"
//                 placeholder="Escribe tu nombre"
//               />
//               {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//             </div>
//             <div>
//               <label>Contraseña</label>
//               <Input
//                 {...register("password")}
//                 type="password"
//                 placeholder="******"
//               />
//               {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//             </div>
//             <div>
//               <label>Confirmar Contraseña</label>
//               <Input
//                 {...register("confirmPassword")}
//                 type="password"
//                 placeholder="******"
//               />
//               {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
//             </div>
//           </div>
//           <Button type="submit" className="w-full" disabled={isSubmitting}>
//             {isSubmitting ? "Cargando..." : "Registrarse"}
//           </Button>
//         </form>
//       </AuthCard>
//     </div>
//   );
// }
