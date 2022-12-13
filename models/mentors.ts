import { firestore } from "lib/db/firestore";

const collection = firestore.collection("mentors");

export class Mentor {
  id: string;
  data?: MentorData;
  ref: any;
  constructor(id: string, data?: any) {
    this.id = id;
    this.data = data;
    this.ref = collection.doc(id);
  }
  async pull(): Promise<void> {
    const snap = await this.ref.get();
    this.data = snap.data();
  }
  async push(): Promise<void> {
    this.ref.update(this.data);
  }

  static async createNewMentor(data: MentorData) {
    try {
      const newAuthSnap = await collection.add(data);
      const newAuth = new Mentor(newAuthSnap.id, data);
      newAuth.data = data;

      return newAuth;
    } catch (error) {
      throw error;
    }
  }
  static async getAllMentors() {
    try {
      const allMentors = await collection.get();
      return allMentors;
    } catch (error) {
      throw error;
    }
  }
  static async deleteOneMentor(id:string){
    try {
      const deleteMentor = await collection.doc(id).delete()
      return deleteMentor
    } catch (error) {
      throw error
    }
  }

  exposeData() {
    return { id: this.id, ...this.data };
  }
}
