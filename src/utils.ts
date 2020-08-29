import { GetStaticProps, GetStaticPaths } from "next";

import { TOKEN_MAPPING, PAGES } from "./data";

/**
 * Get all paths for pages that should be built at BUILD TIME.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPublishedPagePaths();
  return {
    paths,
    fallback: false,
  };
};

/**
 * Get a static page's data.
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = [] } = context.params || {};

  // Get the page data from database
  const page = getPageBySlug(slug as string[]);

  // Render the page content if the page was found
  if (page)
    return {
      props: {
        preview: context.preview || null,
        title: page.title,
      },
    };

  // If no page was found, return an error document
  return {
    props: {
      preview: context.preview,
      error: `Failed to retrieve page at path ${(slug as string[]).join("/")}`,
    },
  };
};

/**
 * Returns the user id if token is valid.
 */
export const authenticate = (token: string) => {
  const user = TOKEN_MAPPING[token];
  if (!user) throw new Error("Invalid token");
  return user;
};

//
// MOCK FUNCTIONS
// These functions mock what would normally be calls to the CMS database. In this example, they use mock data.
//

/**
 * Get a list of pages that have the "published" state.
 */
export const getPublishedPagePaths = () =>
  PAGES.filter(
    (page) => page.status === "published" && page.id !== "index"
  ).map((page) => page.slug);

/**
 * Get page data using the page's id.
 * @param pageId the id of the page
 */
export const getPage = (pageId: string) => {
  return PAGES.find((page) => page.id === pageId);
};

/**
 * Get page data using the page's slug.
 * @param slug the slug of the page
 */
export const getPageBySlug = (slug: string[]) => {
  const path = `/${slug.join("/")}`;
  return PAGES.find((page) => page.slug === path);
};
