import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware, validateBodySchema, authMiddleware } from "lib/middlewares";
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
  const { hitsPerPage, page } = req.query as any;

  try {
    const result = await getAllMentors(
      hitsPerPage,
      page
    );
    res.status(200).json({
      result: result.result.hits,
      pagination: {
        total: result.result.nbHits,
        page: result.result.page,
        hitsPerPage: result.result.hitsPerPage,
        nbPages: result.result.nbPages
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
