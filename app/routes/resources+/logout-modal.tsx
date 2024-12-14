import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import {
  json,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  getAccessToken,
  removeAuthCookies,
} from "~/services/auth-cookies.server";
import { logout } from "~/services/loginService.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isAuthenticated = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  if (isAuthenticated) {
    // const accesToken = await getAccessToken(request);
    return json({
      isAuthenticated,
      //   accesToken,
    });
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const accessToken = await getAccessToken(request);
    const response = await logout(accessToken);
    // const headers = await removeAuthCookies();
    if (!response) {
      return redirect("/login");
    } else if (response.status === 401) {
      return redirect("/login");
    }

    const headers = await removeAuthCookies();
    return redirect("/", { headers });
  } catch (error) {
    return { error: "Error al cerrar sesión" };
  }
};

function LogOutModal() {
  const loaderData = useLoaderData<typeof loader>();
  const isAuthenticated = loaderData?.isAuthenticated;
  //   const accesToken = loaderData?.accesToken;

  const navigate = useNavigate();
  const submit = useSubmit();
  const navigation = useNavigation();

  const handleLogout = () => {
    if (isAuthenticated) {
      submit(null, {
        method: "post",
        action: "/resources/logout-modal",
      });
    }
  };
  return (
    <div className="w-full h-dvh backdrop-blur-sm bg-zinc-900/80 relative z-50 flex justify-center items-center px-8">
      <article>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              ¿Estás seguro que deseas cerrar sesión?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Si cierras sesión, no podrás acceder a tus recursos hasta que
              vuelvas a iniciar sesión.
            </p>
          </CardContent>
          <CardFooter>
            {
              navigation.state == "idle" ? (
                <>
                  <Button
                  type="submit"
                  variant="default"
                  className="mr-2"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </Button>
                <Button variant="link" onClick={() => navigate(-1)}>
                  Cancelar
                </Button>
                </>):(
                <div className="flex justify-center gap-4">
                  <img src="/assets/RobotDog.png" alt="Robot Dog" className="size-14 object-contain"/>
                  <span>Cerrando sesión...</span>
                </div>
                )
            }
          </CardFooter>
        </Card>
      </article>
    </div>
  );
}

export default LogOutModal;
