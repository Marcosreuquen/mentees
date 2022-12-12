import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware, validateBodySchema } from "lib/middlewares";
import { createNewMentor, getAllMentors } from "controlers/mentor";
import { mentorBodyForCreate } from "lib/schemas";
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
  post: validateBodySchema(mentorBodyForCreate, postHandler),
  get: getHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};
