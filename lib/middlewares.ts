import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "PATCH", "HEAD", "OPTIONS"],
});

export function runCorsMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      fn(req, res);
      return resolve(result);
    });
  });
}

export function validateBodySchema(schema: any, cb: Function) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      await schema.validate(req.body);
      cb(req, res);
    } catch (error) {
      res.status(422).send({ field: "body", message: error });
    }
  };
}
export function validateQuerySchema(schema: any, cb: Function) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      await schema.validate(req.query);
      cb(req, res);
    } catch (error) {
      res.status(422).send({ field: "query", message: error });
    }
  };
}
