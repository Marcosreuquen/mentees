import { NextApiRequest, NextApiResponse } from 'next';
import { generateToken } from 'lib/jwt';
import { runCorsMiddleware } from "../../../lib/middlewares";

const methods = require("micro-method-router");


async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const tokenPrueba = generateToken("prueba")
  res.json({token:tokenPrueba})
}
const handler = methods({
  post: postHandler,
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runCorsMiddleware(req, res, handler);
};