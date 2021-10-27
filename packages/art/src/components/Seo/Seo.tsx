import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="Mosh DAO Art"
        canonical="https://art.mosh.lol"
        description="Art for Mosh DAO"
        openGraph={{
          locale: "en_US",
          site_name: "art.mosh.lol",
          type: "website",
          url: "https://art.mosh.lol",
          images: [{ url: "https://art.mosh.lol/ogp.jpg" }],
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
