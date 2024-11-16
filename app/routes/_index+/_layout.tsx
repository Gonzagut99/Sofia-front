import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { NavigationComponents } from "~/components/ui/custom/NavigationComponents";
import { ThemeSwitch, useTheme } from "../resources+/theme-switch";
import { getHints } from "~/utils/client-hints";
import { getTheme } from "~/utils/theme.server";
import HomeBgLight from '~/svgs/HomeBgLight.svg'
import { Footer } from "~/components/ui/custom/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    requestInfo: {
      hints: getHints(request),
      userPrefs: {
        theme: getTheme(request),
      },
    },
  });
}
export default function Index() {
  const theme = useTheme();
  const { requestInfo } = useLoaderData<typeof loader>();
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
        loggedIn={true}
        theme={requestInfo.userPrefs.theme || theme || "light"}
      >
        <ThemeSwitch userPreference={requestInfo.userPrefs.theme}></ThemeSwitch>
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