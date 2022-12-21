import { Auth } from "models/auth";
import addMinutes from "date-fns/addMinutes";
import isFuture from "date-fns/isFuture";
import gen from "random-seed";
import { sendCodeByEmail } from "lib/sendgrid";

function createRamdomSeed(): number {
  var seed = Date.now();
  var random = gen.create(seed.toString());
  return random.intBetween(10000, 99999);
}

export const AuthController: any = {
  async findOrCreateAuth(email: string): Promise<any> {
    const cleanEmail: string = email.trim().toLowerCase();
    try {
      const auth: Auth = await Auth.findByEmail(cleanEmail);
      if (auth) {
        auth.pull();
        return { id: auth.id, email: auth.data.email };
      } else {
        const newAuth: Auth = await Auth.createNewAuth({
          email: cleanEmail,
          code: "",
          expires: new Date(),
        });
        return { id: newAuth.id, email: newAuth.data.email };
      }
    } catch (error) {
      throw error;
    }
  },

  async sendCode(email: string): Promise<boolean> {
    try {
      const auth: Auth = await Auth.findByEmail(email);
      const code: number = createRamdomSeed();
      const now = Date.now();
      const timeToExpires: Date = addMinutes(now, 20);
      await auth.pull();

      auth.data.code = code;
      auth.data.expires = timeToExpires;

      await auth.push();

      await sendCodeByEmail(email, code);

      return true;
    } catch {
      return false;
    }
  },

  async checkCodeAndExpiration(email: string, code: number): Promise<any> {
    try {
      const auth = await Auth.findByEmail(email);
      if (!auth) return null;
      //chequear fecha de expiración y código
      await auth.pull();
      const date: Date = auth.data.expires.toDate();

      if (isFuture(date) && auth.data.code == code) {
        auth.data.code = null;
        auth.push();
        return { id: auth.id, email: auth.data.email };
      } else return null;
    } catch (error) {
      throw error;
    }
  },
};
