import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="Mosh DAO"
        canonical="https://mosh.lol"
        description="Mosh DAO - A cross-chain NFT experiment."
        openGraph={{
          locale: "en_US",
          site_name: "mosh.lol",
          type: "website",
          url: "https://www.mosh.lol",
          images: [{ url: "https://www.mosh.lol/ogp.jpg" }],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@MoshDAO",
          site: "@MoshDAO",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};
