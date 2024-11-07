import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import LoginForm from "~/components/ui/custom/login-form";
import { LoginSchema } from "schema"; 


// funcion accion 
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const validation = LoginSchema.safeParse({ email, password });
  if (!validation.success) {
    return json({ errors: validation.error.flatten().fieldErrors });
  }

  console.log("Usuario autenticado:", { email, password });

  return redirect("/"); 
}

export default function Login() {
  return (
    <div className="flex items-center justify-center m-20 min-h-full sm:py-8 py-4">
      <LoginForm />
    </div>
  );
}
