import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware, validateBodySchema, authMiddleware } from "lib/middlewares";
import { setLimitsAndOffset } from "lib/limits";
import { createNewMentor, getAllMentors } from "controllers/mentor";
import { mentorBodyForCreate } from "lib/schemas";
const methods = require("micro-method-router");

async function postHandler(req: NextApiRequest, res: NextApiResponse, authData:any) {
  try {   
    const result = await createNewMentor(req.body, authData);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error });
  }
}
async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const paginationObject = setLimitsAndOffset(
    req.query.limit,
    req.query.offset
  );

  try {
    const result = await getAllMentors(
      paginationObject.finalLimit,
      paginationObject.finalOffset
    );
    res.status(200).json({
      result: result.allMentors,
      pagination: {
        total: result.size,
        limit: paginationObject.finalLimit,
        offset: paginationObject.finalOffset,
      },
    });
  } catch (error) {

    res.status(400).json({ error });
  }
}

const handler = methods({
  post: authMiddleware(validateBodySchema(mentorBodyForCreate, postHandler)),
  get: getHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};
