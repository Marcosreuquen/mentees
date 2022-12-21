import { NextApiRequest, NextApiResponse } from "next";
import { generateToken } from "lib/jwt";
import {
  runCorsMiddleware,
  validateBodySchema,
} from "../../../lib/middlewares";
import { AuthController } from "controllers/auth";
import { createTokenBodySchema } from "lib/schemas";
const methods = require("micro-method-router");

const postHandler: Function = async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, code } = req.body;
    const data = await AuthController.checkCodeAndExpiration(email, code);
    if (!data) res.status(401).send({});
    if (!!data) {
      const token: string = generateToken(data);
      res.status(200).send({ token });
    }
  } catch (error) {
    res.status(401);
  }
};

const handler = methods({
  post: postHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(
    req,
    res,
    validateBodySchema(createTokenBodySchema, handler)
  );
};
