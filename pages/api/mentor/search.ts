import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware } from "lib/middlewares";
import { searchMentors } from "controllers/mentor";

const methods = require("micro-method-router");

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const { q, hitsPerPage, page } = req.query as any;

  try {
    const results = await searchMentors(q, hitsPerPage, page);

    res.json({
      results: results.hits,
      pagination: {
        total: results.nbHits,
        hitsPerPage: results.hitsPerPage,
        nbPages: results.nbPages,
        page: results.page,
      },
    });
  } catch (error) {
    res.json({ error });
  }
}

const handler = methods({
  get: getHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};
