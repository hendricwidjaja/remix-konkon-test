import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { getGlobalData } from "./data.server";
import Header from "~/components/Header"; // Import the Header component
import Footer from "~/components/Footer"; // Import the Footer component

import "./tailwind.css";

export const links: LinksFunction = () => [
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
];

export const loader: LoaderFunction = async () => {
  const globalData = await getGlobalData();
  const strapiUrl = process.env.STRAPI_URL || "http://127.0.0.1:1337";
  return Response.json({ globalData, strapiUrl });
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { globalData, strapiUrl } = useLoaderData<{
    globalData: any;
    strapiUrl: string;
  }>();

  return (
    <Layout>
      <Header data={globalData.header} strapiUrl={strapiUrl} />
      <Outlet />
      <Footer data={globalData.footer} strapiUrl={strapiUrl} />
    </Layout>
  );
}
