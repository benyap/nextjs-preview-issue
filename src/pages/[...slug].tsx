import React, { FC } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";

import { PAGES } from "../data";

const Page: FC<{ title: string; error?: string }> = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p color="red">{props.error}</p>
  </div>
);

export default Page;

const ROOT = "/";

export const getStaticPaths = async () => {
  // Retrieve all possible static paths from the CMS.
  const pages = PAGES.filter((page) => page.status === "published");
  const paths = pages.map((page) => page.slug).filter((path) => path !== ROOT);
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
        ? `Path: ${path} Requester: ${context.previewData?.user}`
        : `Server failed to process page at path ${path}`,
    },
  };
};
