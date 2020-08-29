import React, { FC } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { PAGES } from "../data";

import { Navigation } from "../components/Navigation";
import { Preview } from "../components/Preview";

const Page: FC<{ title: string; error?: string; preview?: any }> = ({
  title,
  error,
  preview,
}) => (
  <div>
    <Head>
      <title>
        {title}
        {Boolean(preview) ? " (preview)" : ""}
      </title>
    </Head>
    <h1>{title}</h1>
    <p color="red">{error}</p>
    <Navigation />
    <hr />
    <Preview />
  </div>
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  // Retrieve all possible static paths from the CMS.
  const paths = PAGES.filter((page) => page.status === "published").map(
    (page) => page.slug
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = [] } = context.params || {};

  // Get the page from the CMS with the matching path
  const path = `/${(slug as string[]).join("/")}`;
  const page = PAGES.find((page) => page.slug === path);

  // Render the page content if the page was found
  if (page)
    return {
      props: { title: page.title },
    };

  // If no page was found, return an error document
  return {
    props: {
      preview: context.preview,
      error: context.preview
        ? `Path: ${path} | Requester: ${context.previewData?.user}`
        : `Server failed to process page at path ${path}`,
    },
  };
};
