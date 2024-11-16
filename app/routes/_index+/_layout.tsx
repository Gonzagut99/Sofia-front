import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { NavigationComponents } from "~/components/ui/custom/NavigationComponents";
import { ThemeSwitch, useTheme } from "../resources+/theme-switch";
import { getHints } from "~/utils/client-hints";
import { getTheme } from "~/utils/theme.server";
import HomeBgLight from '~/svgs/HomeBgLight.svg'
import { Footer } from "~/components/ui/custom/Footer";
import { getAuthCookies } from "~/services/auth-cookies.server";
import { getUserProfile } from "~/services/user.server";
import { UserData } from "~/types/user";
import { BackendError } from "~/services/error-handling";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to SOFIA!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  console.log(request)
  const authCookies = await getAuthCookies(request);

  const themeInfo = {
    hints: getHints(request),
    userPrefs: {
          theme: getTheme(request),
        },
  };
  
  if (!authCookies) {
    return json(
      { themeInfo, error: "Unauthorized:No cookies" },
      { status: 401 }
    );
  }
  console.log(authCookies)

  const user = await getUserProfile(authCookies.accessToken);
  if (!user) {
    return json(
      { themeInfo, error: "Unauthorized" },
      { status: 401 }
    );
  }
  if(user.status === 401){
    return json(
      { themeInfo, error: "Unauthorized" },
      { status: 401 }
    );
  }
  console.log(user)

  return json({
    tehemeInfo: {
      hints: getHints(request),
      userPrefs: {
        theme: getTheme(request),
      },
    },
    user:{
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      avatarUrl: user.avatarUrl
    }
  });
}
export default function Index() {
  const theme = useTheme();
  const data = useLoaderData<typeof loader>();
  const themeInfo = 'error' in data ? data.themeInfo : data.tehemeInfo;
  const user = 'error' in data ? undefined : data.user;
  const unathorizedError = 'error' in data && data.error === "Unauthorized";
  const isLoggedIn = !unathorizedError && !!user;

  let userDict: UserData | undefined = undefined;
  if (user && !(user instanceof BackendError)){
    userDict = {
      id: user?.id,
      email: user?.email,
      name: user?.name,
      lastname: user?.lastname,
      username: user?.username,
      avatarUrl: user?.avatarUrl
    }
  }

  const { pathname } = useLocation();
  return (
    <div className="min-h-dvh dark:bg-zinc-900 bg-zinc-100 grid grid-rows-[auto_1fr_auto] grid-cols-1">
      {/* <div className="dark:bg-zinc-900 min-h-dvh h-full absolute inset-0 w-full !-z-20"></div> */}
      {pathname == "/" && (
        <img
          className="absolute inset-0 md:-top-[360px] md:scale-x-[-1] lg:-top-[585px] lg:-left-0 xl:-top-[800px] 2xl:-top-[870px] w-full !z-0"
          src={HomeBgLight}
          alt="Background"
        />
      )}
      <NavigationComponents
        loggedIn={isLoggedIn}
        theme={themeInfo.userPrefs.theme || theme || "light"}
        userProfile={userDict}
      >
        <ThemeSwitch userPreference={themeInfo.userPrefs.theme}></ThemeSwitch>
      </NavigationComponents>
      <div className="z-10 px-3 sm:px-10 md:px-12 lg:px-32 pt-4 pb-8 ">
          <Outlet></Outlet>
      </div>
      <div className="z-10 px-3 sm:px-10 md:px-12 lg:px-32 pb-8">
        <Footer theme={theme}></Footer>
      </div>
    </div>
  );
}
