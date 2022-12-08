import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware } from "../../../lib/middlewares";
import { createNewMentor, getAllMentors } from "controlers/mentor";
import * as yup from "yup";

const methods = require("micro-method-router");

let bodySchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    category: yup.string().required(),
    community: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
  })
  .noUnknown()
  .strict();

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  /* First try and catch is for the YUP checkout body. */
  try {
    await bodySchema.validate(req.body);

    try {
      const result = await createNewMentor(req.body);
      res.json({ "Mentor successfully created": result });
    } catch (error) {
      throw error;
    }
  } catch (error) {}
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
  post: postHandler,
  get: getHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};
