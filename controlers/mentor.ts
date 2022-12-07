import { Mentor } from "models/mentors";

type MentorData = {
    name: string,
    category:string,
    community:string,
    description:string,
    image: string
}

export async function createNewMentor(data:MentorData) {
    try {
        
       const result = await  Mentor.createNewMentor(data)

       return result
        

    } catch (error) {
        throw error
    }
  } 