import WalletConnectProvider from "@walletconnect/web3-provider";
import { RequireNetwork, WalletProvider } from "ethereal-react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { ConnectButton } from "@/app/components/ConnectButton";
import { Seo } from "@/app/components/Seo";
import { SwitchNetwork } from "@/app/components/SwitchNetwork";
import "tailwindcss/tailwind.css";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ErrorBoundary fallback={<></>}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_API_KEY}"}`}
        />
        <Seo />
        <WalletProvider
          cacheProvider
          providerOptions={{
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
              },
            },
          }}
          loading={
            <div className="dark:text-white">
              <h3>Wallet Provider Loading...</h3>
            </div>
          }
          fallback={<ConnectButton />}
        >
          <Suspense
            fallback={
              <div className="dark:text-white">
                <h3>Suspense Loading...</h3>
              </div>
            }
          >
            <RequireNetwork chainId={31337} fallback={<SwitchNetwork />}>
              <Component {...pageProps} />
            </RequireNetwork>
          </Suspense>
        </WalletProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default CustomApp;
