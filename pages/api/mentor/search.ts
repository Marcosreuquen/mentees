import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware } from "lib/middlewares";
import { searchMentors } from "controllers/mentor";
import { setLimitsAndOffset } from "lib/limits";

const methods = require("micro-method-router");

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const { query, limit, offset } = req.query as any;

  const finalLimitAndOffset = setLimitsAndOffset(limit, offset)
  try {
    const results = await searchMentors(query, finalLimitAndOffset.finalLimit, finalLimitAndOffset.finalOffset);
    res.json({
      results: results.hits,
      pagination: {
        total: results.nbHits,
        limit: results.length,
        offset: results.offset,
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
