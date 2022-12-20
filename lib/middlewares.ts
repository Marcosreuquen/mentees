import { NextApiRequest, NextApiResponse } from "next";
import { Mentor } from "models/mentors";
import { decodeToken } from "./jwt";
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

export function authMiddleware(callback:Function): Function{
  return async function (req: NextApiRequest, res:NextApiResponse){
    
    
    if(!req.headers.authorization){
      res.status(401).send("No token sended")
    }else{
      const token = req.headers.authorization.split(` `)[1]
      
      const decoded = decodeToken(token) as any
     
      if(decoded){
       const mentorData = new Mentor("42SVSpfxhxMVNpqgXikT")
       await mentorData.pull()
       
       callback(req, res, mentorData)
  
      }else{
       res.status(401).send("Incorrect Token")
      }
    }
  }
}
