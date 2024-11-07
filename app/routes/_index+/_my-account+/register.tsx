import { json, redirect } from "@remix-run/node";
import RegisterForm from "~/components/ui/custom/register-form";
import { RegisterSchema } from "schema";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  const validation = RegisterSchema.safeParse({
    email,
    name,
    password,
    confirmPassword,
  });
  if (!validation.success) {
    return json({ errors: validation.error.flatten().fieldErrors });
  }

  console.log("Usuario registrado:", { email, name });
  return redirect("/login");
}

export default function Register() {
  return (
    <div className="flex items-center justify-center mt-14 m-10 min-h-full sm:py-8 py-4">
      <RegisterForm />
    </div>
  );
}
