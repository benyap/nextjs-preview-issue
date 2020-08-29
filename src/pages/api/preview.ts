import { NextApiHandler } from "next";

import { authenticate, getPage } from "../../utils";

/**
 * This handler redirects a user to a page in preview mode.
 *
 * The following query parameters are required to ACCESS preview mode for a page:
 *  - `token`: The token used to authenticate
 *  - `pageId`: The id of the page to preview
 * */
const handler: NextApiHandler = async (req, res) => {
  const { token, pageId } = req.query;

  let user: string;

  // Verify token
  try {
    user = authenticate(token as string);
  } catch (error) {
    console.log(`Failed to decode token for preview request. ${error.message}`);
    return res.status(401).json({
      message: "Unauthorized: token error",
    });
  }

  // Get the page slug
  const page = getPage((pageId as string) || "index");

  if (!page) {
    console.log(`Invalid pageId given for preview request: ${pageId}`);
    return res.status(400).json({
      message: "Bad request",
    });
  }

  // Enable preview mode
  res.setPreviewData({
    user,
    pageId,
    slug: page.slug,
  });

  console.log(
    `Preview mode requested @page(${pageId}), redirecting to @slug(${page.slug}).`
  );

  // Redirect to the path for preview
  res.redirect(page.slug);
  res.end();
};

export default handler;
