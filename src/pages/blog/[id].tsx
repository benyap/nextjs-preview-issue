import React, { FC } from "react";
import Head from "next/head";

import { Navigation } from "../../components/Navigation";
import { Preview } from "../../components/Preview";

const Page: FC<{ title: string; preview?: any }> = ({ title, preview }) => {
  return (
    <div>
      <Head>
        <title>Blog: {title}</title>
      </Head>
      <h1>
        Blog: {title} {Boolean(preview) ? " (preview)" : ""}
      </h1>
      <Navigation />
      <hr />
      <Preview />
    </div>
  );
};

export default Page;

export {
  getBlogStaticProps as getStaticProps,
  getBlogStaticPaths as getStaticPaths,
} from "../../utils";
