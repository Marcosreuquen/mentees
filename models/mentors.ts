import { firestore } from "lib/db/firestore";
import { algoliaClient } from "lib/algolia";

const collection = firestore.collection("mentors");
const algoliaIndexMentors = algoliaClient.initIndex("Mentors")

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
          message: "Mentor Already created for this user",
          mentor: findIfMentorExists.docs[0].data(),
        };
      } else {
        const newMentorSnap = await collection.add(data);
        const newMentor = new Mentor(newMentorSnap.id, data);
        newMentor.data = data;
                
        await algoliaIndexMentors.saveObject({...data, objectID:newMentorSnap.id})
        
        return { message: "Mentor Created", newMentor };
      }
    } catch (error) {
      throw error;
    }
  }
  static async getAllMentors(limit: number, offset: number) {
    try {
    
      const result= await algoliaIndexMentors.search("", {
        offset,
        length:limit
      })

      console.log(result);
      

      return result
      
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
