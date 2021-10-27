import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import { Seo } from "@/art/components/Seo";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
