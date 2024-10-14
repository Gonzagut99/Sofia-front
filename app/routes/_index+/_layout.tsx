import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, Outlet, useLoaderData } from "@remix-run/react";
import { NavigationComponents } from "~/components/ui/custom/NavigationComponents";
import { ThemeSwitch, useTheme } from "../resources+/theme-switch";
import { getHints } from "~/utils/client-hints";
import { getTheme } from "~/utils/theme.server";

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
  return (
    <div>
      <NavigationComponents
        theme={requestInfo.userPrefs.theme || theme || "light"}
      >
        <ThemeSwitch userPreference={requestInfo.userPrefs.theme}></ThemeSwitch>
      </NavigationComponents>
      <main className="px-3 sm:px-10 md:px-12 lg:px-32 pt-4 pb-8 flex flex-col">
        <Outlet></Outlet>
      </main>
    </div>
  );
}