import { NextApiHandler } from "next";

import { PAGES, TOKEN_MAPPING } from "../../data";

/**
 * This handler redirects a user to a page in preview mode.
 *
 * The following query parameters are required to ACCESS preview mode for a page:
 *  - `token`: The token used to authenticate
 *  - `pageId`: The id of the page to preview
 *
 * The following query parameters are required to CLEAR preview mode:
 *  - `clear`: must be set to `"true"`
 */
const handler: NextApiHandler = async (req, res) => {
  const { token, pageId, clear } = req.query;

  // If this parameter is true, cancel preview mode
  if (clear === "true") {
    res.clearPreviewData();
    console.log(`Cleared preview mode.`);
    return res.status(200).end();
  }

  // Validate parameters

  if (!token) {
    console.log(`No token given for preview request.`);
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  if (!pageId) {
    console.log(`No pageId given for preview request.`);
    return res.status(400).json({
      message: "Bad request",
    });
  }

  let user: string;

  // Verify token
  try {
    let user = TOKEN_MAPPING[token as string];
    if (!user) throw new Error("Invalid token");
  } catch (error) {
    console.log(`Failed to decode token for preview request. ${error.message}`);
    return res.status(401).json({
      message: "Unauthorized: token error",
    });
  }

  // Get the page slug
  const page = PAGES.find((page) => page.id === (pageId as string));

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
