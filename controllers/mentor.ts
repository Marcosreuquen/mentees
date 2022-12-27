import exp from "constants";
import { uploadImgToCloudinary } from "lib/cloudinary";
import { Mentor } from "models/mentors";

export async function createNewMentor(data: MentorData, authData: any) {
  try {
    const image = await uploadImgToCloudinary(data.image);
    const mentor = { ...data, image, ownerAuthID: authData.id.id };
    const result = await Mentor.createNewMentor(mentor);
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getAllMentors(limit: number, offset: number) {
  try {
    const snapshot = await Mentor.getAllMentors(limit, offset);

    const allMentors = snapshot.allMentors.docs.map((doc) =>
      new Mentor(doc.id, doc.data()).exposeData()
    );

    return { allMentors, size: snapshot.size.count };
  } catch (error) {
    throw error;
  }
}

export async function getMentorData(authData: any) {
  try {
    const result = await Mentor.searchMentorByAuthId(authData.id.id);

    return result.docs[0].data();
  } catch (error) {
    throw error;
  }
}

export async function updateMentor(id: string, data: MentorData) {
  const mentor = new Mentor(id);
  mentor.data = data;
  try {
    await mentor.push();
    return mentor.exposeData();
  } catch (error) {
    throw error;
  }
}

export async function deleteMentor(id: string) {
  try {
    const deleteMentor = await Mentor.deleteOneMentor(id);
    return deleteMentor;
  } catch (error) {
    throw error;
  }
}
