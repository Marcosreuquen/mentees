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
    try {
      const result = await this.ref.update(this.data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createNewMentor(data: MentorData) {
    try {
      const findIfMentorExists = await collection
        .where("ownerAuthID", "==", data.ownerAuthID)
        .get();

      if (findIfMentorExists.docs.length) {
        return {
          Message: "Mentor Already created for this user",
          mentor: findIfMentorExists.docs[0].data(),
        };
      } else {
        const newAuthSnap = await collection.add(data);
        const newAuth = new Mentor(newAuthSnap.id, data);
        newAuth.data = data;
        return { message: "Mentor Created", newAuth };
      }
    } catch (error) {
      throw error;
    }
  }
  static async getAllMentors(limit: number, offset: number) {
    try {
      const countAllMentors = await collection.count().get();
      const allMentors = await collection.limit(limit).offset(offset).get();

      return { allMentors, size: countAllMentors.data() };
    } catch (error) {
      throw error;
    }
  }
  static async deleteOneMentor(id: string) {
    try {
      const deleteMentor = collection.doc(id);
      const result = await deleteMentor.delete({ exists: true });

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async searchMentorByAuthId(authID: string) {
    try {
      const result = await collection.where("ownerAuthID", "==", authID).get();

      return result;
    } catch (error) {
      throw error;
    }
  }
  exposeData() {
    return { id: this.id, ...this.data };
  }
}
