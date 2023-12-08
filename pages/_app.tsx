import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../styles/variables.css";
import "../styles/globals.css";

const queryClient = new QueryClient();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: (props: P & { children: JSX.Element }) => JSX.Element;
};

type AppWithLayoutProps = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppWithLayoutProps) {
  const Layout = Component.layout ?? DefaultLayout;
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
