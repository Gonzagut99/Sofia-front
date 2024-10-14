import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  } from "@remix-run/react";
import styles from "./tailwind.css?url";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { ClientHintCheck, getHints } from './utils/client-hints';
import { getTheme, Theme } from "./utils/theme.server";
import { GeneralErrorBoundary } from "./components/ui/custom/GeneralErrorBoundary";
import { useTheme } from "./routes/resources+/theme-switch";

//Color scheme client hints
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

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { 
    rel:"preconnect",
    href:"https://fonts.googleapis.com"
  },
  {
    rel:"stylesheet",
    href:"https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
  },
];

// instead of using a Layout export, we’ll have to manually share the app shell between the root exports. 
function Document({
  children,
  theme = 'light',
}: {
  children: React.ReactNode;
  theme?: Theme;
}) {
  return (
    <html lang="en" className={theme}>
      <head>
        <ClientHintCheck />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-figtree">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const theme = useTheme();
  return (
    <Document theme={theme}>
      {/* <ThemeSwitch userPreference={requestInfo.userPrefs.theme}></ThemeSwitch> */}
      <Outlet />
      
    </Document>
  )
}

export function ErrorBoundary() {
  return (
    <Document>
      <GeneralErrorBoundary />
    </Document>
  );
}

