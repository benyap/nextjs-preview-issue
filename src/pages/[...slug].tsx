import React, { FC } from "react";
import Head from "next/head";

import { Navigation } from "../components/Navigation";
import { Preview } from "../components/Preview";

const Page: FC<{ title: string; error?: string; preview?: any }> = (props) => {
  const { title, error, preview } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        {title}
        {Boolean(preview) ? " (preview)" : ""}
      </h1>
      <p color="red">{error}</p>
      <Navigation />
      <hr />
      <Preview />
    </div>
  );
};

export default Page;

export { getStaticPaths, getStaticProps } from "../utils";
