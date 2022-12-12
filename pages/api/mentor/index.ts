import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware, validateBodySchema } from "lib/middlewares";
import { createNewMentor, getAllMentors } from "controlers/mentor";
import { mentorBody } from "lib/schemas";
const methods = require("micro-method-router");

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await createNewMentor(req.body);
    res.json({ "Mentor successfully created": result });
  } catch (error) {
    throw error;
  }
}
async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await getAllMentors();
    res.json(result);
  } catch (error) {
    throw error;
  }
}

const handler = methods({
  post: validateBodySchema(mentorBody, postHandler),
  get: getHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};
