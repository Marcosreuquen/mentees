import { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware, runCorsMiddleware } from "../../../lib/middlewares";
import { getMentorData } from "controllers/mentor";

const methods = require("micro-method-router");

async function getHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  authData: any
) {
  console.log(authData, "data");

  try {
    const result = await getMentorData(authData);
    res.status(200).json({ result });
  } catch (error) {
    return res.status(401).json({ error });
  }
}

const handler = methods({
  get: getHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, authMiddleware(handler));
};
