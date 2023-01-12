import { sendSuggestionByEmail } from "lib/sendgrid";

export async function sendSuggestion(data:any) {
    try {
        const result = await sendSuggestionByEmail(data.name, data.lastname, data.email, data.suggestion)
        return result
        
    } catch (error) {
      throw error;
    }
  }