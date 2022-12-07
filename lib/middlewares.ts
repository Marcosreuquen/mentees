import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors'


  const cors = Cors({
    methods: ['POST', 'GET', 'PATCH', 'HEAD', "OPTIONS"],
  })

  export function runCorsMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
  ) {
    return new Promise((resolve, reject) => {
      cors(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        fn(req, res)
        return resolve(result)
      })
    })
  }

