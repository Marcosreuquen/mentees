import { uploadImgToCloudinary } from "lib/cloudinary";
import { Mentor } from "models/mentors";

export async function createNewMentor(data: MentorData) {
  try {
    const image = await uploadImgToCloudinary(data.image);
    const mentor = { ...data, image };
    const result = await Mentor.createNewMentor(mentor);
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getAllMentors() {
  try {
    const snapshot = await Mentor.getAllMentors();
    const allMentors = snapshot.docs.map((doc) =>
      new Mentor(doc.id, doc.data()).exposeData()
    );
    return allMentors;
  } catch (error) {
    throw error;
  }
}

export async function updateMentor(id: string, data: MentorData) {
  const mentor = new Mentor(id);
  mentor.data = data;
  await mentor.push();
  return mentor.exposeData();
}

export async function deleteMentor(id: string) {
  const deleteMentor = Mentor.deleteOneMentor(id)
  return deleteMentor
}
