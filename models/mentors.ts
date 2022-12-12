import { firestore } from "lib/db/firestore";

const collection = firestore.collection("mentors");

export class Mentor {
  id: string;
  data: MentorData;
  constructor(id: string, data: MentorData) {
    this.id = id;
    this.data = data;
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
}
