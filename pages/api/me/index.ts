import { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware, runCorsMiddleware } from "lib/middlewares";

const methods = require("micro-method-router");

function getHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  mentorData: any
) {
  res.status(200).send(mentorData.data);
}

const handler = methods({
  get: getHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, authMiddleware(handler));
};
