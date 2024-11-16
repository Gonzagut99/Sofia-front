import Groq from "groq-sdk";
import { SYSTEM_MESSAGE } from './aiContext';
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqChatCompletion(prompt: string, context: Array<{ role: string, content: string }> = [], maxTokens: number = 200, temperature: number = 0.3) {
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: SYSTEM_MESSAGE},
          ...context, 
          { role: "user", content: prompt },
        ],
        model: "llama3-8b-8192",
        max_tokens: maxTokens,
        temperature: temperature,
      });
  
      return chatCompletion.choices[0]?.message?.content || "";
    } catch (error) {
      console.error("Error al obtener la respuesta de Groq:", error);
      throw new Error("No se pudo obtener la respuesta de Groq.");
    }
  }
