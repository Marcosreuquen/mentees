import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as any;

export function generateToken(authData: any): any {
  try {
    const token = jwt.sign({ id: authData }, secret);
    return token;
  } catch (error) {
    console.log(error);
  }
}

export function decodeToken(token: string): any | jwt.JwtPayload {
  try {
    const decode = jwt.verify(token, secret);
    return decode;
  } catch (error) {
    return null;
  }
}
