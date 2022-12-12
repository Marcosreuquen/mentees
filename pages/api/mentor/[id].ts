import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware, validateBodySchema } from "lib/middlewares";
import { updateMentor } from "controlers/mentor";
import { mentorBody } from "lib/schemas";
const methods = require("micro-method-router");

async function patchHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const result = await updateMentor(id as string, req.body);
    res.status(201).json(result);
  } catch (error) {
    throw error;
  }
}

const handler = methods({
  patch: patchHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, validateBodySchema(mentorBody, handler));
};
