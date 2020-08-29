import React, { FC } from "react";
import Head from "next/head";

import { Navigation } from "../components/Navigation";
import { Preview } from "../components/Preview";

const IndexPage: FC<{ preview?: any }> = ({ preview }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Index Page {Boolean(preview) ? " (preview)" : ""}</h1>
      <Navigation />
      <hr />
      <Preview />
    </div>
  );
};

export default IndexPage;

export { getStaticProps } from "../utils";
