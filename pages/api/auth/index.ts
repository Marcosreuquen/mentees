import type { NextApiRequest, NextApiResponse } from "next";
import { AuthController } from "controllers/auth";
const { send } = require("micro");
const methods = require("micro-method-router");
import { runCorsMiddleware, validateBodySchema } from "lib/middlewares";
import { CreateAuthBodySchema } from "lib/schemas";

const postHandler: Function = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { email } = req.body;
  try {
    const auth = await AuthController.findOrCreateAuth(email);
    const sended: boolean = await AuthController.sendCode(email);
    if (!sended && !auth) return send(res, 401);
    return res.status(201).send(true);
  } catch (error) {
    return send(res, 400, { message: error });
  }
};

const handlers = methods({
  post: postHandler,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(
    req,
    res,
    validateBodySchema(CreateAuthBodySchema, handlers)
  );
};
