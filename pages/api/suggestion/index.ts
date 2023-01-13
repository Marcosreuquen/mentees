import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware } from "lib/middlewares";
import { sendSuggestion } from "controllers/suggestion";
const methods = require("micro-method-router");

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendSuggestion(req.body);

    res.json({ result: true });
  } catch (error) {
    res.status(400).json({ error });
  }
}

const handler = methods({
  post: postHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};
