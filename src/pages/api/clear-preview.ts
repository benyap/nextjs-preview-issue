import { NextApiHandler } from "next";

/**
 * Clear preivew mode.
 */
const handler: NextApiHandler = async (req, res) => {
  console.log(`Cleared preview mode.`);
  res.clearPreviewData();
  return res.status(200).end();
};

export default handler;
