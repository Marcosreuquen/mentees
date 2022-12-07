import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware } from "../../../lib/middlewares";
import { createNewMentor } from "controlers/mentor";

const methods = require("micro-method-router");

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    
    const result = await createNewMentor(req.body); 
    res.json({"Mentor successfully created": result})

  } catch (error) {

    throw error;

  }
}
const handler = methods({
  post: postHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};
