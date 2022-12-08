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
