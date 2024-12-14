import { v4 as uuidv4 } from 'uuid';
import { getGroqChatCompletion } from './groqService';
export interface AiData {
    chatId: string,
    aiDataBlocks: {
        prompt: string,
        questionCount: number,
        aiResponse: string,
    }[]
}

const aiData: AiData[] = []
//const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc consectetur fermentum. Nulla facilisi. Sed malesuada, nunc nec lacinia fermentum, felis nunc tincidunt purus, nec ultricies nisi nunc nec purus. Nulla facilisi. Sed malesuada, nunc nec lacinia ferment um, felis nunc tincidunt purus, nec ultricies nisi nunc nec purus."

export const startNewConversation = async (prompt: string): Promise<string> => {
    
    const chatId = uuidv4();
    try {
      const aiResponse = await getGroqChatCompletion(prompt);
  
      aiData.push({
        chatId,
        aiDataBlocks: [
          {
            prompt,
            questionCount: 0,
            aiResponse,
          },
        ],
      });
  
      return chatId;
    } catch (error) {
      console.error("Error al iniciar la conversación con la IA:", error);
      throw new Error("No se pudo iniciar la conversación.");
    }
};

export const sendPromptToAIService = async (prompt: string, chatId:string):Promise<AiData> => {
    // Aquí enviarías el prompt a tu servicio de IA y obtendrías la respuesta
    // Este es un ejemplo simulado
    try {
        const aiResponse = await getGroqChatCompletion(prompt);
    
        const conversation = aiData.find((conversation) => conversation.chatId === chatId);
        if (!conversation) {
          throw new Error(`Conversation with chatId ${chatId} not found`);
        }
    
        conversation.aiDataBlocks.push({
          prompt,
          questionCount: conversation.aiDataBlocks.length,
          aiResponse,
        });
    
        return conversation;
      } catch (error) {
        console.error("Error al enviar el prompt a la IA:", error);
        throw new Error("No se pudo procesar el prompt.");
      }
  };


  export const getChatById = async (chatId: string): Promise<AiData> => {
    const conversation = aiData.find((conversation) => conversation.chatId === chatId);
    if (!conversation) {
      throw new Error(`Conversation with chatId ${chatId} not found`);
    }
    return conversation;
  };