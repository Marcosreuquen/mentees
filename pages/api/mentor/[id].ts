import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware, validateBodySchema, authMiddleware } from "lib/middlewares";
import { updateMentor, deleteMentor } from "controlers/mentor";
import { mentorBodyForUpdate } from "lib/schemas";
const methods = require("micro-method-router");

async function patchHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const result = await updateMentor(id as string, req.body);
    res.status(201).json({message:"Updated successfully", changes:result});
  } catch (error) {
    res.json({error})
  }
}
async function deleteHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const result = await deleteMentor(id as string);
    res.status(201).json({message:"Deleted successfully", deleteMentorID:result});
  } catch (error) {
    res.status(400).json({error})
  }
}

const handler = methods({
  patch: validateBodySchema(mentorBodyForUpdate, patchHandler),
  delete: deleteHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, authMiddleware(handler));
};
